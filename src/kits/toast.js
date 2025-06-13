import Vue from 'vue';
import Toast from '../components/Toast.vue';

let ToastConstructor = Vue.extend(Toast);
let toastInstance = null;
let timer = null;

function showToast({ message, type = 'success', duration = 2000 }) {
    if (toastInstance) {
        toastInstance.$destroy();
        document.body.removeChild(toastInstance.$el);
        toastInstance = null;
    }
    let instance = new ToastConstructor({
        propsData: { message, type, visible: true },
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
    toastInstance = instance;

    if (type !== 'loading') {
        timer = setTimeout(() => {
            instance.visible = false;
            setTimeout(() => {
                instance.$destroy();
                if (document.body.contains(instance.$el)) {
                    document.body.removeChild(instance.$el);
                }
                toastInstance = null;
            }, 300);
        }, duration);
    }
}

function hideToast() {
    if (toastInstance) {
        toastInstance.visible = false;
        setTimeout(() => {
            toastInstance.$destroy();
            document.body.removeChild(toastInstance.$el);
            toastInstance = null;
            if (timer) clearTimeout(timer);
        }, 300);
    }
}

const $message = {
    success(msg, duration) {
        showToast({ message: msg, type: 'success', duration });
    },
    error(msg, duration) {
        showToast({ message: msg, type: 'error', duration });
    },
    warning(msg, duration) {
        showToast({ message: msg, type: 'warning', duration });
    },
    loading(msg) {
        showToast({ message: msg, type: 'loading', duration: 999999 });
    },
    hide: hideToast,
};

export default $message;

export { $message };
