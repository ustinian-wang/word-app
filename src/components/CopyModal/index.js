import Vue from 'vue';
import CopyModal from './CopyModal.vue';

let modalInstance = null;

export function openCopyModal({ title = '复制内容', content = '' } = {}) {
    return new Promise(resolve => {
        const ModalConstructor = Vue.extend(CopyModal);
        let propsData = {
            visible: true,
            title,
            content
        }
        modalInstance = new ModalConstructor({
            propsData
        });
        modalInstance.$mount();
        document.body.appendChild(modalInstance.$el);

        const cleanup = () => {
            propsData.visible = false;
            if (modalInstance) {
                modalInstance.$destroy();
                if (modalInstance.$el && modalInstance.$el.parentNode) {
                    modalInstance.$el.parentNode.removeChild(modalInstance.$el);
                }
                modalInstance = null;
            }
        };

        modalInstance.$on('copied', () => {
            cleanup();
            resolve(true); // copied
        });
        modalInstance.$on('cancel', () => {
            cleanup();
            resolve(false); // closed
        });
    });
} 