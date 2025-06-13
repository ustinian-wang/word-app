import Vue from 'vue';
import Toast from '../components/Toast.vue';

let toastQueue = [];
let isProcessing = false;
let timer = null;

function processQueue() {
    if (isProcessing || toastQueue.length === 0) return;
    
    isProcessing = true;
    const { message, type, duration } = toastQueue.shift();
    
    let instance = new Vue.extend(Toast)({
        propsData: { message, type, visible: true },
    });
    instance.$mount();
    document.body.appendChild(instance.$el);

    if (type !== 'loading') {
        timer = setTimeout(() => {
            instance.visible = false;
            setTimeout(() => {
                instance.$destroy();
                if (document.body.contains(instance.$el)) {
                    document.body.removeChild(instance.$el);
                }
                isProcessing = false;
                processQueue();
            }, 300);
        }, duration);
    }
}

function showToast({ message, type = 'success', duration = 2000 }) {
    toastQueue.push({ message, type, duration });
    processQueue();
}

function hideToast() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    toastQueue = [];
    isProcessing = false;
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
