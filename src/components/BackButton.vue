<template>
  <button v-if="canGoBack" class="back-btn" @click="goBack" title="返回上一页">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3578e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  data() {
    return {
      canGoBack: false
    };
  },
  watch: {
    '$route': {
      immediate: true,
      handler(to, from) {
        // 检查是否有历史记录
        this.canGoBack = window.history.length > 1;
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.back-btn {
  position: absolute;
  top: 18px;
  left: 18px;
  background: rgba(255,255,255,0.95);
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
.back-btn:hover {
  box-shadow: 0 4px 16px rgba(60,60,60,0.18);
}
</style>
