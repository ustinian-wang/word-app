<template>
    <!-- 单词学习页面容器 -->
    <div
        class="words-page"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
    >
        <!-- 顶部词库标题栏 -->
        <WordsHeader
            :title="wordBooks[currentBookIdx]?.name || '词库'"
            @change="openBookModal"
        ></WordsHeader>

        <!-- 进度条 -->
        <WordsProgress :total="words.length" :current="learnedArr.length"></WordsProgress>

        <!-- 单词卡片滑动容器 -->
        <div class="slider-container">
            <div
                v-for="(word, idx) in sliderWords"
                :key="idx"
                class="word-card"
                :class="{ 'is-animating': isAnimating }"
                :style="sliderStyle(idx)"
            >
                <!-- 英文单词 -->
                <div class="word-en">{{ word.en }}</div>

                <!-- 发音按钮 -->
                <AudioButton :audioUrl="getWordAudioUrl(word?.en)" title="播放发音" />

                <!-- 中文释义(点击显示) -->
                <div class="word-zh" :class="{ mosaic: !isZhRevealed }" @click="revealZh">
                    <div v-for="item in parseZhAsArr(word.zh)" :key="item" class="word-zh-item">
                        {{ item }}
                    </div>
                </div>

                <!-- 权威词典链接 -->
                <div class="dictionary-links">
                    <div class="dictionary-title">权威词典</div>
                    <div class="dictionary-buttons">
                        <button
                            v-for="dictType in recommendedDictionaries"
                            :key="dictType"
                            class="dict-btn"
                            @click="openDictionary(dictType, word.en)"
                            :title="getDictionaryName(dictType)"
                        >
                            <Icon :icon="getDictionaryIcon(dictType)" width="16" height="16" />
                            <span>{{ getDictionaryName(dictType) }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部操作按钮 -->
        <div class="card-actions">
            <div class="action-btn pass-btn" @click="passWord" title="已掌握">
                <Icon icon="mdi:check" width="28" height="28" :style="{ color: '#4caf50' }" />
            </div>
            <div class="action-btn fail-btn" @click="failWord" title="再看一次">
                <Icon icon="mdi:close" width="28" height="28" :style="{ color: '#e55' }" />
            </div>
            <div
                v-if="false"
                class="action-btn iframe-btn"
                @click="openIframeExample"
                title="打开网页"
            >
                <Icon icon="mdi:web" width="28" height="28" :style="{ color: '#3578e5' }" />
            </div>
        </div>
    </div>
</template>

<script>
    // 导入所需的工具函数和组件
    import {
        getWordBooks,
        getCurrentBookIndex,
        setCurrentBookIndex,
        getCurrentWords,
        getBookProgress,
        setBookProgress,
    } from '@/kits/words';
    import { Icon } from '@iconify/vue2';
    import { getWordAudioUrl } from '@/kits/words';
    import { STUDY_STATUS_DEF } from '@/store';
    import { mapMutations } from 'vuex';
    import WordsHeader from './components/WordsHeader.vue';
    import WordsProgress from './components/WordsProgress.vue';
    import { openBookSelectModal } from './components/bookSelectModal';
    import { openFinishModal } from '@/components/FinishModal/finishModal';
    import { openIframeModal } from '@/components/IframeModal/iframeModal';
    import AudioButton from '@/components/AudioButton.vue';
    import {
        getRecommendedDictionaries,
        getDictionaryUrl,
        getDictionaryName,
        getDictionaryIcon,
    } from './dictionaryConfig';
    // 滑动相关常量
    const MOVE_SCALE = 1;
    const MoveDef = {
        LAST: -1,
        NOW: 0,
        NEXT: 1,
    };
    const GROUP_SIZE = 10; // 每组单词数量

    export default {
        name: 'Words',
        components: { Icon, WordsHeader, WordsProgress, AudioButton },
        data() {
            return {
                words: [], // 当前词库单词列表
                wordBooks: [], // 所有词库列表
                currentBookIdx: 0, // 当前词库索引
                learningQueue: [], // 当前组学习的单词索引队列
                currentIdx: 0, // 当前在 learningQueue 的位置
                revealedSet: new Set(), // 已揭示释义的索引集合
                touchStartX: 0, // 触摸开始位置
                deltaX: 0, // 滑动距离
                isDragging: false, // 是否正在拖动
                isAnimating: false, // 是否正在动画
                showBookList: false, // 是否显示词库列表
                showConfirm: false, // 是否显示确认弹窗
                bookToSwitch: null, // 要切换的词库索引
                currentGroup: 0, // 当前组号
                learnedArr: [], // 已学过的单词索引数组
                groupCount: 1, // 总组数
                finishAll: false, // 是否全部学完
                finishGroup: false, // 是否当前组学完
            };
        },
        computed: {
            // 获取当前显示的三个单词(前一个、当前、后一个)
            sliderWords() {
                const prevIdx = this.learningQueue[this.currentIdx - 1];
                const currIdx = this.learningQueue[this.currentIdx];
                const nextIdx = this.learningQueue[this.currentIdx + 1];
                const getWord = idx =>
                    typeof idx === 'number' ? this.words[idx] : { en: '', zh: '', enDef: '' };
                return [getWord(prevIdx), getWord(currIdx), getWord(nextIdx)];
            },
            // 计算学习进度百分比
            progressPercent() {
                return this.learnedArr.length > 0
                    ? Math.round((this.learnedArr.length / this.words.length) * 100)
                    : 0;
            },
            // 当前学习进度文本
            progressText() {
                return this.words.length > 0
                    ? `${this.currentIdx + 1} / ${this.learningQueue.length}`
                    : '';
            },
            // 当前单词是否已显示中文释义
            isZhRevealed() {
                return this.revealedSet.has(this.learningQueue[this.currentIdx]);
            },
            // 推荐词典列表
            recommendedDictionaries() {
                return getRecommendedDictionaries();
            },
        },
        methods: {
            ...mapMutations(['setStudyStatus']),

            getWordAudioUrl,
            // 获取词典名称
            getDictionaryName(dictType) {
                return getDictionaryName(dictType);
            },

            // 获取词典图标
            getDictionaryIcon(dictType) {
                return getDictionaryIcon(dictType);
            },

            // 将中文释义按词性分割成数组
            parseZhAsArr(zh) {
                function splitTaggedText(text) {
                    const regex = /([a-z]*\.\s[^a-z]*)/gi;
                    const matches = text.match(regex);
                    return matches ? matches.map(item => item.trim()) : [];
                }
                return splitTaggedText(zh);
            },

            // 计算单词卡片的样式
            sliderStyle(idx) {
                const base = (idx - 1) * 100;
                const move = idx === 0 || idx === 2 ? 0 : (this.deltaX / window.innerWidth) * 100;
                return {
                    transform: `translateX(calc(${base}% + ${move}vw))`,
                    zIndex: idx === 1 ? 2 : 1,
                    transition: this.isAnimating
                        ? 'transform 0.3s cubic-bezier(.25,.8,.5,1)'
                        : 'none',
                };
            },
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
                if (
                    (this.currentIdx === 0 && moveX > 0) ||
                    (this.currentIdx === this.learningQueue.length - 1 && moveX < 0)
                ) {
                    this.deltaX = moveX * MOVE_SCALE;
                } else {
                    this.deltaX = moveX;
                }
            },
            // 触摸结束事件处理
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
            // 动画过渡
            animateTo(direction, cb) {
                this.isAnimating = true;
                this.deltaX = direction * window.innerWidth;
                setTimeout(() => {
                    this.isAnimating = false;
                    this.deltaX = 0;
                    if (cb) cb();
                }, 300);
            },
            // 显示中文释义
            revealZh() {
                this.revealedSet.add(this.learningQueue[this.currentIdx]);
                this.revealedSet = new Set(this.revealedSet);
            },
            // 已掌握单词
            passWord() {
                this.animateTo(MoveDef.LAST, this.handlePass);
            },
            // 再看一次
            failWord() {
                this.animateTo(MoveDef.NEXT, this.handleFail);
            },
            // 已掌握单词处理
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
            // 再看一次处理
            handleFail() {
                // 保留当前单词，切换到下一个
                if (this.currentIdx < this.learningQueue.length - 1) {
                    this.currentIdx++;
                }
                this.revealedSet.clear();
                this.revealedSet = new Set();
                this.saveProgress();
            },
            // 下一组或全部学完处理
            async nextGroupOrFinish() {
                // 如果本组学完，进入下一组或全部学完
                if (this.learnedArr.length >= this.words.length) {
                    this.saveProgress();
                    await this.openAllFinishModal();
                    return;
                }
                // 当前组学完，显示询问是否继续的模态框
                // this.finishGroup = true;
                this.saveProgress();
                await this.openGroupFinishModal();
            },
            async openAllFinishModal() {
                let res = await openFinishModal({
                    bookName: this.wordBooks[this.currentBookIdx]?.name || '',
                });
                console.log('[res openAllFinishModal]', res);
                if (res.success) {
                    let isContinue = res.data;
                    if (isContinue) {
                        // todo 这里帮他自动切换词库，同等水平网上
                        // todo 文案也要改下
                        this.restartLearning();
                    } else {
                        this.stopLearning();
                    }
                }
            },
            async openGroupFinishModal() {
                let { wordBooks, currentBookIdx, currentGroup } = this;
                let res = await openFinishModal({
                    bookName: `${wordBooks[currentBookIdx]?.name || ''} - 第${currentGroup + 1}组`,
                    subtitle: '当前组已学完，是否继续下一组？',
                    restartText: '继续下一组',
                    homeText: '休息一下',
                });
                console.log('[res openGroupFinishModal]', res);
                if (res.success) {
                    let isContinue = res.data;
                    if (isContinue) {
                        this.continueToNextGroup();
                    } else {
                        this.stopAtCurrentGroup();
                    }
                }
            },
            // 切换词库确认
            confirmSwitch(idx) {
                this.bookToSwitch = idx;
                this.showConfirm = true;
            },
            // 确认切换词库
            doSwitchBook() {
                setCurrentBookIndex(this.bookToSwitch);
                this.currentBookIdx = this.bookToSwitch;
                this.loadProgress();
                this.showConfirm = false;
                this.showBookList = false;
            },
            async openBookModal() {
                // 调用
                let res = await openBookSelectModal({
                    books: this.wordBooks,
                    currentBookIdx: this.currentBookIdx,
                });
                if (res.success) {
                    let idx = res.data;
                    this.confirmSwitch(idx);
                }
            },
            // 重新开始学习
            restartLearning() {
                this.currentGroup = 0;
                this.learnedArr = [];
                this.saveProgress();
                this.initLearningQueue();
                this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
            },
            // 继续下一组
            continueToNextGroup() {
                // 继续下一组
                this.currentGroup++;
                if (this.currentGroup >= this.groupCount) {
                    this.currentGroup = this.groupCount - 1;
                }
                // this.finishGroup = false;
                this.initLearningQueue();
            },
            // 停止在当前组
            stopAtCurrentGroup() {
                // 停止在当前组
                // this.finishGroup = false;
                this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
                this.$router.push('/');
            },
            // 初始化学习队列
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
            // 保存学习进度
            saveProgress() {
                const bookId = this.wordBooks[this.currentBookIdx]?.id;
                if (!bookId) return;
                setBookProgress(bookId, {
                    group: this.currentGroup,
                    learned: this.learnedArr,
                    percent: this.progressPercent / 100,
                });
            },
            // 加载学习进度
            loadProgress() {
                this.wordBooks = getWordBooks();
                this.currentBookIdx = getCurrentBookIndex();
                this.words = getCurrentWords();
                const bookId = this.wordBooks[this.currentBookIdx]?.id;
                if (!bookId) return;
                const progress = getBookProgress(bookId);
                this.currentGroup = progress.group || 0;
                this.learnedArr = progress.learned || [];
                this.finishAll = this.learnedArr.length >= this.words.length;
                this.groupCount = Math.ceil(this.words.length / GROUP_SIZE);
                this.initLearningQueue();
            },
            // 停止学习
            stopLearning() {
                this.setStudyStatus(STUDY_STATUS_DEF.LEARNED);
                this.$router.push('/');
            },
            // 打开iframe弹窗示例
            async openIframeExample() {
                try {
                    await openIframeModal({
                        url: 'https://example.com',
                        title: '示例网页',
                        showRefresh: true,
                        showUrlInput: true,
                        width: '90vw',
                        height: '80vh',
                        onLoaded: url => {
                            console.log('页面加载完成:', url);
                        },
                        onError: error => {
                            console.error('加载错误:', error.message);
                        },
                        onUrlChange: url => {
                            console.log('URL已更改:', url);
                        },
                    });
                    console.log('iframe弹窗已关闭');
                } catch (error) {
                    console.error('打开iframe弹窗失败:', error);
                }
            },
            // 打开词典
            async openDictionary(dictType, word) {
                if (!word) return;

                try {
                    const url = getDictionaryUrl(dictType, word);
                    const dictName = getDictionaryName(dictType);
                    const title = `${dictName} - ${word}`;

                    await openIframeModal({
                        url,
                        title,
                        showRefresh: true,
                        showUrlInput: false, // 词典页面不需要URL输入
                        width: '90vw',
                        height: '80vh',
                        onLoaded: loadedUrl => {
                            console.log(`${dictName}加载完成:`, loadedUrl);
                        },
                        onError: error => {
                            console.error(`${dictName}加载错误:`, error.message);
                            // 如果iframe加载失败，提示用户
                            if (
                                error.message.includes('frame-ancestors') ||
                                error.message.includes('CSP')
                            ) {
                                if (dictType === 'cambridge' || dictType === 'merriam') {
                                    alert(
                                        `${dictName}不支持在iframe中显示。\n\n建议：\n1. 尝试其他国内词典\n2. 或直接访问：${url}`
                                    );
                                } else {
                                    alert(`${dictName}不支持在iframe中显示，请尝试其他词典。`);
                                }
                            } else if (error.message.includes('加载已取消')) {
                                console.log('用户取消了加载');
                                // 不显示alert，因为这是用户主动取消的
                            } else {
                                alert(`${dictName}加载失败: ${error.message}`);
                            }
                        },
                    });
                } catch (error) {
                    console.error(`打开词典失败:`, error);
                    alert(`打开${getDictionaryName(dictType)}失败: ${error.message}`);
                }
            },
        },
        // 组件挂载
        mounted() {
            this.loadProgress();
            window.addEventListener('storage', this.loadProgress);
        },
        // 组件销毁
        beforeDestroy() {
            window.removeEventListener('storage', this.loadProgress);
        },
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
        top: 0;
        left: 0;
        width: 100vw;
        // height: calc(100vh - 56px);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        pointer-events: none;
    }
    .word-card {
        position: absolute;
        top: 0;
        left: 0;
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
        transition:
            transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
            box-shadow 0.2s;
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
        box-shadow: 0 2px 8px rgba(60, 60, 60, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 44px;
        cursor: pointer;
        transition:
            box-shadow 0.2s,
            background 0.2s;
    }
    .action-btn:active {
        background: #f0f4fa;
    }

    // 词典链接样式
    .dictionary-links {
        margin-top: 32px;
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
