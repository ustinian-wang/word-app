<template>
    <Transition name="modal-fade">
        <div
            v-if="visible"
            class="iframe-modal-overlay"
            v-test="'iframe-modal-overlay'"
            @click="handleOverlayClick"
        >
            <div class="iframe-modal-container" :style="containerStyle" v-test @click.stop>
                <!-- Loading 遮罩 -->
                <div v-if="loading" class="iframe-loading-overlay">
                    <div class="loading-spinner">
                        <Icon icon="mdi:loading" width="32" height="32" class="spinning" />
                        <div class="loading-text">正在加载词典内容...</div>
                        <div class="loading-progress">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                            <div class="progress-text">请稍候，这可能需要几秒钟</div>
                        </div>
                        <button
                            class="cancel-load-btn"
                            v-test="'cancel-load-btn'"
                            @click="cancelLoading"
                            title="取消加载"
                        >
                            <Icon icon="mdi:close" width="16" height="16" />
                            <span>取消加载</span>
                        </button>
                    </div>
                </div>

                <!-- iframe 容器 -->
                <div class="iframe-container">
                    <iframe
                        v-if="currentUrl"
                        ref="iframeRef"
                        :src="currentUrl"
                        :style="{ opacity: loading ? 0.3 : 1 }"
                        @load="onIframeLoad"
                        @error="onIframeError"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                    <div v-else class="iframe-placeholder">
                        <Icon icon="mdi:web" width="48" height="48" />
                        <div class="placeholder-text">请输入要加载的网址</div>
                    </div>
                </div>

                <!-- 底部工具栏 -->
                <div v-if="showUrlInput" class="iframe-modal-footer">
                    <div class="url-input-container">
                        <input
                            v-model="urlInput"
                            type="url"
                            placeholder="请输入网址 (例如: https://example.com)"
                            class="url-input"
                            @keyup.enter="loadUrl"
                        />
                        <button
                            class="load-btn"
                            v-test="'load-btn'"
                            @click="loadUrl"
                            :disabled="!urlInput.trim()"
                        >
                            加载
                        </button>
                    </div>
                </div>

                <!-- 顶部工具栏 -->
                <div class="iframe-modal-header">
                    <div class="iframe-modal-title">
                        <span v-if="title">{{ title }}</span>
                        <span v-else-if="currentUrl" class="url-display">{{
                            getDisplayUrl(currentUrl)
                        }}</span>
                    </div>
                    <div class="iframe-modal-actions">
                        <button
                            v-if="showRefresh"
                            class="action-btn refresh-btn"
                            v-test="'refresh-btn'"
                            @click="refreshIframe"
                            title="刷新页面"
                        >
                            <Icon icon="mdi:refresh" width="20" height="20" />
                        </button>
                        <button
                            class="action-btn close-btn"
                            v-test="'close-btn'"
                            @click="closeModal"
                            title="关闭"
                        >
                            <Icon icon="mdi:close" width="20" height="20" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    name: 'IframeModal',
    components: { Icon },
    props: {
        // 是否显示弹窗
        visible: {
            type: Boolean,
            default: false
        },
        // 初始URL
        url: {
            type: String,
            default: ''
        },
        // 弹窗标题
        title: {
            type: String,
            default: ''
        },
        // 是否显示刷新按钮
        showRefresh: {
            type: Boolean,
            default: true
        },
        // 是否显示URL输入框
        showUrlInput: {
            type: Boolean,
            default: true
        },
        // 弹窗宽度
        width: {
            type: String,
            default: '100vw'
        },
        // 弹窗高度
        height: {
            type: String,
            default: '100vh'
        },
        // 是否允许点击遮罩关闭
        closeOnOverlay: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentUrl: '',
            urlInput: '',
            loading: false,
            loadTimeout: null,
            loadStartTime: null,
            loadDuration: 0
        };
    },
    computed: {
        // 容器样式
        containerStyle() {
            return {
                maxWidth: this.width,
                maxHeight: this.height
            };
        }
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                this.initModal();
            } else {
                this.resetModal();
            }
        },
        url: {
            immediate: true,
            handler(newUrl) {
                if (newUrl && this.visible) {
                    this.loadUrlFromProp(newUrl);
                }
            }
        }
    },
    methods: {
        // 初始化弹窗
        initModal() {
            if (this.url) {
                this.loadUrlFromProp(this.url);
            }
            // 阻止body滚动
            document.body.style.overflow = 'hidden';
        },

        // 重置弹窗状态
        resetModal() {
            this.currentUrl = '';
            this.urlInput = '';
            this.loading = false;
            this.clearLoadTimeout();
            this.loadStartTime = null;
            this.loadDuration = 0;
            // 恢复body滚动
            document.body.style.overflow = '';
        },

        // 从props加载URL
        loadUrlFromProp(url) {
            this.currentUrl = url;
            this.urlInput = url;
            this.startLoading();
        },

        // 加载URL
        loadUrl() {
            const url = this.urlInput.trim();
            if (!url) return;

            // 验证URL格式
            if (!this.isValidUrl(url)) {
                this.$emit('error', { message: '请输入有效的网址' });
                return;
            }

            this.currentUrl = url;
            this.startLoading();
            this.$emit('url-change', url);
        },

        // 刷新iframe
        refreshIframe() {
            if (this.currentUrl) {
                this.startLoading();
                // 通过重新设置src来刷新
                const iframe = this.$refs.iframeRef;
                if (iframe) {
                    iframe.src = this.currentUrl;
                }
            }
        },

        // 开始加载状态
        startLoading() {
            this.loading = true;
            this.loadStartTime = Date.now();
            // 设置超时，防止无限loading
            this.clearLoadTimeout();
            this.loadTimeout = setTimeout(() => {
                this.loading = false;
                this.$emit('error', { message: '加载超时，请检查网络连接' });
            }, 30000); // 30秒超时
        },

        // 清除加载超时
        clearLoadTimeout() {
            if (this.loadTimeout) {
                clearTimeout(this.loadTimeout);
                this.loadTimeout = null;
            }
        },

        // iframe加载完成
        onIframeLoad() {
            this.loading = false;
            this.clearLoadTimeout();
            this.loadDuration = Date.now() - this.loadStartTime;
            this.$emit('loaded', this.currentUrl);
        },

        // iframe加载错误
        onIframeError() {
            this.loading = false;
            this.clearLoadTimeout();
            this.$emit('error', { message: '页面加载失败，请检查网址是否正确' });
        },

        // 关闭弹窗
        closeModal() {
            this.$emit('update:visible', false);
            this.$emit('close');
        },

        // 处理遮罩点击
        handleOverlayClick() {
            if (this.closeOnOverlay) {
                this.closeModal();
            }
        },

        // 验证URL格式
        isValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (_) {
                return false;
            }
        },

        // 获取显示用的URL
        getDisplayUrl(url) {
            try {
                const urlObj = new URL(url);
                return urlObj.hostname + urlObj.pathname;
            } catch {
                return url;
            }
        },

        // 取消加载
        cancelLoading() {
            this.loading = false;
            this.clearLoadTimeout();
            this.loadDuration = Date.now() - this.loadStartTime;
            console.log(`加载已取消，耗时: ${this.loadDuration}ms`);
            this.$emit('error', { message: '加载已取消' });
        }
    },
    beforeDestroy() {
        this.clearLoadTimeout();
        document.body.style.overflow = '';
    }
};
</script>

<style lang="less" scoped>
.iframe-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
}

.iframe-modal-container {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.iframe-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid #e0e0e0;
    background: #f8f9fa;
    flex-shrink: 0;
}

.iframe-modal-title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.url-display {
    color: #666;
    font-size: 14px;
}

.iframe-modal-actions {
    display: flex;
    gap: 24px;
}

.action-btn {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    background: #f0f0f0;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
        background: #e0e0e0;
        color: #333;
    }

    &:active {
        transform: scale(0.95);
    }
}

.close-btn {
    background: #ff4757;
    color: #fff;

    &:hover {
        background: #ff3742;
        color: #fff;
    }
}

.iframe-container {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    transition: opacity 0.3s;
}

.iframe-loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.spinning {
    animation: spin 1s linear infinite;
    color: #3578e5;
}

.loading-text {
    font-size: 14px;
    color: #666;
}

.loading-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.progress-bar {
    width: 200px;
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3578e5, #4caf50);
    border-radius: 2px;
    animation: progress-animation 2s ease-in-out infinite;
}

.progress-text {
    font-size: 12px;
    color: #999;
}

.iframe-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #ccc;
    gap: 16px;
}

.placeholder-text {
    font-size: 16px;
    color: #999;
}

.iframe-modal-footer {
    padding: 16px 20px;
    border-top: 1px solid #e0e0e0;
    background: #f8f9fa;
    flex-shrink: 0;
}

.url-input-container {
    display: flex;
    gap: 12px;
}

.url-input {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #3578e5;
    }

    &::placeholder {
        color: #999;
    }
}

.load-btn {
    padding: 10px 20px;
    background: #3578e5;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;

    &:hover:not(:disabled) {
        background: #2d6bc8;
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
}

// 动画效果
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes progress-animation {
    0% {
        width: 0%;
    }
    50% {
        width: 70%;
    }
    100% {
        width: 100%;
    }
}

// 响应式设计
@media (max-width: 768px) {
    .iframe-modal-overlay {
        padding: 10px;
    }

    .iframe-modal-container {
        border-radius: 8px;
    }

    .iframe-modal-header {
        padding: 12px 16px;
    }

    .iframe-modal-footer {
        padding: 12px 16px;
    }

    .url-input-container {
        flex-direction: column;
    }

    .load-btn {
        width: 100%;
    }
}

.cancel-load-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: #ff4757;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 8px;

    &:hover {
        background: #ff3742;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
}
</style>
