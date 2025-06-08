<template>
  <div class="uploader-container">
    <label class="upload-btn" @click="upload">
      选择图片
      <!-- <input type="file" accept="image/*" @change="onFileChange" hidden /> -->
    </label>
    <div v-if="previewUrl" class="preview-box">
      <img :src="previewUrl" alt="预览" />
    </div>
  </div>
</template>

<script>
import { openOneFileSelectionWindow } from "@ustinian-wang/kit";
import {file2Base64} from "../kits/img";
import $message from "../kits/toast";
export default {
  name: 'ImageUploader',
  data() {
    return {
      previewUrl: ''
    };
  },
  methods: {
    async upload() {
      let file = await openOneFileSelectionWindow({
        accept: 'image/*',
        onSelect: (file) => {
          console.log(`jser [upload] 111`, file)
        }
      });
      if(file){
        const base64 = await file2Base64(file);
        if(base64) {
          $message.loading('上传图片中...');
          await this.$nextTick();
          this.previewUrl = base64;
          this.$emit('image-uploaded', base64);
        }else{
          console.error('图片转base64失败');
        }
      }
      console.log(`jser [upload] 222`, file)
      // console.log(`jser [upload] 111`)
      // const input = document.createElement('input');
      // input.type = 'file';
      // input.accept = 'image/*';
      // input.onchange = (e) => { 
      //   const file = e.target.files[0];
      //   if (!file) return;
      //   const base64 = await file2Base64(file);
      //   if(base64) {
      //     this.previewUrl = base64;
      //     this.$emit('image-uploaded', base64);
      //   }
      // }
    },
    async onFileChange(e) {
      const file = e.target.files[0];
      
    }
  }
};
</script>

<style scoped>
.uploader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.upload-btn {
  background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
  color: #fff;
  padding: 12px 0;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 18px;
  width: 100%;
  max-width: 320px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(79,140,255,0.08);
  display: block;
}
.upload-btn:active {
  background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}
.preview-box {
  margin-top: 10px;
  border: 2px solid #e0e7ef;
  border-radius: 8px;
  padding: 8px;
  background: #f8fafc;
  box-shadow: 0 2px 8px rgba(60,60,60,0.06);
  width: 80vw;
  max-width: 320px;
}
.preview-box img {
  width: 100%;
  border-radius: 6px;
  display: block;
}
</style>
