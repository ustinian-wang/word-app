<template>
    <transition name="modal-fade">
        <div
            v-if="visible"
            class="wa-modal-overlay"
            v-test="'wa-modal-overlay'"
            @click.self="$emit('update:visible', false)"
        >
            <div class="wa-modal" :style="{ width }">
                <div v-if="title" class="wa-modal-header">
                    {{ title }}
                    <button
                        class="wa-modal-close"
                        v-test="'wa-modal-close'"
                        @click="$emit('update:visible', false)"
                    >
                        &times;
                    </button>
                </div>
                <div class="wa-modal-body">
                    <slot></slot>
                </div>
                <div class="wa-modal-footer">
                    <button
                        class="wa-button-cancel"
                        v-test="'wa-modal-cancel'"
                        @click="$emit('update:visible', false)"
                    >
                        取消
                    </button>
                    <button
                        class="wa-button-confirm"
                        v-test="'wa-modal-confirm'"
                        @click="handleConfirm"
                    >
                        确认
                    </button>
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
.wa-modal-footer {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 18px;
}
.wa-button-cancel,
.wa-button-confirm {
    min-width: 64px;
    padding: 7px 0;
    border-radius: 8px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.18s;
}
.wa-button-cancel {
    background: #f0f4fa;
    color: #888;
}
.wa-button-cancel:hover {
    background: #e0e7ef;
}
.wa-button-confirm {
    background: #3578e5;
    color: #fff;
}
.wa-button-confirm:hover {
    background: #2256a5;
}
.wa-modal-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.18);
    z-index: 1000;
}
.wa-modal-close {
    position: absolute;
    top: 16px;
    right: 18px;
    background: transparent;
    border: none;
    font-size: 22px;
    color: #888;
    cursor: pointer;
    transition: color 0.18s;
    line-height: 1;
}
.wa-modal-close:hover {
    color: #3578e5;
}
</style> 