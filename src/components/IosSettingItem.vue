<template>
  <div
    class="ios-setting-item"
    :class="{ 'ios-setting-item-danger': danger }"
    @click="$emit('click')"
  >
    <span class="ios-setting-label"><slot>{{ label }}</slot></span>
    <span class="ios-setting-arrow">›</span>
  </div>
</template>

<script>
export default {
  name: 'IosSettingItem',
  props: {
    label: String,
    danger: Boolean
  }
};
</script>

<style scoped>
.ios-setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  height: 52px;
  font-size: 16px;
  color: #222;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;
  background: #fff;
}
.ios-setting-item:last-child {
  border-bottom: none;
}
.ios-setting-item:active {
  background: #f2f2f7;
}
.ios-setting-label {
  font-size: 16px;
  font-weight: 500;
}
.ios-setting-arrow {
  font-size: 18px;
  color: #bbb;
  margin-left: 8px;
}
.ios-setting-item-danger {
  color: #ff3b30;
}
@media (max-width: 600px) {
  .ios-setting-item {
    height: 46px;
    font-size: 15px;
    padding: 0 12px;
  }
  .ios-setting-label {
    font-size: 15px;
  }
  .ios-setting-arrow {
    font-size: 16px;
  }
}
</style> 