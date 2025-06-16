<template>
    <div class="card-actions">
        <div class="action-btn pass-btn" @click="handlePass" title="已掌握">
            <Icon icon="mdi:check" width="28" height="28" :style="{ color: '#4caf50' }" />
        </div>
        <div class="action-btn fail-btn" @click="handleFail" title="再看一次">
            <Icon icon="mdi:close" width="28" height="28" :style="{ color: '#e55' }" />
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
    name: 'CardActions',
    components: { Icon },
    props: {
        showIframeBtn: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handlePass() {
            this.$emit('pass');
        },
        handleFail() {
            this.$emit('fail');
        },
        handleIframe() {
            this.$emit('iframe');
        }
    }
};
</script>

<style lang="less" scoped>
.card-actions {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(15vh + 56px);
    display: flex;
    justify-content: center;
    gap: 38px;
    z-index: 30;
    height: 0;
}

.action-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #fff;
    border: none;
    box-shadow: 0 2px 8px rgba(60, 60, 60, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    cursor: pointer;
    transition:
        box-shadow 0.2s,
        background 0.2s;
}

.action-btn:active {
    background: #f0f4fa;
}
</style> 