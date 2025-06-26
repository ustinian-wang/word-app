<template>
    <div v-if="visible" class="copy-modal-mask" v-test="'copy-modal-mask'" @click.self="onCancel">
        <div class="copy-modal">
            <div class="copy-modal-title" v-if="title">{{ title }}</div>
            <div class="copy-modal-content">
                <textarea ref="copyTextarea" readonly :value="content"></textarea>
            </div>
            <div class="copy-modal-actions">
                <button class="wa-btn wa-btn-cancel" v-test="'cancel'" @click="onCancel">
                    关闭
                </button>
                <button class="wa-btn wa-btn-confirm" v-test="'confirm'" @click="onCopy">
                    复制
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { $message } from '@/kits/toast';

export default {
    name: 'CopyModal',
    props: {
        visible: Boolean,
        title: String,
        content: String
    },
    methods: {
        onCopy() {
            // 聚焦并全选 textarea
            this.$refs.copyTextarea.focus();
            this.$refs.copyTextarea.select();
            // 尝试复制
            try {
                const success = document.execCommand('copy');
                if (success) {
                    $message.success('复制成功');
                    this.$emit('copied');
                } else {
                    $message.error('复制失败，请手动复制');
                }
            } catch (e) {
                $message.error('复制失败，请手动复制');
            }
        },
        onCancel() {
            this.$emit('cancel');
        }
    }
};
</script>

<style scoped>
.copy-modal-mask {
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
.copy-modal {
    background: #fff;
    border-radius: 14px;
    min-width: 260px;
    max-width: 90vw;
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
    padding: 28px 22px 18px 22px;
    text-align: center;
}
.copy-modal-title {
    font-size: 18px;
    color: #3578e5;
    font-weight: bold;
    margin-bottom: 16px;
}
.copy-modal-content {
    font-size: 15px;
    color: #444;
    margin-bottom: 22px;
    min-width: 120px;
}
.copy-modal-content textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ddd;
    resize: none;
    font-family: monospace;
}
.copy-modal-actions {
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
