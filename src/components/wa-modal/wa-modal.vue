<template>
    <div v-if="visible" class="wa-modal-mask" @click.self="onCancel">
        <div class="wa-modal">
            <div class="wa-modal-title" v-if="title">{{ title }}</div>
            <div class="wa-modal-content">
                <slot>{{ content }}</slot>
            </div>
            <div class="wa-modal-actions">
                <button class="wa-btn wa-btn-cancel" @click="onCancel">{{ cancelText }}</button>
                <button class="wa-btn wa-btn-confirm" @click="onConfirm">{{ confirmText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WaModal',
    props: {
        visible: Boolean,
        title: String,
        content: String,
        confirmText: {
            type: String,
            default: '确认'
        },
        cancelText: {
            type: String,
            default: '取消'
        }
    },
    methods: {
        onConfirm() {
            this.$emit('confirm');
        },
        onCancel() {
            this.$emit('cancel');
        }
    }
};
</script>

<style scoped>
.wa-modal-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.18);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wa-modal {
    background: #fff;
    border-radius: 14px;
    min-width: 260px;
    max-width: 90vw;
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
    padding: 28px 22px 18px 22px;
    text-align: center;
}
.wa-modal-title {
    font-size: 18px;
    color: #3578e5;
    font-weight: bold;
    margin-bottom: 16px;
}
.wa-modal-content {
    font-size: 15px;
    color: #444;
    margin-bottom: 22px;
    min-width: 120px;
}
.wa-modal-actions {
    display: flex;
    justify-content: center;
    gap: 24px;
}
.wa-btn {
    min-width: 64px;
    padding: 7px 0;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.18s;
}
.wa-btn-cancel {
    background: #f0f4fa;
    color: #888;
}
.wa-btn-cancel:hover {
    background: #e0e7ef;
}
.wa-btn-confirm {
    background: #3578e5;
    color: #fff;
}
.wa-btn-confirm:hover {
    background: #2256a5;
}
</style> 