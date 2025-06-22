<template>
    <div class="wa-input-number" :class="{ 'wa-input-number--disabled': disabled }">
        <button class="wa-btn wa-btn-minus" :disabled="disabled || value <= min" @click="decrement">
            -
        </button>
        <input
            :min="min"
            :max="max"
            :step="step"
            :disabled="disabled"
            v-model="currValue"
            @change="onChange"
            @blur="onBlur"
            class="wa-input"
        />
        <button class="wa-btn wa-btn-plus" :disabled="disabled || value >= max" @click="increment">
            +
        </button>
    </div>
</template>

<script>
export default {
    name: 'WaInputNumber',
    props: {
        value: {
            type: [Number, String],
            default: 0
        },
        min: {
            type: Number,
            default: -Infinity
        },
        max: {
            type: Number,
            default: Infinity
        },
        step: {
            type: Number,
            default: 1
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            currValue: this.value || 0
        }
    },
    watch: {
        value(val) {
            this.currValue = val;
        }
    },
    methods: {
        onInput(e) {
            let val = Number(e.target.value);
            if (isNaN(val)) val = this.min;
            if (val < this.min) val = this.min;
            if (val > this.max) val = this.max;
            console.log('[input]', val);
            this.$emit('input', val);
        },
        onChange(e) {
            let val = Number(e.target.value);
            if (isNaN(val)) val = this.min;
            if (val < this.min) val = this.min;
            if (val > this.max) val = this.max;
            console.log('[change]', val);
            this.$emit('change', val);
        },
        increment() {
            if (this.disabled) return;
            let val = this.value + this.step;
            if (val > this.max) val = this.max;
            console.log('[increment]', val);
            this.$emit('input', val);
            this.$emit('change', val);
        },
        decrement() {
            if (this.disabled) return;
            let val = this.value - this.step;
            if (val < this.min) val = this.min;
            console.log('[decrement]', val);
            this.$emit('input', val);
            this.$emit('change', val);
        },
        onBlur(e) {
            let val = Number(e.target.value);
            if (isNaN(val)) val = this.min;
            if (val < this.min) val = this.min;
            if (val > this.max) val = this.max;
            console.log('[blur]', val);
            this.$emit('input', val);
            this.$emit('change', val);
        }
    }
};
</script>

<style scoped>
.wa-input-number {
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    background: #f7fafd;
    box-shadow: 0 1px 4px rgba(60, 60, 60, 0.04);
    padding: 2px 6px;
    min-width: 90px;
    border: 1px solid #e0e0e0;
}
.wa-input-number--disabled {
    opacity: 0.5;
    pointer-events: none;
}
.wa-btn {
    background: #f0f4fa;
    border: none;
    color: #3578e5;
    font-size: 18px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.18s;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(60, 60, 60, 0.04);
}
.wa-btn:active {
    background: #e3e8f0;
}
.wa-btn:disabled {
    background: #f5f6fa;
    color: #bbb;
    cursor: not-allowed;
}
.wa-input {
    width: 48px;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 16px;
    color: #3578e5;
    outline: none;
    margin: 0 2px;
}
</style> 