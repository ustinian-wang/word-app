<template>
    <div class="sm2-test-panel">
        <!-- 英文提示 -->
        <span class="desc">For SM2/DB testing only</span>

        <!-- 日期选择下拉 -->
        <div class="date-select-wrap">
            <label for="date-select">Select review date:</label>
            <select id="date-select" v-model="selectedDate" @change="handleDateChange">
                <option v-for="date in dateOptions" :key="date" :value="date">{{ date }}</option>
            </select>
        </div>
        <!-- 选中日期的单词表格 -->
        <div v-if="filteredWords.length" class="table-wrap">
            <table class="db-table">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>EF</th>
                        <th>Interval</th>
                        <th>Repetitions</th>
                        <th>Next Review</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in filteredWords" :key="item.word" :class="{ odd: idx % 2 === 1 }">
                        <td>{{ item.word }}</td>
                        <td>{{ item.EF.toFixed(2) }}</td>
                        <td>{{ item.interval }}</td>
                        <td>{{ item.repetitions }}</td>
                        <td>{{ formatDate(item.next_review) || '-' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 弹窗展示所有数据 -->
        <div v-if="showModal" class="modal-mask" @click.self="showModal = false">
            <div class="modal-box">
                <button class="close-btn" @click="showModal = false" aria-label="Close">×</button>
                <div class="modal-title">All Words in DB</div>
                <div class="table-wrap">
                    <table class="db-table">
                        <thead>
                            <tr>
                                <th>Word</th>
                                <th>EF</th>
                                <th>Interval</th>
                                <th>Repetitions</th>
                                <th>Next Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, idx) in allWords"
                                :key="item.word"
                                :class="{ odd: idx % 2 === 1 }"
                            >
                                <td>{{ item.word }}</td>
                                <td>{{ item.EF.toFixed(2) }}</td>
                                <td>{{ item.interval }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{ formatDate(item.next_review) || '-' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 生成模拟数据按钮 -->
        <button class="main-btn" @click="handleGenerateMockData">
            <span class="icon">+</span> Generate Mock Data
        </button>
        <!-- 查询所有数据按钮 -->
        <button class="main-btn green" @click="handleShowAllData">
            <span class="icon">≡</span> Show All Words (DB)
        </button>
    </div>
</template>

<script setup>
// 中文注释：引入SM2和IDB相关API
import { wordReviewDB } from '@/kits/idb/WordReviewDB';
import { getDefaultSM2 } from '@/kits/sm2';
import { ref, watch, onMounted, onBeforeUnmount, computed, getCurrentInstance } from 'vue';

// 控制弹窗显示
const showModal = ref(false);
// 存储所有单词数据
const allWords = ref([]);

// 日期选择相关
const selectedDate = ref('');
const dateOptions = ref([]);
const filteredWords = ref([]);

// 生成日期选项（今天前后15天）
function getDateStr(offset) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().slice(0, 10);
}
dateOptions.value = Array.from({ length: 31 }, (_, i) => getDateStr(i - 15));
selectedDate.value = getDateStr(0);

// 选择日期后，从db筛选对应单词
async function handleDateChange() {
    // 获取所有单词
    const all = await wordReviewDB.getAllWords();
    // 过滤next_review在当天的单词（只比较年月日，避免时区误差）
    filteredWords.value = all.filter(item => {
        if (!item.next_review) return false;
        const d = new Date(item.next_review);
        // 只取年月日部分
        const dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        return dateStr === selectedDate.value;
    });
}

// 页面加载时自动查一次今天的
onMounted(() => {
    handleDateChange();
});

// 获取当前词库单词（通过inject或proxy）
const instance = getCurrentInstance();
let wordsList = computed(() => {
    // 尝试从父组件暴露的words获取
    return (instance?.proxy?.$parent?.words || []).map(w => w.en);
});

// 生成20条模拟单词数据（从当前词库随机选取）
async function handleGenerateMockData() {
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    // 随机抽取20个单词
    let allWordsArr = wordsList.value;
    if (!allWordsArr || allWordsArr.length === 0) {
        alert('No words in current wordbook!');
        return;
    }
    let sample = [];
    let used = new Set();
    while (sample.length < 20 && used.size < allWordsArr.length) {
        let idx = Math.floor(Math.random() * allWordsArr.length);
        if (!used.has(idx)) {
            sample.push(allWordsArr[idx]);
            used.add(idx);
        }
    }
    for (let word of sample) {
        // EF: 1.3~2.5, interval: 0~30, repetitions: 0~10
        const EF = +(1.3 + Math.random() * (2.5 - 1.3)).toFixed(2);
        const interval = Math.floor(Math.random() * 31);
        const repetitions = Math.floor(Math.random() * 11);
        const offset = Math.floor(Math.random() * 31) - 15; // -15~+15
        const next_review = Date.now() + offset * dayMs;
        // 先addWord，再putWord覆盖参数
        await wordReviewDB.addWord(word);
        let wordData = await wordReviewDB.getWord(word);
        wordData.EF = EF;
        wordData.interval = interval;
        wordData.repetitions = repetitions;
        wordData.next_review = next_review;
        await wordReviewDB.putWord(wordData);
    }
    alert('Mock data generated!');
    // 生成后自动刷新当前日期的单词
    handleDateChange();
}

// 查询所有单词数据并弹窗展示
async function handleShowAllData() {
    allWords.value = await wordReviewDB.getAllWords();
    showModal.value = true;
}

// 时间戳格式化
function formatDate(ts) {
    if (!ts) return '-';
    const d = new Date(ts);
    return d.toLocaleString();
}

// 监听showModal，弹层打开时禁止页面滚动，关闭时恢复
watch(showModal, val => {
    if (val) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// 支持ESC键关闭弹层
function handleKeydown(e) {
    if (showModal.value && (e.key === 'Escape' || e.key === 'Esc')) {
        showModal.value = false;
    }
}
onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});
onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.sm2-test-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 32px 0 12px 0;
}
.main-btn {
    background: #3578e5;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 14px 0;
    width: 90vw;
    max-width: 340px;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(53, 120, 229, 0.08);
    margin-bottom: 0;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.main-btn.green {
    background: #34b368;
}
.main-btn:active {
    background: #285bb2;
}
.main-btn.green:active {
    background: #249a54;
}
.icon {
    font-size: 22px;
    font-weight: bold;
    margin-right: 4px;
}
.desc {
    color: #8ca0b3;
    font-size: 13px;
    margin-top: 2px;
}
.modal-mask {
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
.modal-box {
    background: #fff;
    border-radius: 14px;
    padding: 24px 10px 18px 10px;
    min-width: 220px;
    max-width: 95vw;
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
    text-align: center;
    position: relative;
    width: 100%;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #e0e7ef;
    color: #888;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 22px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}
.close-btn:active {
    background: #d0d7df;
    color: #3578e5;
}
.modal-title {
    font-size: 18px;
    color: #3578e5;
    font-weight: 700;
    margin-bottom: 16px;
}
.table-wrap {
    overflow-x: auto;
    width: 90vw;
    height: 56vh;
    margin: 0 auto;
}
.db-table {
    border-collapse: collapse;
    width: 100%;
    min-width: 420px;
    font-size: 15px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
}
.db-table th,
.db-table td {
    border: 1px solid #f0f4fa;
    padding: 8px 4px;
    text-align: center;
}
.db-table th {
    background: #f0f4fa;
    color: #3578e5;
    font-weight: 600;
}
.db-table tr.odd {
    background: #f8fafc;
}
.date-select-wrap {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90vw;
    max-width: 340px;
}
.date-select-wrap label {
    font-size: 15px;
    color: #3578e5;
    margin-bottom: 4px;
}
.date-select-wrap select {
    width: 100%;
    padding: 8px 6px;
    border-radius: 6px;
    border: 1px solid #e0e7ef;
    font-size: 16px;
    background: #f8fafc;
    color: #333;
}
@media (max-width: 480px) {
    .main-btn {
        font-size: 16px;
        padding: 12px 0;
        max-width: 98vw;
    }
    .modal-box {
        padding: 16px 2px 10px 2px;
        min-width: 0;
        max-width: 99vw;
    }
    .db-table {
        font-size: 13px;
        min-width: 320px;
    }
}
</style> 