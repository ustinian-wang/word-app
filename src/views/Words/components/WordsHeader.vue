<template>
    <!-- 顶部词库标题栏 -->
    <div class="words-header">
        <span class="book-title" @click="$emit('change')">
            {{ title || '词库' }}
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24">
                <path
                    d="M6 10l6 6 6-6"
                    stroke="#3578e5"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                />
            </svg>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'WordsHeader',
        props: {
            title: String,
        },
    };
</script>

<style lang="less" scoped>
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
</style>
