<template>
  <div class="record-view">
    <div class="chart-container" ref="chartContainer"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { wordRecordService, WORD_RECORD_STATUS, WORD_RECORD_TYPE } from '../kits/idb/idbWordRecord';

export default {
  name: 'RecordView',
  setup() {
    const chartContainer = ref(null);
    let chart = null;

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
        data.dates.push(date);
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
          }
        },
        legend: {
          data: ['学习通过', '学习失败', '复习通过', '复习失败'],
          top: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: data.dates,
          axisLabel: {
            interval: 0,
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          name: '单词数量'
        },
        series: [
          {
            name: '学习通过',
            type: 'bar',
            stack: 'total',
            data: data.learningPass,
            itemStyle: {
              color: '#91cc75'
            }
          },
          {
            name: '学习失败',
            type: 'bar',
            stack: 'total',
            data: data.learningFail,
            itemStyle: {
              color: '#ee6666'
            }
          },
          {
            name: '复习通过',
            type: 'bar',
            stack: 'total',
            data: data.reviewPass,
            itemStyle: {
              color: '#5470c6'
            }
          },
          {
            name: '复习失败',
            type: 'bar',
            stack: 'total',
            data: data.reviewFail,
            itemStyle: {
              color: '#fac858'
            }
          }
        ]
      };

      chart.setOption(option);
    };

    // 加载数据
    const loadData = async () => {
      try {
        const records = await wordRecordService.getAllRecords();
        const processedData = processData(records);
        initChart(processedData);
      } catch (error) {
        console.error('加载数据失败:', error);
      }
    };

    // 处理窗口大小变化
    const handleResize = () => {
      chart && chart.resize();
    };

    onMounted(() => {
      loadData();
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      chart && chart.dispose();
    });

    return {
      chartContainer
    };
  }
};
</script>

<style scoped>
.record-view {
  padding: 20px;
  height: 100vh;
  background-color: #fff;
}

.chart-container {
  width: 100%;
  height: calc(100vh - 40px);
  min-height: 400px;
}
</style> 