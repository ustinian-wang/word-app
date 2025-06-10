import Vue from 'vue';
import FinishModal from './FinishModal.vue';

let instance = null;
/**
 * @description
 * @param {*} options
 * @returns
 */
export const openFinishModal = (options = {}) => {
    if (instance) {
        instance.$destroy();
    }

    return new Promise(resolve => {
        const Constructor = Vue.extend(FinishModal);
        instance = new Constructor({
            propsData: {
                visible: true,
                bookName: options.bookName || '',
                subtitle: options.subtitle || '',
                restartText: options.restartText || '',
                homeText: options.homeText || '',
            },
        });

        instance.$mount();
        document.body.appendChild(instance.$el);

        // Handle events
        instance.$on('restart', () => {
            hideFinishModal();

            resolve({
                success: true,
                data: true,
            });
        });

        instance.$on('returnHome', () => {
            hideFinishModal();

            resolve({
                success: true,
                data: false,
            });
        });

        return instance;
    });
};

export const hideFinishModal = () => {
    if (instance) {
        instance.visible = false;
        setTimeout(() => {
            instance.$destroy();
            instance.$el.remove();
            instance = null;
        }, 300);
    }
};

// Usage example:
/*
openFinishModal({
    bookName: '基础词汇',
    subtitle: '你已经完成了所有单词的学习！',
    restartText: '重新开始',
    homeText: '返回首页',
    onRestart: () => {
        console.log('Restart clicked');
    },
    onReturnHome: () => {
        console.log('Return home clicked');
    }
});
*/
