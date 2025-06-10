<template>
    <div style="position: relative; display: inline-block">
        <img :src="imageUrl" ref="img" @load="onImgLoad" />
        <div
            v-for="(product, idx) in products"
            :key="idx"
            :style="getBoxStyle(product)"
            class="tag-box"
            @click="showInfo(idx, $event)"
        >
            <span class="tag-label">{{ product.Name }}</span>
            <div v-if="activeIdx === idx" class="tag-popup" :style="popupStyle">
                <div>
                    <strong>{{ product.Name }}</strong
                    ><br />
                    分类: {{ product.Parents }}<br />
                    置信度: {{ product.Confidence }}%
                </div>
                <button @click.stop="activeIdx = null">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ImageTagOverlay',
        props: ['imageUrl', 'products'],
        data() {
            return {
                imgWidth: 1,
                imgHeight: 1,
                activeIdx: null,
                popupStyle: {},
            };
        },
        methods: {
            onImgLoad() {
                const img = this.$refs.img;
                this.imgWidth = img.naturalWidth;
                this.imgHeight = img.naturalHeight;
            },
            getBoxStyle(product) {
                // 用百分比定位，适配不同分辨率
                const left = (product.XMin / this.imgWidth) * 100;
                const top = (product.YMin / this.imgHeight) * 100;
                const width = ((product.XMax - product.XMin) / this.imgWidth) * 100;
                const height = ((product.YMax - product.YMin) / this.imgHeight) * 100;
                return {
                    position: 'absolute',
                    left: left + '%',
                    top: top + '%',
                    width: width + '%',
                    height: height + '%',
                    border: '2px solid #f00',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    zIndex: 10,
                };
            },
            getScaleX() {
                const img = this.$refs.img;
                return img ? img.width / this.imgWidth : 1;
            },
            getScaleY() {
                const img = this.$refs.img;
                return img ? img.height / this.imgHeight : 1;
            },
            showInfo(idx, event) {
                this.activeIdx = idx;
                // 弹窗定位
                this.popupStyle = {
                    position: 'absolute',
                    left: event.offsetX + 10 + 'px',
                    top: event.offsetY + 10 + 'px',
                    background: '#fff',
                    border: '1px solid #ccc',
                    padding: '8px',
                    zIndex: 100,
                };
            },
        },
    };
</script>

<style scoped>
    img {
        max-width: 80vw;
        width: 100%;
        height: auto;
        display: block;
    }
    .tag-box {
        pointer-events: auto;
        transition: box-shadow 0.2s;
    }
    .tag-box:hover {
        box-shadow: 0 0 0 4px rgba(79, 140, 255, 0.15);
        z-index: 20;
    }
    .tag-label {
        background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
        color: #fff;
        padding: 4px 12px;
        font-size: 15px;
        border-radius: 4px 0 4px 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 8px rgba(79, 140, 255, 0.08);
        font-weight: 600;
    }
    .tag-popup {
        min-width: 120px;
        max-width: 80vw;
        word-break: break-all;
        border-radius: 8px;
        box-shadow: 0 4px 24px rgba(60, 60, 60, 0.15);
        background: #fff;
        border: 1px solid #e0e7ef;
        padding: 14px 18px 10px 18px;
        animation: popupIn 0.18s cubic-bezier(0.4, 1.6, 0.6, 1) both;
        font-size: 16px;
    }
    @keyframes popupIn {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    .tag-popup button {
        margin-top: 10px;
        background: #4f8cff;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 6px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.2s;
    }
    .tag-popup button:hover {
        background: #3578e5;
    }
    @media (max-width: 600px) {
        .tag-popup {
            font-size: 14px;
            min-width: 90px;
            padding: 10px 8px 8px 8px;
        }
        .tag-label {
            font-size: 13px;
            padding: 3px 8px;
        }
    }
</style>
