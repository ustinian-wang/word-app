<template>
    <div v-if="visible" class="book-modal-mask" @click.self="close">
        <div class="book-modal">
            <h3>切换词库</h3>
            <ul>
                <li
                    v-for="(book, idx) in books"
                    :key="book.id"
                    :class="{ active: idx === currentBookIdx }"
                >
                    <span>{{ book.name }}</span>
                    <button v-if="idx !== currentBookIdx" @click="select(idx)">切换</button>
                    <span v-else class="current-label">当前</span>
                </li>
            </ul>
            <button class="close-btn" @click="close">取消</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookSelectModal',
    props: {
        books: Array,
        currentBookIdx: Number,
        visible: Boolean,
    },
    methods: {
        select(idx) {
            this.$emit('select', idx);
            this.$emit('update:visible', false);
        },
        close() {
            this.$emit('cancel');
            this.$emit('update:visible', false);
        },
    },
};
</script>

<style scoped>
/* 复制你原有的弹窗样式 */
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
</style>
