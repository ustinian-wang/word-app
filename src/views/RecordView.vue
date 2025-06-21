<template>
    <div class="record-view">
        <div class="date-range-picker">
            <select v-model="selectedRange" @change="handleRangeChange">
                <option value="7">最近7天</option>
                <option value="14">最近14天</option>
                <option value="30">最近30天</option>
                <option value="90">最近90天</option>
                <option value="all">全部</option>
            </select>
        </div>
        <div v-if="loading" class="loading">
            <div class="loading-spinner"></div>
            <span>加载中...</span>
        </div>
        <div v-else-if="!hasData" class="empty-state">
            <div class="empty-icon">📊</div>
            <p>暂无学习记录</p>
            <p class="empty-tip">开始学习单词后，这里会显示您的学习进度</p>
            <button v-if="isDebugMode" class="generate-btn" @click="generateTestData">
                生成测试数据
            </button>
        </div>
        <div v-else class="chart-container" ref="chartContainer"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { wordRecordDB, WORD_RECORD_STATUS, WORD_RECORD_TYPE } from '@/kits/idb/WordRecordDB';
import { mapGetters } from 'vuex';

export default {
    name: 'RecordView',
    data() {
        return {
            loading: true,
            records: [],
            filteredRecords: [],
            chart: null,
            touchStartX: 0,
            touchStartY: 0,
            selectedRange: '7' // 默认显示7天
        };
    },
    computed: {
        ...mapGetters('setting', ['isDebugMode']),
        hasData() {
            return this.filteredRecords.length > 0;
        }
    },
    methods: {
        // 格式化日期
        formatDate(dateStr) {
            const date = new Date(dateStr);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${month}/${day}`;
        },

        // 获取日期范围
        getDateRange() {
            const today = new Date();
            today.setHours(23, 59, 59, 999);

            if (this.selectedRange === 'all') {
                return { start: new Date(0), end: today };
            }

            const start = new Date();
            start.setDate(today.getDate() - parseInt(this.selectedRange));
            start.setHours(0, 0, 0, 0);

            return { start, end: today };
        },

        // 处理日期范围变化
        handleRangeChange() {
            this.filterRecords();
            const processedData = this.processData(this.filteredRecords);
            this.initChart(processedData);
        },

        // 过滤记录
        filterRecords() {
            const { start, end } = this.getDateRange();
            this.filteredRecords = this.records.filter(record => {
                const recordDate = new Date(record.timestamp);
                return recordDate >= start && recordDate <= end;
            });
        },

        // 处理数据
        processData(records) {
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
            Object.keys(groupedData)
                .sort()
                .forEach(date => {
                    data.dates.push(this.formatDate(date));
                    data.learningPass.push(groupedData[date].learningPass);
                    data.learningFail.push(groupedData[date].learningFail);
                    data.reviewPass.push(groupedData[date].reviewPass);
                    data.reviewFail.push(groupedData[date].reviewFail);
                });

            return data;
        },

        // 初始化图表
        initChart(data) {
            if (!this.$refs.chartContainer) return;

            this.chart = echarts.init(this.$refs.chartContainer);

            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
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
                    name: '数量',
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

            this.chart.setOption(option);

            // 添加触摸事件处理
            this.$refs.chartContainer.addEventListener('touchstart', this.handleTouchStart);
            this.$refs.chartContainer.addEventListener('touchmove', this.handleTouchMove);
        },

        // 触摸事件处理
        handleTouchStart(e) {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
        },

        handleTouchMove(e) {
            if (!this.touchStartX || !this.touchStartY) return;

            const touchEndX = e.touches[0].clientX;
            const touchEndY = e.touches[0].clientY;

            const deltaX = touchEndX - this.touchStartX;
            const deltaY = touchEndY - this.touchStartY;

            // 如果水平滑动距离大于垂直滑动距离，则阻止默认行为
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
            }
        },

        // 加载数据
        async loadData() {
            try {
                this.loading = true;
                this.records = await wordRecordDB.getAllRecords();
                this.filterRecords();
                const processedData = this.processData(this.filteredRecords);
                this.loading = false;
                await this.$nextTick(() => {});
                this.initChart(processedData);
            } catch (error) {
                console.error('加载数据失败:', error);
            } finally {
                this.loading = false;
            }
        },

        // 生成测试数据
        async generateTestData() {
            try {
                this.loading = true;
                await wordRecordDB.generateTestData();
                await this.loadData();
            } catch (error) {
                console.error('生成测试数据失败:', error);
            } finally {
                this.loading = false;
            }
        },

        // 处理窗口大小变化
        handleResize() {
            this.chart && this.chart.resize();
        }
    },
    mounted() {
        this.loadData();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
        if (this.$refs.chartContainer) {
            this.$refs.chartContainer.removeEventListener('touchstart', this.handleTouchStart);
            this.$refs.chartContainer.removeEventListener('touchmove', this.handleTouchMove);
        }
        this.chart && this.chart.dispose();
    }
};
</script>

<style lang="less" scoped>
.record-view {
    padding: 76px 20px;
    height: 100vh;
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
}

.date-range-picker {
    position: absolute;
    // bottom: 20px;
    // right: 20px;
    z-index: 1;
    top: 22px;
    left: 50%;
    transform: translateX(-50%);
}

.date-range-picker select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s;
}

.date-range-picker select:hover {
    border-color: #3578e5;
}

.date-range-picker select:focus {
    border-color: #3578e5;
    box-shadow: 0 0 0 2px rgba(53, 120, 229, 0.1);
}

.chart-container {
    width: 100%;
    height: calc(100vh - 152px);
    min-height: 400px;
    margin-top: 20px;
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
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
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
    margin-bottom: 24px;
}

.generate-btn {
    background: #3578e5;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.generate-btn:hover {
    background: #2d6ad9;
}

.generate-btn:active {
    background: #2256a5;
}
</style>
