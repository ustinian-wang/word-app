<template>
    <transition name="modal-fade">
        <div v-if="visible" class="wa-modal-overlay" v-test="'wa-modal-overlay'" @click.self="$emit('update:visible', false)">
            <div class="wa-modal" :style="{ width }">
                <div v-if="title" class="wa-modal-header">
                    {{ title }}
                    <button class="wa-modal-close" v-test="'wa-modal-close'" @click="$emit('update:visible', false)">&times;</button>
                </div>
                <div class="wa-modal-body">
                    <slot></slot>
                </div>
                <div class="wa-modal-footer">
                    <button class="wa-button-cancel" v-test="'wa-modal-cancel'" @click="$emit('update:visible', false)">取消</button>
                    <button class="wa-button-confirm" v-test="'wa-modal-confirm'" @click="handleConfirm">确认</button>
                </div>
            </div>
        </div>
    </transition>
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
        },
        width: {
            type: String,
            default: '260px'
        }
    },
    methods: {
        handleConfirm() {
            this.$emit('confirm');
        },
        onCancel() {
            this.$emit('update:visible', false);
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