<template>
    <!-- 单词学习页面容器 -->
    <div
        v-keyboard="[
            { key: 'ArrowLeft', handler: handlePrevWord },
            { key: 'ArrowRight', handler: handleNextWord },
            { key: 'Enter', handler: passWord },
            { key: 'Escape', handler: failWord }
        ]"
        class="words-page"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
    >
        <!-- 顶部词库标题栏 -->
        <WordsHeader :title="bookName" @change="openBookModal"></WordsHeader>

        <!-- 进度条 -->
        <WordsProgress
            v-show="learningQueue.length > 0"
            :total="learningQueue.length"
            :current="currentIdx + 1"
        ></WordsProgress>
        <!-- 单词卡片滑动容器 -->
        <SliderContainer :items="sliderWords" :isAnimating="isAnimating" :deltaX="deltaX">
            <template #default="{ item: word, index: idx }">
                <!-- 英文单词 -->
                <div class="word-en">{{ word.word }}</div>

                <div style="display: flex; flex-wrap: nowrap; align-items: center; gap: 16px">
                    <WaPhoneticAudio :word="currWord?.word" :phonetic="phonetic" ref="phonetic" />
                </div>

                <!-- 中文释义(点击显示) -->
                <div
                    class="word-zh"
                    :class="{ mosaic: !isZhRevealed }"
                    v-test="'word-zh'"
                    @click="revealZh"
                >
                    <div
                        v-for="item in splitTaggedText(word.definition)"
                        :key="item"
                        class="word-zh-item"
                    >
                        {{ item }}
                    </div>
                </div>

                <!-- 权威词典链接 -->
                <DictionaryLinks :word="word.word" />
            </template>
        </SliderContainer>

        <!-- 底部操作按钮 -->
        <CardActions :showIframeBtn="false" @pass="passWord" @fail="failWord" />

        <!-- SM2测试面板 -->
        <Sm2TestPanel v-if="isDebugMode" />
    </div>
</template>

<script>
// 导入所需的工具函数和组件
import { getWordAudioUrl, splitTaggedText, getPhonetic } from '@/kits/words';
import { STUDY_STATUS_DEF } from '@/store';
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex';
import WordsHeader from './components/WordsHeader.vue';
import WordsProgress from './components/WordsProgress.vue';
import { openFinishModal } from '@/components/FinishModal/finishModal';
import WaPhoneticAudio from '@/components/wa-phonetic-audio.vue';
import CardActions from '@/components/CardActions.vue';
import DictionaryLinks from '@/components/DictionaryLinks.vue';
import SliderContainer from '@/components/SliderContainer.vue';
import { sleep } from '@ustinian-wang/kit';
import { passReview, failReview, wordReviewDB } from '@/kits/idb/WordReviewDB';
import { playNice, playHandsup, playOhno, playRight } from '@/kits/audio';
import { set_session_cache, get_session_cache } from '@/kits/sessionCache';
import { gotoIndex, gotoWordBooks } from '@/router';
import Sm2TestPanel from './components/Sm2TestPanel.vue';
import { keyboard } from '@/directives/keyboard';
import $message from '@/kits/toast';
import { getTodayReviewWordsApi } from '@/apis/wordRecordApi';

// 滑动相关常量
const MOVE_SCALE = 1;
const MoveDef = {
    LAST: -1,
    NOW: 0,
    NEXT: 1
};

const rv_word_cache_key = 'rv_word_cache';
function set_rv_word_cache(bookId, words) {
    let cache = get_rv_word_cache(rv_word_cache_key, {});
    cache[bookId] = words;
    set_session_cache(rv_word_cache_key, cache);
}
function get_rv_word_cache(bookId) {
    let cache = get_session_cache(rv_word_cache_key, {});
    return cache[bookId] || [];
}

export default {
    name: 'ReviewWords',
    components: {
        WordsHeader,
        WordsProgress,
        WaPhoneticAudio,
        CardActions,
        DictionaryLinks,
        SliderContainer,
        Sm2TestPanel
    },
    directives: {
        keyboard
    },
    data() {
        return {
            touchStartX: 0, // 触摸开始位置
            deltaX: 0, // 滑动距离
            isDragging: false, // 是否正在拖动
            isAnimating: false, // 是否正在动画

            learningQueue: [], // 当前组学习的单词队列
            learningQueue_cache: [],
            currentIdx: 0, // 当前在 learningQueue 的位置
            revealedSet: new Set(), // 已揭示释义的索引集合
            phonetic: '',
            nextRes: null
        };
    },
    watch: {
        currentIdx() {
            // this.saveProgress();
        }
    },
    computed: {
        curr_learning_word() {
            return this.learningQueue[this.currentIdx]?.word;
        },
        ...mapGetters('cache', ['add_usr_learned_no']),
        ...mapState('setting', ['groupSize']),
        ...mapState('book', ['wordBooks', 'words', 'currentGroup']),
        ...mapGetters('cache', ['usr_learned_no_arr']),
        ...mapGetters('book', [
            'bookName',
            'bookId',
            'groupCount',
            'groupStart',
            'groupEnd',
            'getRvGroupWords',
            'currentBookIdx'
        ]),
        currWord() {
            return this.learningQueue[this.currentIdx] || { word: '', definition: '' };
        },
        // 获取当前显示的三个单词(前一个、当前、后一个)
        sliderWords() {
            let prevIdx = this.currentIdx - 1;
            if (prevIdx < 0) {
                prevIdx = this.learningQueue.length - 1;
            }
            const currIdx = this.currentIdx;
            let nextIdx = this.currentIdx + 1;
            if (nextIdx >= this.learningQueue.length) {
                nextIdx = 0;
            }
            return [
                this.learningQueue[prevIdx],
                this.learningQueue[currIdx],
                this.learningQueue[nextIdx]
            ];
        },
        ...mapGetters('book', ['progressPercent', 'progressText', 'words']),

        // 当前单词是否已显示中文释义
        isZhRevealed() {
            return this.revealedSet.has(this.currentIdx);
        },
        ...mapGetters(['cacheWrapper', 'isDebugMode'])
    },
    methods: {
        ...mapMutations('book', ['setCurrentBookIdx']),
        ...mapMutations(['setStudyStatus']),
        getWordAudioUrl,
        // 将中文释义按词性分割成数组
        splitTaggedText,
        // 触摸开始事件处理
        onTouchStart(e) {
            if (this.isAnimating || this.learningQueue.length === 0) return;
            this.isDragging = true;
            this.touchStartX = e.changedTouches[0].clientX;
            this.deltaX = 0;
        },
        // 触摸移动事件处理
        onTouchMove(e) {
            if (!this.isDragging) return;
            const moveX = e.changedTouches[0].clientX - this.touchStartX;
            this.deltaX = moveX;
        },
        // 触摸结束事件处理
        async onTouchEnd() {
            if (!this.isDragging) return;
            this.isDragging = false;
            const threshold = window.innerWidth / 4;

            if (Math.abs(this.deltaX) > threshold) {
                this.isAnimating = true;
                if (this.deltaX > 0) {
                    // 向右滑动，显示上一个单词
                    if (this.currentIdx > 0) {
                        this.currentIdx--;
                    } else {
                        // 如果是第一个单词，循环到最后一个
                        this.currentIdx = this.learningQueue.length - 1;
                    }
                } else {
                    // 向左滑动，显示下一个单词
                    if (this.currentIdx < this.learningQueue.length - 1) {
                        this.currentIdx++;
                    } else {
                        // 如果是最后一个单词，循环到第一个
                        this.currentIdx = 0;
                    }
                }
                this.revealedSet.clear();

                this.afterChange();
            }

            // 平滑回弹
            this.deltaX = 0;
            await sleep(300);
            this.isAnimating = false;
        },
        async afterChange() {
            try {
                this.phonetic = '';
                let word = this.currWord;
                this.phonetic = await getPhonetic(word?.word || '');
                console.log('this.phonetic', this.phonetic);
                this.playCurrentWord();
            } catch (error) {
                console.error('afterChange error', error);
            }
        },
        // 显示中文释义
        revealZh() {
            this.revealedSet.add(this.currentIdx);
            this.revealedSet = new Set(this.revealedSet);
        },
        // 已掌握单词
        async passWord() {
            if (!this.isZhRevealed) {
                this.revealZh();
                this.playCurrentWord();
                return;
            }
            passReview(this.curr_learning_word);
            if (this.learningQueue.length <= 1) {
                this.nextGroupOrFinish();
                return;
            }
            this.learningQueue.splice(this.currentIdx, 1);
            if (this.learningQueue.length === 0) {
                this.nextGroupOrFinish();
                return;
            }
            if (this.currentIdx >= this.learningQueue.length) {
                this.currentIdx = this.learningQueue.length - 1;
            }
            this.revealedSet.clear();
            await this.afterChange();
        },
        // 再看一次
        failWord() {
            if (!this.isZhRevealed) {
                this.revealZh();
                this.playCurrentWord();
                return;
            }

            failReview(this.curr_learning_word);
            // 保留当前单词，切换到下一个
            if (this.currentIdx < this.learningQueue.length - 1) {
                this.currentIdx++;
            } else {
                this.currentIdx = 0;
            }
            this.revealedSet.clear();
            this.afterChange();
        },
        // 下一组或全部学完处理
        async nextGroupOrFinish() {
            playRight();
            await this.openGroupFinishModal();
        },
        async openAllFinishModal() {
            let res = await openFinishModal({
                bookName: this.bookName,
                subtitle: '复习结束啦',
                restartText: '再来一次',
                homeText: '休息一下'
            });
            if (res.success) {
                let isContinue = res.data;
                if (isContinue) {
                    this.restartLearning();
                } else {
                    this.stopLearning();
                }
            }
        },
        async openGroupFinishModal() {
            let { currentGroup } = this;
            let res = await openFinishModal({
                bookName: `${this.bookName} - 第${currentGroup + 1}组`,
                subtitle: '当前组已学完，是否继续下一组？',
                restartText: '继续下一组',
                homeText: '休息一下'
            });
            if (res.success) {
                let isContinue = res.data;
                if (isContinue) {
                    this.continueToNextGroup();
                } else {
                    this.stopAtCurrentGroup();
                }
            }
        },
        // 重新开始学习
        async restartLearning() {
            this.currentGroup = 0;
            await this.initLearningQueue();
            this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
        },
        // 继续下一组
        async continueToNextGroup() {
            this.moveToNextGroup();
            await this.initLearningQueue();
        },
        // 停止在当前组
        stopAtCurrentGroup() {
            this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
            gotoIndex();
        },
        // 初始化学习队列
        async initLearningQueue() {
            let res = await getTodayReviewWordsApi({
                page: 1,
                limit: this.groupSize,
                dictIndex: Math.max(this.currentBookIdx, 0) || 0
            });
            if (res.data.success) {
                this.learningQueue = res.data.data.words;
            } else {
                $message.error(res.data.message);
            }
            this.currentIdx = 0;
            this.revealedSet = new Set();
            this.deltaX = 0;
            this.isDragging = false;
            this.isAnimating = false;
        },
        ...mapActions('book', ['loadBook', 'saveProgress', 'moveToNextGroup']),
        // 加载学习进度
        async loadProgress() {
            await this.initLearningQueue();
            await this.afterChange();
        },
        // 停止学习
        stopLearning() {
            this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
            gotoIndex();
        },
        async openBookModal() {
            gotoWordBooks();
        },
        // 播放当前单词音频
        async playCurrentWord() {
            console.log('playCurrentWord', this.$refs.phonetic);
            this.$refs.phonetic.playAudio();
        },
        // 处理上一个单词
        handlePrevWord() {
            if (this.isAnimating || this.learningQueue.length === 0) return;

            if (this.currentIdx > 0) {
                this.currentIdx--;
            } else {
                this.currentIdx = this.learningQueue.length - 1;
            }
            this.revealedSet.clear();
            this.afterChange();
        },

        // 处理下一个单词
        handleNextWord() {
            if (this.isAnimating || this.learningQueue.length === 0) return;

            if (this.currentIdx < this.learningQueue.length - 1) {
                this.currentIdx++;
            } else {
                this.currentIdx = 0;
            }
            this.revealedSet.clear();
            this.afterChange();
        }
    },
    // 组件挂载
    async mounted() {
        await this.loadProgress();

        // show modal for no words
        if (this.learningQueue.length === 0) {
            this.openAllFinishModal();
        }
    },
    // 组件销毁
    beforeDestroy() {
        // window.removeEventListener('storage', this.cacheHandler);
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
    // margin-top: 24px;
    padding: 24px;
    min-height: 100px;
    // overflow: hidden;
}
.word-zh.mosaic {
    color: transparent;
    text-shadow:
        0 0 8px #bbb,
        0 0 12px #bbb,
        0 0 16px #bbb;
    filter: blur(6px) brightness(0.1);
    pointer-events: auto;
    user-select: none;
}
.word-index {
    color: #888;
    font-size: 18px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 70px;
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
    z-index: 1000;
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
    transition: width 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
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

.book-modal-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.18);
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
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
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
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.18);
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
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
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

// 词典链接样式
.dictionary-links {
    // margin-top: 32px;
    text-align: center;
}

.dictionary-title {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    font-weight: 500;
}

.dictionary-buttons {
    padding: 0 24px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
}

.dict-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 60px;
    justify-content: center;

    &:hover {
        background: #e9ecef;
        border-color: #3578e5;
        color: #3578e5;
    }

    &:active {
        transform: scale(0.95);
    }

    .iconify {
        color: #666;
    }

    &:hover .iconify {
        color: #3578e5;
    }
}

// 响应式设计
@media (max-width: 480px) {
    // .dictionary-buttons {
    //     gap: 6px;
    // }

    .dict-btn {
        padding: 6px 10px;
        font-size: 12px;
        min-width: 50px;
    }
}
</style>
