<template>
  <div
    class="words-page"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="words-header">
      <span class="book-title" @click="showBookList = true">
        {{ wordBooks[currentBookIdx]?.name || '词库' }}
        <svg class="arrow" width="16" height="16" viewBox="0 0 24 24"><path d="M6 10l6 6 6-6" stroke="#3578e5" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
      </span>
    </div>
    <div class="slider-container">
      <div
        v-for="(word, idx) in sliderWords"
        :key="idx"
        class="word-card"
        :class="{ 'is-animating': isAnimating }"
        :style="sliderStyle(idx)"
      >
        <div class="word-en">{{ word.en }}</div>
        
        <div class="audio-btn" @click="playAudio" title="播放发音">
          <Icon 
            icon="mdi:volume-high" 
            width="32" 
            height="32"
            :style="{ color: '#3578e5'}"
          />
        </div>
        <div class="word-zh" :class="{ 'mosaic': !isZhRevealed }" @click="revealZh">
          <div v-for="item in parseZhAsArr(word.zh)" :key="item" class="word-zh-item">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <div class="action-btn pass-btn" @click="passWord" title="已掌握" >
        <Icon 
          icon="mdi:check" width="28" height="28"
          :style="{ color: '#4caf50'}"
        />
      </div>
      <div class="action-btn fail-btn" @click="failWord" title="再看一次">
        <Icon 
          icon="mdi:close" width="28" height="28"
          :style="{ color: '#e55' }"
        />
      </div>
    </div>
    <div class="progress-bar-fixed">
      <div class="progress-bar-bg" v-if="learningQueue.length > 0">
        <div class="progress-bar-fg" :style="{ width: progressPercent + '%' }"></div>
      </div>
      <div class="progress-text">
        {{ progressText }}
      </div>
    </div>
    <div v-if="showBookList" class="book-modal-mask" @click.self="showBookList = false">
      <div class="book-modal">
        <h3>切换词库</h3>
        <ul>
          <li v-for="(book, idx) in wordBooks" :key="book.id" :class="{active: idx === currentBookIdx}">
            <span>{{ book.name }}</span>
            <button v-if="idx !== currentBookIdx" @click="confirmSwitch(idx)">切换</button>
            <span v-else class="current-label">当前</span>
          </li>
        </ul>
        <button class="close-btn" @click="showBookList = false">取消</button>
      </div>
    </div>
    <div v-if="showConfirm" class="confirm-mask">
      <div class="confirm-modal">
        <div>确定切换到词库「{{ wordBooks[bookToSwitch]?.name }}」吗？</div>
        <div class="confirm-actions">
          <button @click="doSwitchBook">确定</button>
          <button @click="showConfirm = false">取消</button>
        </div>
      </div>
    </div>
    <FinishModal
      :visible="finishAll"
      :bookName="wordBooks[currentBookIdx]?.name || ''"
      @restart="restartLearning"
      @returnHome="goHome"
    />
  </div>
</template>

<script>
import { getWordBooks, getCurrentBookIndex, setCurrentBookIndex, getCurrentWords, getBookProgress, setBookProgress } from '../kits/words';
import FinishModal from '../components/FinishModal.vue';
import { Icon } from '@iconify/vue2';
import { getWordAudioUrl } from '../kits/words';

const MOVE_SCALE = 1;
const MoveDef = {
  LAST: -1,
  NOW: 0,
  NEXT: 1,
}
const GROUP_SIZE = 10;

export default {
  name: 'Words',
  components: { FinishModal, Icon },
  data() {
    return {
      words: [], // 当前词库单词
      wordBooks: [],
      currentBookIdx: 0,
      learningQueue: [], // 当前组学习的单词索引队列
      currentIdx: 0, // 当前在 learningQueue 的位置
      revealedSet: new Set(), // 已揭示释义的索引
      touchStartX: 0,
      deltaX: 0,
      isDragging: false,
      isAnimating: false,
      showBookList: false,
      showConfirm: false,
      bookToSwitch: null,
      currentGroup: 0, // 当前组号
      learnedArr: [], // 已学过的单词索引
      groupCount: 1, // 总组数
      finishAll: false, // 是否全部学完
      audioPlayer: null // 音频播放器
    };
  },
  computed: {
    sliderWords() {
      const prevIdx = this.learningQueue[this.currentIdx - 1];
      const currIdx = this.learningQueue[this.currentIdx];
      const nextIdx = this.learningQueue[this.currentIdx + 1];
      const getWord = idx => (typeof idx === 'number' ? this.words[idx] : { en: '', zh: '', enDef: '' });
      return [getWord(prevIdx), getWord(currIdx), getWord(nextIdx)];
    },
    progressPercent() {
      // 当前词库整体进度百分比
      return this.learnedArr.length > 0 ? Math.round((this.learnedArr.length / this.words.length) * 100) : 0;
    },
    progressText() {
      return this.words.length > 0 ? `${this.currentIdx + 1} / ${this.learningQueue.length}` : '';
    },
    isZhRevealed() {
      return this.revealedSet.has(this.learningQueue[this.currentIdx]);
    }
  },
  methods: {
    parseZhAsArr(zh) {
      function splitTaggedText(text) {
        const regex = /([a-z]*\.\s[^a-z]*)/gi;
        const matches = text.match(regex);
        return matches ? matches.map(item => item.trim()) : [];
      }


      return splitTaggedText(zh);
    },
    sliderStyle(idx) {
      const base = (idx - 1) * 100;
      const move = idx === 0 || idx === 2 ? 0 : (this.deltaX / window.innerWidth) * 100;
      return {
        transform: `translateX(calc(${base}% + ${move}vw))`,
        zIndex: idx === 1 ? 2 : 1,
        transition: this.isAnimating ? 'transform 0.3s cubic-bezier(.25,.8,.5,1)' : 'none'
      };
    },
    onTouchStart(e) {
      if (this.isAnimating || this.learningQueue.length === 0) return;
      this.isDragging = true;
      this.touchStartX = e.changedTouches[0].clientX;
      this.deltaX = 0;
    },
    onTouchMove(e) {
      if (!this.isDragging) return;
      const moveX = e.changedTouches[0].clientX - this.touchStartX;
      if (
        (this.currentIdx === 0 && moveX > 0) ||
        (this.currentIdx === this.learningQueue.length - 1 && moveX < 0)
      ) {
        this.deltaX = moveX * MOVE_SCALE;
      } else {
        this.deltaX = moveX;
      }
    },
    onTouchEnd() {
      if (!this.isDragging) return;
      this.isDragging = false;
      const threshold = window.innerWidth / 16;
      if (this.deltaX < -threshold) {
        this.animateTo(MoveDef.LAST, this.handlePass);
      } else if (this.deltaX > threshold) {
        this.animateTo(MoveDef.NEXT, this.handleFail);
      } else {
        this.animateTo(MoveDef.NOW);
      }
    },
    animateTo(direction, cb) {
      this.isAnimating = true;
      this.deltaX = direction * window.innerWidth;
      setTimeout(() => {
        this.isAnimating = false;
        this.deltaX = 0;
        if (cb) cb();
      }, 300);
    },
    revealZh() {
      this.revealedSet.add(this.learningQueue[this.currentIdx]);
      this.revealedSet = new Set(this.revealedSet);
    },
    passWord() {
      this.animateTo(MoveDef.LAST, this.handlePass);
    },
    failWord() {
      this.animateTo(MoveDef.NEXT, this.handleFail);
    },
    handlePass() {
      // 移除当前单词
      if (this.learningQueue.length <= 1) {
        this.learnedArr.push(this.learningQueue[this.currentIdx]);
        this.saveProgress();
        this.nextGroupOrFinish();
        return;
      }
      this.learnedArr.push(this.learningQueue[this.currentIdx]);
      this.learningQueue.splice(this.currentIdx, 1);
      if (this.currentIdx >= this.learningQueue.length) {
        this.currentIdx = this.learningQueue.length - 1;
      }
      this.revealedSet.clear();
      this.revealedSet = new Set();
      this.saveProgress();
    },
    handleFail() {
      // 保留当前单词，切换到下一个
      if (this.currentIdx < this.learningQueue.length - 1) {
        this.currentIdx++;
      }
      this.revealedSet.clear();
      this.revealedSet = new Set();
      this.saveProgress();
    },
    nextGroupOrFinish() {
      // 如果本组学完，进入下一组或全部学完
      if (this.learnedArr.length >= this.words.length) {
        this.finishAll = true;
        this.saveProgress();
        return;
      }
      this.currentGroup++;
      if (this.currentGroup >= this.groupCount) {
        this.currentGroup = this.groupCount - 1;
      }
      this.initLearningQueue();
    },
    confirmSwitch(idx) {
      this.bookToSwitch = idx;
      this.showConfirm = true;
    },
    doSwitchBook() {
      setCurrentBookIndex(this.bookToSwitch);
      this.currentBookIdx = this.bookToSwitch;
      this.loadProgress();
      this.showConfirm = false;
      this.showBookList = false;
    },
    restartLearning() {
      this.currentGroup = 0;
      this.learnedArr = [];
      this.finishAll = false;
      this.saveProgress();
      this.initLearningQueue();
    },
    initLearningQueue() {
      this.wordBooks = getWordBooks();
      this.currentBookIdx = getCurrentBookIndex();
      this.words = getCurrentWords();
      this.groupCount = Math.ceil(this.words.length / GROUP_SIZE);
      // 过滤掉已学过的单词，取当前组的10个
      const groupStart = this.currentGroup * GROUP_SIZE;
      const groupEnd = Math.min(groupStart + GROUP_SIZE, this.words.length);
      // 只学未学过的
      const groupWords = [];
      for (let i = groupStart; i < groupEnd; i++) {
        if (!this.learnedArr.includes(i)) groupWords.push(i);
      }
      this.learningQueue = groupWords;
      console.log(this.learningQueue, groupStart, groupEnd, this.words);
      this.currentIdx = 0;
      this.revealedSet = new Set();
      this.deltaX = 0;
      this.isDragging = false;
      this.isAnimating = false;
    },
    saveProgress() {
      const bookId = this.wordBooks[this.currentBookIdx]?.id;
      if (!bookId) return;
      setBookProgress(bookId, {
        group: this.currentGroup,
        learned: this.learnedArr,
        percent: this.progressPercent / 100
      });
    },
    loadProgress() {
      this.wordBooks = getWordBooks();
      this.currentBookIdx = getCurrentBookIndex();
      this.words = getCurrentWords();
      const bookId = this.wordBooks[this.currentBookIdx]?.id;
      if (!bookId) return;
      const progress = getBookProgress(bookId);
      this.currentGroup = progress.group || 0;
      this.learnedArr = progress.learned || [];
      this.finishAll = (this.learnedArr.length >= this.words.length);
      this.groupCount = Math.ceil(this.words.length / GROUP_SIZE);
      this.initLearningQueue();
    },
    goHome() {
      this.$router.push('/');
    },
    playAudio() {
      const currentWord = this.sliderWords[1];
      if (!currentWord?.en) return;
      
      // 使用 Google TTS API
      const audioUrl = getWordAudioUrl(currentWord.en);
      
      if (this.audioPlayer) {
        this.audioPlayer.pause();
      }
      
      this.audioPlayer = new Audio(audioUrl);
      this.audioPlayer.play().catch(err => {
        console.error('Failed to play audio:', err);
      });
    }
  },
  mounted() {
    this.loadProgress();
    window.addEventListener('storage', this.loadProgress);
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.loadProgress);
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
    }
  }
};
</script>

<style lang="less" scoped>
.words-page {
  min-height: 100vh;
  height: 100vh;
  box-sizing: border-box;
  /* padding-bottom: 60px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.slider-container {
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  // height: calc(100vh - 56px); 
  display: flex;
  align-items: flex-start;
  justify-content: center;
  pointer-events: none;
}
.word-card {
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  // height: calc(100vh - 56px);
  height: 100vh;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  will-change: transform;
  box-sizing: border-box;
  pointer-events: auto;
  transition: box-shadow 0.2s;
  padding-top: 15vh;
}
.word-card.is-animating {
  transition: transform 0.3s cubic-bezier(.25,.8,.5,1), box-shadow 0.2s;
}
.word-en {
  font-size: 40px;
  font-weight: bold;
  color: #3578e5;
  /* margin-bottom: 24px; */
}
.word-zh {
  font-size: 28px;
  color: #333;
  cursor: pointer;
  transition: filter 0.2s;
  margin-top: 24px;
}
.word-zh.mosaic {
  color: transparent;
  text-shadow: 0 0 8px #bbb, 0 0 12px #bbb, 0 0 16px #bbb;
  filter: blur(6px) brightness(0.1);
  pointer-events: auto;
  user-select: none;
}
.word-index {
  color: #888;
  font-size: 18px;
  text-align: center;
  position: absolute;
  left: 0; right: 0; bottom: 70px;
}
.progress-bar-fixed {
  position: fixed;
  left: 0;
  right: 0;
  /* bottom: 68px; */
  height: 32px;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  pointer-events: none;
  opacity: 0.92;
}
.progress-bar-fixed .progress-text,
.progress-bar-fixed .progress-bar-bg {
  pointer-events: auto;
}
.progress-bar-bg {
  width: 70vw;
  max-width: 340px;
  height: 5px;
  background: #e3e8f0;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: none;
}
.progress-bar-fg {
  height: 100%;
  background: linear-gradient(90deg, #b3d1fa 0%, #aee2e6 100%);
  border-radius: 3px;
  transition: width 0.3s cubic-bezier(.25,.8,.5,1);
}
.progress-text {
  color: #8ca0b3;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 4px;
  text-align: center;
  text-shadow: none;
}
.words-header {
  position: absolute;
  top: 18px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 20;
}
.book-title {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  height: 44px;
  line-height: 44px;
  font-weight: 700;
  color: #3578e5;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s;
  /* border-bottom: 1.5px dashed #b3d1fa; */
  padding: 2px 10px;
}
.book-title:hover {
  color: #2256a5;
  /* border-bottom: 1.5px solid #3578e5; */
}
.book-title .arrow {
  margin-left: 4px;
  transition: transform 0.2s;
}
.book-title:active .arrow,
.book-title:hover .arrow {
  transform: translateY(2px) scale(1.1);
}
.book-modal-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.book-modal {
  background: #fff;
  border-radius: 12px;
  padding: 24px 18px 18px 18px;
  min-width: 240px;
  max-width: 90vw;
  box-shadow: 0 8px 32px rgba(60,60,60,0.18);
  text-align: center;
}
.book-modal h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #3578e5;
}
.book-modal ul {
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
}
.book-modal li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f4fa;
}
.book-modal li:last-child {
  border-bottom: none;
}
.book-modal .current-label {
  color: #fff;
  background: #4f8cff;
  border-radius: 4px;
  padding: 2px 10px;
  font-size: 13px;
  font-weight: 600;
}
.book-modal button {
  background: #f0f4fa;
  color: #3578e5;
  border: none;
  border-radius: 4px;
  padding: 3px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;
}
.book-modal button:active {
  background: #e0e7ef;
}
.close-btn {
  margin-top: 10px;
  width: 100%;
  background: #e0e7ef !important;
  color: #888 !important;
}
.confirm-mask {
  position: fixed;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.18);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.confirm-modal {
  background: #fff;
  border-radius: 12px;
  padding: 24px 18px 18px 18px;
  min-width: 220px;
  max-width: 80vw;
  box-shadow: 0 8px 32px rgba(60,60,60,0.18);
  text-align: center;
}
.confirm-actions {
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
  gap: 18px;
}
.confirm-actions button {
  background: #4f8cff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 18px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.confirm-actions button:last-child {
  background: #e0e7ef;
  color: #888;
}
.card-actions {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15vh;
  display: flex;
  justify-content: center;
  gap: 38px;
  z-index: 30;
}
.action-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(60,60,60,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
}
.action-btn:active {
  background: #f0f4fa;
}
.audio-btn {
  margin-top: 24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0f4fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
.audio-btn:active {
  background: #e0e7ef;
}
</style>
