<template>
    <div class="slider-container">
        <div
            v-for="(item, idx) in items"
            :key="idx"
            class="slider-item"
            :class="{ 'is-animating': isAnimating }"
            :style="getSliderStyle(idx)"
        >
            <slot :item="item" :index="idx"></slot>
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
        getSliderStyle(idx) {
            const base = (idx - 1) * 100;
            const move = idx === 0 || idx === 2 ? 0 : (this.deltaX / window.innerWidth) * 100;
            return {
                transform: `translateX(calc(${base}% + ${move}vw))`,
                zIndex: idx === 1 ? 2 : 1,
                transition: this.isAnimating
                    ? 'transform 0.3s cubic-bezier(.25,.8,.5,1)'
                    : 'none',
            };
        }
    }
};
</script>

<style lang="less" scoped>
.slider-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    pointer-events: none;
}

.slider-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    will-change: transform;
    box-sizing: border-box;
    pointer-events: auto;
    transition: box-shadow 0.2s;
    padding-top: 15vh;
}

.slider-item.is-animating {
    transition:
        transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
        box-shadow 0.2s;
}
</style> 