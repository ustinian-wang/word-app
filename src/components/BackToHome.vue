<template>
    <button class="back-home-btn" @click="goHome" title="返回首页">
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3578e5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M3 12L12 3l9 9" />
            <path d="M9 21V9h6v12" />
        </svg>
    </button>
</template>

<script>
    export default {
        name: 'BackToHome',
        methods: {
            goHome() {
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>
    .back-home-btn {
        position: absolute;
        top: 18px;
        right: 18px;
        background: rgba(255, 255, 255, 0.95);
        border: none;
        border-radius: 50%;
        /* box-shadow: 0 2px 8px rgba(60,60,60,0.10); */
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 100;
        transition: box-shadow 0.2s;
    }
    .back-home-btn:hover {
        /* box-shadow: 0 4px 16px rgba(60,60,60,0.18); */
    }
</style>
