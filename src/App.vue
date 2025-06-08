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
      <router-link to="/words" exact-active-class="active">背单词</router-link>
      <router-link to="/wordbooks" exact-active-class="active">词库</router-link>
    </nav>
    <FabMenu />
  </div>
</template>

<script>
import { initDefaultWordBooks } from './kits/words';
import BackToHome from './components/BackToHome.vue';
import BackButton from '@/components/BackButton.vue';
import FabMenu from '@/components/FabMenu.vue';

export default { name: 'App', 
  components: {
    BackToHome,
    BackButton,
    FabMenu
  },
  beforeCreate() {
  initDefaultWordBooks();
} };
</script>

<style>
html, body, #app {
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
  left: 0; right: 0; bottom: 0;
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


</style>
