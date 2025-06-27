<template>
    <div id="app">
        <template v-if="$route.path !== '/'">
            <BackButton />
            <BackToHome />
        </template>
        <router-view />
        <nav class="bottom-nav" v-if="false">
            <router-link to="/" exact-active-class="active">首页</router-link>
            <router-link to="/recognize" exact-active-class="active">图片识别</router-link>
            <router-link to="/words" exact-active-class="active">背一背</router-link>
            <router-link to="/wordbooks" exact-active-class="active">词库</router-link>
        </nav>
        <FabMenu />
        <div id="vconsole"></div>
        <div v-if="loading" class="global-loading">
            <div class="spinner"></div>
            <div class="loading-text">页面加载中...</div>
        </div>
    </div>
</template>

<script>
import { initDefaultWordBooks } from './kits/words';
import BackToHome from './components/BackToHome.vue';
import BackButton from '@/components/BackButton.vue';
import FabMenu from '@/components/FabMenu.vue';

export default {
    name: 'App',
    components: {
        BackToHome,
        BackButton,
        FabMenu
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        toggleFullscreen() {
            toggleFullscreen(this.$el);
        }
    },
    beforeCreate() {
        initDefaultWordBooks();
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            this.loading = true;
            next();
        });
        this.$router.afterEach(() => {
            this.loading = false;
        });
    }
};
</script>

<style>
html,
body,
#app {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
#app {
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.bottom-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #fff;
    border-top: 1px solid #eee;
    height: 56px;
    align-items: center;
    z-index: 100;
}
.bottom-nav a {
    flex: 1;
    text-align: center;
    color: #888;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 0;
}
.bottom-nav .active {
    color: #3578e5;
    font-weight: bold;
}
.global-loading {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #1890ff;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loading-text {
    color: #1890ff;
    font-size: 16px;
    font-weight: bold;
}
</style>
