import Vue from 'vue';
import IframeModal from './IframeModal.vue';

class IframeModalManager {
    constructor() {
        this.instance = null;
        this.container = null;
    }

    /**
     * 打开iframe弹窗
     * @param {Object} options 配置选项
     * @param {string} options.url 要加载的URL
     * @param {string} options.title 弹窗标题
     * @param {boolean} options.showRefresh 是否显示刷新按钮
     * @param {boolean} options.showUrlInput 是否显示URL输入框
     * @param {string} options.width 弹窗宽度
     * @param {string} options.height 弹窗高度
     * @param {boolean} options.closeOnOverlay 是否允许点击遮罩关闭
     * @param {Function} options.onLoaded 加载完成回调
     * @param {Function} options.onError 错误回调
     * @param {Function} options.onClose 关闭回调
     * @param {Function} options.onUrlChange URL变化回调
     * @returns {Promise} 返回Promise，resolve时表示弹窗已关闭
     */
    open(options = {}) {
        return new Promise(resolve => {
            // 如果已有实例，先关闭
            if (this.instance) {
                this.close();
            }

            // 创建容器
            this.container = document.createElement('div');
            document.body.appendChild(this.container);

            // 创建Vue2组件实例
            const IframeModalConstructor = Vue.extend(IframeModal);
            this.instance = new IframeModalConstructor({
                propsData: {
                    visible: true,
                    url: options.url || '',
                    title: options.title || '',
                    showRefresh: options.showRefresh !== false,
                    showUrlInput: options.showUrlInput !== false,
                    width: options.width || '90vw',
                    height: options.height || '80vh',
                    closeOnOverlay: options.closeOnOverlay !== false,
                },
            });

            // 监听事件
            this.instance.$on('loaded', options.onLoaded);
            this.instance.$on('error', options.onError);
            this.instance.$on('url-change', options.onUrlChange);
            this.instance.$on('close', () => {
                this.close();
                resolve();
            });
            this.instance.$on('update:visible', visible => {
                if (!visible) {
                    this.close();
                    resolve();
                }
            });

            // 挂载到容器
            this.instance.$mount(this.container);
        });
    }

    /**
     * 关闭iframe弹窗
     */
    close() {
        // if (this.container) {
        //     console.log('jser [this.container]', this.container)
        //     document.body.removeChild(this.container);
        //     this.container = null;
        // }
        if (this.instance) {
            document.body.removeChild(this.instance.$el);
            this.instance.$destroy();
            this.instance = null;
        }
    }

    /**
     * 检查弹窗是否已打开
     * @returns {boolean}
     */
    isOpen() {
        return !!this.instance;
    }
}

// 创建全局实例
const iframeModal = new IframeModalManager();

// 导出API函数
export const openIframeModal = options => iframeModal.open(options);
export const closeIframeModal = () => iframeModal.close();
export const isIframeModalOpen = () => iframeModal.isOpen();

// 导出管理器类（如果需要创建多个实例）
export { IframeModalManager };

// 默认导出
export default iframeModal;
