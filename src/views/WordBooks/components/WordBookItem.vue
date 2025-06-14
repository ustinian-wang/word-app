<template>
    <li :class="{ active: isActive }">
        <div class="book-info">
            <span class="book-name">{{ bookName }}</span>
            <span class="book-count">{{ wordTotal }}词</span>
            <span class="book-progress">
                {{ progress_percentage }}% 已学{{ progress_count }}词
            </span>
        </div>
        <div class="book-actions">
            <button v-if="!isActive" class="switch-btn" @click="$emit('select')">切换</button>
            <span v-else class="current-label">当前</span>
            <button v-if="false" class="delete-btn" @click="$emit('delete')">
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
</template>

<script>
export default {
    name: 'WordBookItem',
    props: {
        bookName: String,
        wordTotal: Number,
        learnedCount: Number,
        isActive: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        progress_count() {
            return this.learnedCount;
        },
        progress_percentage() {
            return (this.learnedCount / this.wordTotal).toFixed(4);
        }
    }
};
</script>

<style scoped>
li {
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

li.active {
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
}
</style>
