<template>
    <div class="progress-bar-fixed">
        <div class="progress-bar-bg">
            <div class="progress-bar-fg" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <div class="progress-text">
            {{ current }} / {{ total }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'WordsProgress',
  props: {
    total: Number,
    current: Number,
  },
  computed: {
    progressPercent() {
        let per = (this.current / this.total) || 0;
        return Math.round(per * 100);
    }
  } 
}
</script>

<style scoped>
.words-progress {
  width: 100%;
  padding: 1rem;
}

.progress-container {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #4CAF50;
  transition: width 0.3s ease;
}

.progress-text {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #666;
}
</style>
