<template>
    <div class="slider-container">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="slider-item"
            :class="{ 'is-current': index === 1 }"
            :style="getItemStyle(index)"
        >
            <slot :item="item" :index="index"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderContainer',
    props: {
        items: {
            type: Array,
            required: true
        },
        isAnimating: {
            type: Boolean,
            default: false
        },
        deltaX: {
            type: Number,
            default: 0
        }
    },
    methods: {
        getItemStyle(index) {
            const base = (index - 1) * 100;
            const move = this.deltaX / window.innerWidth * 100;
            return {
                transform: `translateX(calc(${base}% + ${move}vw))`,
                transition: this.isAnimating ? 'transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)' : 'none',
                zIndex: index === 1 ? 2 : 1,
                opacity: index === 1 ? 1 : 0.5
            };
        }
    }
};
</script>

<style lang="less" scoped>
.slider-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    perspective: 1000px;
}

.slider-item {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    padding-top: 20vh;
    gap: 16px;
    will-change: transform;
    pointer-events: none;
    transition: opacity 0.3s ease;

    &.is-current {
        pointer-events: auto;
    }

    // 相邻项的位置和样式
    &:nth-child(1) {
        transform: translateX(-100%) scale(0.9);
    }

    &:nth-child(3) {
        transform: translateX(100%) scale(0.9);
    }
}
</style> 