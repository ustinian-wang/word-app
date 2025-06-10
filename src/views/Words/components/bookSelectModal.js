import Vue from 'vue';
import BookSelectModal from './BookSelectModal.vue';

let modalInstance = null;
/**
 * @description
 * @param {*} param
 * @returns {Promise<{
 *     success: boolean,
 *      msg: string,
 *      data: number
 * }>}
 */
export function openBookSelectModal({ books, currentBookIdx }) {
    return new Promise(resolve => {
        const ModalConstructor = Vue.extend(BookSelectModal);
        modalInstance = new ModalConstructor({
            propsData: {
                books,
                currentBookIdx,
                visible: true,
            },
        });
        modalInstance.$mount();
        document.body.appendChild(modalInstance.$el);

        modalInstance.$on('select', idx => {
            cleanup();
            resolve({
                success: true,
                msg: '',
                data: idx,
            });
        });
        modalInstance.$on('cancel', () => {
            cleanup();
            resolve({
                success: false,
                msg: '',
            });
        });
        modalInstance.$on('update:visible', v => {
            if (!v) {
                cleanup();
                resolve(false);
            }
        });

        function cleanup() {
            if (modalInstance) {
                modalInstance.$destroy();
                if (modalInstance.$el && modalInstance.$el.parentNode) {
                    modalInstance.$el.parentNode.removeChild(modalInstance.$el);
                }
                modalInstance = null;
            }
        }
    });
}
