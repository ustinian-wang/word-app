<template>
  <div class="record-view">
    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      <span>加载中...</span>
    </div>
    <div v-else-if="!hasData" class="empty-state">
      <div class="empty-icon">📊</div>
      <p>暂无学习记录</p>
      <p class="empty-tip">开始学习单词后，这里会显示您的学习进度</p>
    </div>
    <div v-else class="chart-container" ref="chartContainer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import * as echarts from 'echarts';
import { wordRecordService, WORD_RECORD_STATUS, WORD_RECORD_TYPE } from '../kits/idb/idbWordRecord';

export default {
  name: 'RecordView',
  setup() {
    const chartContainer = ref(null);
    const loading = ref(true);
    const records = ref([]);
    let chart = null;
    let touchStartX = 0;
    let touchStartY = 0;

    // 格式化日期
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    };

    // 处理数据
    const processData = (records) => {
      const data = {
        dates: [],
        learningPass: [],
        learningFail: [],
        reviewPass: [],
        reviewFail: []
      };

      // 按日期分组
      const groupedData = {};
      records.forEach(record => {
        const date = new Date(record.timestamp).toLocaleDateString();
        if (!groupedData[date]) {
          groupedData[date] = {
            learningPass: 0,
            learningFail: 0,
            reviewPass: 0,
            reviewFail: 0
          };
        }

        if (record.type === WORD_RECORD_TYPE.LEARNING) {
          if (record.status === WORD_RECORD_STATUS.PASS) {
            groupedData[date].learningPass++;
          } else {
            groupedData[date].learningFail++;
          }
        } else {
          if (record.status === WORD_RECORD_STATUS.PASS) {
            groupedData[date].reviewPass++;
          } else {
            groupedData[date].reviewFail++;
          }
        }
      });

      // 转换为数组格式
      Object.keys(groupedData).sort().forEach(date => {
        data.dates.push(formatDate(date));
        data.learningPass.push(groupedData[date].learningPass);
        data.learningFail.push(groupedData[date].learningFail);
        data.reviewPass.push(groupedData[date].reviewPass);
        data.reviewFail.push(groupedData[date].reviewFail);
      });

      return data;
    };

    // 初始化图表
    const initChart = (data) => {
      if (!chartContainer.value) return;

      chart = echarts.init(chartContainer.value);
      
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params) {
            let result = params[0].axisValue + '<br/>';
            params.forEach(param => {
              const value = param.value;
              if (value > 0) {
                result += `${param.marker} ${param.seriesName}: ${value}<br/>`;
              }
            });
            return result;
          }
        },
        legend: {
          data: ['学习通过', '学习失败', '复习通过', '复习失败'],
          top: 0,
          textStyle: {
            fontSize: 12
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '40px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: data.dates,
          axisLabel: {
            interval: 0,
            rotate: 45,
            fontSize: 12
          }
        },
        yAxis: {
          type: 'value',
          name: '单词数量',
          nameTextStyle: {
            fontSize: 12
          },
          axisLabel: {
            fontSize: 12
          }
        },
        series: [
          {
            name: '学习通过',
            type: 'bar',
            stack: 'total',
            data: data.learningPass,
            itemStyle: {
              color: '#91cc75'
            },
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '学习失败',
            type: 'bar',
            stack: 'total',
            data: data.learningFail,
            itemStyle: {
              color: '#ee6666'
            },
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '复习通过',
            type: 'bar',
            stack: 'total',
            data: data.reviewPass,
            itemStyle: {
              color: '#5470c6'
            },
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '复习失败',
            type: 'bar',
            stack: 'total',
            data: data.reviewFail,
            itemStyle: {
              color: '#fac858'
            },
            emphasis: {
              focus: 'series'
            }
          }
        ]
      };

      chart.setOption(option);

      // 添加触摸事件处理
      chartContainer.value.addEventListener('touchstart', handleTouchStart);
      chartContainer.value.addEventListener('touchmove', handleTouchMove);
    };

    // 触摸事件处理
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartX || !touchStartY) return;

      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      // 如果水平滑动距离大于垂直滑动距离，则阻止默认行为
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    };

    // 加载数据
    const loadData = async () => {
      try {
        loading.value = true;
        records.value = await wordRecordService.getAllRecords();
        const processedData = processData(records.value);
        initChart(processedData);
      } catch (error) {
        console.error('加载数据失败:', error);
      } finally {
        loading.value = false;
      }
    };

    // 处理窗口大小变化
    const handleResize = () => {
      chart && chart.resize();
    };

    // 计算是否有数据
    const hasData = computed(() => {
      return records.value.length > 0;
    });

    onMounted(() => {
      loadData();
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      if (chartContainer.value) {
        chartContainer.value.removeEventListener('touchstart', handleTouchStart);
        chartContainer.value.removeEventListener('touchmove', handleTouchMove);
      }
      chart && chart.dispose();
    });

    return {
      chartContainer,
      loading,
      hasData
    };
  }
};
</script>

<style scoped>
.record-view {
  padding: 20px;
  height: 100vh;
  background-color: #fff;
  position: relative;
}

.chart-container {
  width: 100%;
  height: calc(100vh - 40px);
  min-height: 400px;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #666;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3578e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.empty-state {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #666;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-tip {
  font-size: 14px;
  color: #999;
  margin-top: 8px;
}
</style> 