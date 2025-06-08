<template>
  <button class="camera-btn" @click="handleClick" title="拍照">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
  </button>
</template>

<script>
import { captureImageFromCamera, file2Base64 } from '../kits/img';
export default {
  name: 'CameraCaptureButton',
  methods: {
    async handleClick() {
      try {
        const file = await captureImageFromCamera();
        const base64 = await file2Base64(file);
        this.$emit('capture', base64);
      } catch (e) {
        // 用户取消或出错
      }
    }
  }
};
</script>

<style scoped>
.camera-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background: rgba(255,255,255,0.95);
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(60,60,60,0.10);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: box-shadow 0.2s;
}
.camera-btn:hover {
  box-shadow: 0 4px 16px rgba(60,60,60,0.18);
}
</style>
