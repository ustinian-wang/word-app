<template>
    <transition name="fade">
        <div v-if="visible" class="toast" :class="type" v-test="'toast'">
            <span v-if="type === 'loading'" class="spinner"></span>
            <span v-test="'toast-message'">{{ message }}</span>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        message: String,
        type: {
            type: String,
            default: 'success'
        },
        visible: Boolean
    }
};
</script>

<style scoped>
.toast {
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 120px;
    max-width: 80vw;
    padding: 12px 24px;
    border-radius: 6px;
    color: #fff;
    font-size: 15px;
    z-index: 1000;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.toast.success {
    background: #52c41a;
}
.toast.error {
    background: #ff4d4f;
}
.toast.warning {
    background: #faad14;
}
.toast.loading {
    background: #1890ff;
}
.spinner {
    border: 2px solid #fff;
    border-top: 2px solid #1890ff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    animation: spin 1s linear infinite;
    display: inline-block;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
