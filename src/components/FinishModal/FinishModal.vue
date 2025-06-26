<template>
    <div v-if="visible" class="finish-mask" data-test="finish-modal">
        <div class="finish-modal">
            <div class="finish-title">🎉 恭喜你！</div>
            <div class="finish-desc">{{ subtitle || `本轮词库「${bookName}」已全部学完` }}</div>
            <div class="finish-actions">
                <button
                    v-if="restartText"
                    v-test="'finish-btn'"
                    class="finish-btn"
                    @click="$emit('restart')"
                >
                    {{ restartText || '再来一轮' }}
                </button>
                <button
                    v-if="homeText"
                    v-test="'home-btn'"
                    class="finish-btn home-btn"
                    @click="$emit('returnHome')"
                >
                    {{ homeText || '休息一下' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FinishModal',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        bookName: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        restartText: {
            type: String,
            default: '再来一轮'
        },
        homeText: {
            type: String,
            default: '休息一下'
        }
    }
};
</script>

<style scoped>
.finish-mask {
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
.finish-modal {
    background: #fff;
    border-radius: 16px;
    padding: 36px 28px 28px 28px;
    min-width: 240px;
    max-width: 80vw;
    box-shadow: 0 8px 32px rgba(60, 60, 60, 0.18);
    text-align: center;
}
.finish-title {
    font-size: 26px;
    font-weight: 700;
    color: #3578e5;
    margin-bottom: 12px;
}
.finish-desc {
    font-size: 17px;
    color: #333;
    margin-bottom: 28px;
}
.finish-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}
.finish-btn {
    background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
    color: #fff;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 0;
    width: 180px;
    box-shadow: 0 2px 8px rgba(79, 140, 255, 0.08);
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: 2px;
}
.finish-btn:active {
    background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}
.home-btn {
    background: linear-gradient(90deg, #e0e7ef 0%, #f0f4fa 100%);
    color: #3578e5;
}
.home-btn:active {
    background: linear-gradient(90deg, #d6e6fa 0%, #eaf2fd 100%);
}
</style>
