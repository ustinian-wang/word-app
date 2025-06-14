import Vue from 'vue';
import WaModal from './wa-modal.vue';

let modalInstance = null;
/**
 * @description 弹出确认框
 * @param {string} content 内容
 * @returns {Promise<boolean>} 是否确认
 */
export function modalConfirm(content) {
    return openWaModal({
        content,
        confirmText: '确认',
        cancelText: '取消'
    });
}

export function openWaModal({
    title = '',
    content = '',
    confirmText = '确认',
    cancelText = '取消'
} = {}) {
    return new Promise(resolve => {
        const ModalConstructor = Vue.extend(WaModal);
        modalInstance = new ModalConstructor({
            propsData: {
                visible: true,
                title,
                content,
                confirmText,
                cancelText
            }
        });
        modalInstance.$mount();
        document.body.appendChild(modalInstance.$el);

        const cleanup = () => {
            if (modalInstance) {
                modalInstance.$destroy();
                if (modalInstance.$el && modalInstance.$el.parentNode) {
                    modalInstance.$el.parentNode.removeChild(modalInstance.$el);
                }
                modalInstance = null;
            }
        };

        modalInstance.$on('confirm', () => {
            cleanup();
            resolve(true);
        });
        modalInstance.$on('cancel', () => {
            cleanup();
            resolve(false);
        });
    });
}
