<template>
  <header class="page-header">
    <slot />
  </header>
</template>

<style scoped>
.page-header {
  width: 100vw;
  max-width: 420px;
  margin: 0 auto 24px auto;
  padding: 0 0 8px 0;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 2px;
  background: none;
}
@media (max-width: 600px) {
  .page-header {
    font-size: 18px;
    margin-bottom: 16px;
  }
}
</style>
