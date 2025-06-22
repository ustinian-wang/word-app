<template>
    <label class="wa-switch" :class="{ 'wa-switch--disabled': disabled }">
        <input
            type="checkbox"
            :checked="modelValue"
            :disabled="disabled"
            v-test="'wa-switch-input'"
            @change="onChange"
        />
        <span class="wa-slider"></span>
    </label>
</template>

<script>
export default {
    name: 'WaSwitch',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onChange(e) {
            const val = e.target.checked;
            this.$emit('update:modelValue', val);
            this.$emit('input', val);
            this.$emit('change', val);
        }
    }
};
</script>

<style scoped>
.wa-switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 22px;
    margin-left: 8px;
    vertical-align: middle;
}
.wa-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.wa-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e4e4e4;
    border-radius: 22px;
    transition: 0.2s;
}
.wa-switch input:checked + .wa-slider {
    background-color: #3578e5;
}
.wa-slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    box-shadow: 0 1px 4px rgba(60, 60, 60, 0.08);
}
.wa-switch input:checked + .wa-slider:before {
    transform: translateX(16px);
}
.wa-switch--disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style> 