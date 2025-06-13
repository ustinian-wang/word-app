<template>
    <div class="wordbooks-page">
        <header class="wb-header">
            <h2 class="title">词库管理</h2>
        </header>
        <div v-if="wordBooks.length === 0" class="empty-tip">暂无词库，请导入或添加新词库</div>
        <ul class="book-list">
            <li
                v-for="(book, idx) in wordBooks"
                :key="book.id"
                :class="{ active: idx === currentBookIdx }"
            >
                <div class="book-info">
                    <span class="book-name">{{ book.name }}</span>
                    <span class="book-count">{{ book.words.length }}词</span>
                    <span v-if="progressMap[book.id] !== undefined" class="book-progress">
                        {{ progressMap[book.id].percent }}% 已学{{ progressMap[book.id].learned }}词
                    </span>
                </div>
                <div class="book-actions">
                    <button
                        v-if="idx !== currentBookIdx"
                        class="switch-btn"
                        @click="selectBook(idx)"
                    >
                        切换
                    </button>
                    <span v-else class="current-label">当前</span>
                    <button v-if="false" class="delete-btn" @click="removeBook(idx)">
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path
                                d="M6 6l12 12M6 18L18 6"
                                stroke="#e55"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </li>
        </ul>
        <div v-if="false" class="add-button-container">
            <button class="upload-btn" @click="$refs.excelInput.click()">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    style="vertical-align: middle; margin-right: 4px"
                >
                    <path
                        d="M12 5v14m7-7H5"
                        stroke="#3578e5"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                    />
                </svg>
                导入
            </button>
            <input
                type="file"
                accept=".xlsx,.xls"
                @change="onExcelUpload"
                style="display: none"
                ref="excelInput"
            />
        </div>
    </div>
</template>

<script>
// import * as XLSX from 'xlsx'; // 需安装 xlsx: yarn add xlsx
import { getBookProgress } from '@/kits/words';
import { mapActions, mapMutations, mapState } from 'vuex';
import $message from '@/kits/toast';

export default {
    name: 'WordBooks',
    data() {
        return {};
    },
    computed: {
        ...mapState('book', ['wordBooks', 'currentBookIdx', 'progress']),
        progressMap() {
            return this.wordBooks.map(book => {
                const progress = getBookProgress(book.id);
                return {
                    learned: progress.learned?.length || 0,
                    percent: ((progress.percent || 0) * 100).toFixed(2)
                };
            });
        }
    },
    methods: {
        ...mapMutations('book', ['setCurrentBookIdx']),
        ...mapActions('book', ['loadBook']),
        selectBook(idx) {
            this.setCurrentBookIdx(idx);
            $message.success('已切换词库');
        }
    },
    mounted() {
        this.loadBook(this.currentBookIdx);
    }
};
</script>

<style scoped>
.wordbooks-page {
    /* padding: 16px 0 80px 0; */
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.wb-header {
    display: flex;
    justify-content: center;
    padding: 10px 18px 10px 18px;
    border-bottom: 1px solid #e0e7ef;
    margin-bottom: 10px;
    background: #f8fafc;
    height: 56px;
    display: flex;
    align-items: center;
}
.title {
    font-size: 18px;
    font-weight: 700;
    color: #3578e5;
    margin: 0;
}
.empty-tip {
    color: #aaa;
    text-align: center;
    margin: 32px 0;
    font-size: 15px;
}
.add-button-container {
    margin-top: auto;
    padding: 10px 18px;
}
.upload-btn {
    background: #eaf2fd;
    color: #3578e5;
    border: none;
    border-radius: 5px;
    padding: 5px 12px 5px 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-shadow: none;
    transition: background 0.2s;
}
.upload-btn:active {
    background: #d6e6fa;
}
.book-list {
    list-style: none;
    padding: 0 12px;
    margin: 0;
}
.book-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(60, 60, 60, 0.06);
    padding: 10px 14px;
    margin-bottom: 10px;
    border: 2px solid transparent;
    transition: border 0.2s;
}
.book-list li.active {
    border: 2px solid #4f8cff;
}
.book-info {
    display: flex;
    flex-direction: column;
}
.book-name {
    font-size: 15px;
    font-weight: 600;
    color: #222;
}
.book-count {
    font-size: 12px;
    color: #8ca0b3;
    margin-top: 2px;
}
.book-actions {
    display: flex;
    align-items: center;
    gap: 6px;
}
.switch-btn {
    background: #f0f4fa;
    color: #3578e5;
    border: none;
    border-radius: 4px;
    padding: 3px 10px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s;
}
.switch-btn:active {
    background: #e0e7ef;
}
.delete-btn {
    background: transparent;
    border: none;
    padding: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.delete-btn svg {
    display: block;
}
.current-label {
    color: #fff;
    background: #4f8cff;
    border-radius: 4px;
    padding: 3px 10px;
    font-size: 13px;
    font-weight: 600;
}
.book-progress {
    font-size: 12px;
    color: #4f8cff;
    /* margin-left: 8px; */
}
</style>
