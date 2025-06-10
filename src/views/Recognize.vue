<template>
    <div id="app" class="recognize-page">
        <div class="recognize-header">
            <span class="recognize-title">图片识别</span>
        </div>
        <div class="recognize-card-group">
            <div class="recognize-card upload-card">
                <div class="upload-dropzone" @click="triggerFileInput">
                    <svg class="upload-icon" width="48" height="48" viewBox="0 0 48 48">
                        <g fill="none" stroke="#3578e5" stroke-width="2.5">
                            <rect
                                x="6"
                                y="6"
                                width="36"
                                height="36"
                                rx="8"
                                stroke-dasharray="6 4"
                            />
                            <path
                                d="M24 16v16m0 0l-6-6m6 6l6-6"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </svg>
                    <div class="upload-text">点击上传图片识别</div>
                </div>
                <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="onFileChange"
                />
            </div>
            <div class="recognize-card result-card">
                <RecognitionResult :imageUrl="imageUrl" :products="products" />
            </div>
        </div>
    </div>
</template>

<script>
    import RecognitionResult from '../components/RecognitionResult.vue';
    import { recognizeApi } from '../apis';
    import { $message } from '../kits/toast';
    import { compressImage } from '../kits/img';

    export default {
        name: 'Recognize',
        components: {
            RecognitionResult,
        },
        data() {
            return {
                imageUrl: '',
                products: [],
            };
        },
        methods: {
            triggerFileInput() {
                this.$refs.fileInput.click();
            },
            async onFileChange(e) {
                const file = e.target.files[0];
                if (!file) return;
                const maxWidth = Math.min(window.innerWidth, 800);
                const maxHeight = maxWidth * 2;
                const base64 = await compressImage(file, maxWidth, maxHeight, 0.8);
                this.onImageUploaded(base64);
                this.$refs.fileInput.value = '';
            },
            async onImageUploaded(base64) {
                this.imageUrl = base64;
                this.products = [];
                try {
                    $message.loading('识别中..');
                    const res = await recognizeApi({ ImageBase64: base64 });
                    if (res.data.success) {
                        $message.success('识别成功');
                        if (res?.data?.data?.Products?.length === 0) {
                            $message.error('没有识别到物体');
                        } else {
                            this.products = res.data.data.Products;
                        }
                    } else {
                        $message.error('识别失败');
                        // alert('识别失败');
                    }
                } catch (e) {
                    $message.error('识别失败');
                    // alert('识别失败');
                }
                this.$forceUpdate();
            },
        },
        beforeMount() {
            const auto = this.$route.query.auto;
            if (auto) {
                // 可扩展为自动拍照
            }
        },
    };
</script>

<style scoped>
    .recognize-page {
        min-height: 100vh;
        background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
        box-sizing: border-box;
    }
    .recognize-header {
        position: absolute;
        top: 18px;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 20;
    }
    .recognize-title {
        display: inline-flex;
        align-items: center;
        font-size: 20px;
        height: 44px;
        line-height: 44px;
        font-weight: 700;
        color: #3578e5;
        user-select: none;
        padding: 2px 10px;
    }
    .recognize-card-group {
        margin-top: 80px;
        width: 100vw;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
    .recognize-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(60, 60, 60, 0.1);
        padding: 24px 18px 18px 18px;
        width: 94vw;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .recognize-card:empty {
        display: none;
    }
    .upload-card {
        margin-bottom: 0;
    }
    .result-card {
        margin-top: 0;
    }
    .upload-dropzone {
        width: 100%;
        min-height: 140px;
        border: 2.5px dashed #3578e5;
        border-radius: 14px;
        background: #f8fafc;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition:
            border-color 0.2s,
            box-shadow 0.2s;
        margin: 0 auto;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    .upload-dropzone:hover {
        border-color: #2256a5;
        box-shadow: 0 2px 12px rgba(53, 120, 229, 0.08);
    }
    .upload-icon {
        margin-bottom: 10px;
    }
    .upload-text {
        color: #3578e5;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        text-align: center;
    }
    @media (max-width: 600px) {
        .recognize-card {
            padding: 14px 4vw 10px 4vw;
            min-width: unset;
            max-width: 100vw;
        }
        .recognize-header .recognize-title {
            font-size: 18px;
            padding: 2px 6px;
        }
        .recognize-card-group {
            margin-top: 80px;
            gap: 14px;
        }
        .upload-dropzone {
            min-height: 100px;
        }
    }
</style>
