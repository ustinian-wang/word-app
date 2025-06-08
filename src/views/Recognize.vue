<template>
  <div id="app" class="app-container">
    <CameraCaptureButton @capture="onImageUploaded" />
    <PageHeader>图片识别 Demo</PageHeader>
    <div class="card">
      <ImageUploader @image-uploaded="onImageUploaded" />
    </div>
    <RecognitionResult :imageUrl="imageUrl" :products="products" />
  </div>
</template>

<script>
import CameraCaptureButton from '../components/CameraCaptureButton.vue';
import PageHeader from '../components/PageHeader.vue';
import ImageUploader from '../components/ImageUploader.vue';
import RecognitionResult from '../components/RecognitionResult.vue';
import { recognizeApi } from '../apis';
import { $message } from '../kits/toast';
import { captureImageFromCamera, file2Base64 } from '../kits/img';

export default {
  name: 'App',
  components: {
    CameraCaptureButton,
    PageHeader,
    ImageUploader,
    RecognitionResult
  },
  data() {
    return {
      imageUrl: '',
      products: []
    };
  },
  methods: {
    async onAutoImgUpload(){
      const file = await captureImageFromCamera();
      const base64 = await file2Base64(file);
      this.onImageUploaded(base64);
    },
    async onImageUploaded(base64) {
      this.imageUrl = base64;
      this.products = [];
      try {
        $message.loading('识别中..');
        const res = await recognizeApi({ ImageBase64: base64 });
        if(res.data.success) {
          $message.success('识别成功');
          this.products = res.data.data.Products;
        } else {
          $message.error('识别失败');
          alert('识别失败');
        }
      } catch (e) {
        $message.error('识别失败');
        alert('识别失败');
      }
      this.$forceUpdate();
    }
  },
  beforeMount() {
    const auto = this.$route.query.auto;
    if (auto) {
      this.onAutoImgUpload();
    }
  }
};
</script>

<style>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
}
h1 {
  color: #2c3e50;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 22px;
}
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(60,60,60,0.08);
  padding: 20px 12px 16px 12px;
  margin-bottom: 24px;
  width: 94vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 600px) {
  .card {
    padding: 14px 4vw 10px 4vw;
    min-width: unset;
    max-width: 100vw;
  }
  h1 {
    font-size: 18px;
    margin-bottom: 16px;
  }
}
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
