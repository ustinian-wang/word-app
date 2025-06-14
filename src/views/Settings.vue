<template>
    <div class="settings-page">
        <div class="settings-group">
            <div class="settings-title">通用</div>
            <!-- <div class="setting-item">
                <span class="setting-label">主题色</span>
                <select v-model="theme" class="setting-control">
                    <option value="light">浅色</option>
                    <option value="dark">深色</option>
                </select>
            </div>
            <div class="setting-item">
                <span class="setting-label">显示音标</span>
                <wa-switch v-model="showPhonetic" />
            </div>
            <div class="setting-item">
                <span class="setting-label">自动播放发音</span>
                <wa-switch v-model="autoPlayAudio" />
            </div>
            <div class="setting-item">
                <span class="setting-label">显示权威词典区</span>
                <wa-switch v-model="showDictionary" />
            </div>
            <div class="setting-item">
                <span class="setting-label">启用快捷键</span>
                <wa-switch v-model="enableShortcuts" />
            </div> -->
            <div class="setting-item">
                <span class="setting-label">主单词字号</span>
                <div class="setting-control">
                    <wa-input-number v-model="currGroupSize" :min="10" :max="40" :step="1" />
                </div>

                <!-- <span class="setting-unit">px</span> -->
            </div>
        </div>
        <div class="settings-footer">更多设置即将开放…</div>
        <!-- <div class="settings-actions">
            <button type="button" @click="saveSettings">保存设置</button>
        </div> -->
    </div>
</template>

<script>
import WaInputNumber from '@/components/wa-input-number.vue';
// import WaSwitch from '@/components/wa-switch.vue';
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'Settings',
    components: { WaInputNumber },
    // components: { WaSwitch },
    data() {
        return {
            theme: 'light',
            showPhonetic: true,
            autoPlayAudio: false,
            showDictionary: true,
            enableShortcuts: true
        };
    },
    computed: {
        ...mapState('setting', ['groupSize']),
        ...mapGetters('setting', ['setGroupSize']),
        currGroupSize: {
            get() {
                return this.groupSize;
            },
            set(value) {
                console.log('[value]', value);
                this.setGroupSize(value);
            }
        }
    },
    methods: {
        saveSettings() {
            // 这里可以扩展为保存到本地存储或全局store
            alert('设置已保存（仅本地演示，未持久化）');
        }
    }
};
</script>

<style scoped>
.settings-page {
    min-height: 100vh;
    background: #f5f6fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 16px;
    padding-top: 76px;
}
.settings-group {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    width: 100%;
    max-width: 420px;
    margin: 32px 0 0 0;
    padding: 0 0 6px 0;
    overflow: hidden;
}
.settings-title {
    font-size: 15px;
    color: #888;
    font-weight: 600;
    padding: 18px 22px 6px 22px;
    background: transparent;
}
.setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    height: 52px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
}
.setting-item:last-child {
    border-bottom: none;
}
.setting-label {
    color: #222;
    font-size: 15px;
    flex: 1;
    text-align: left;
}
.setting-control {
    font-size: 15px;
    border: none;
    background: transparent;
    color: #3578e5;
    outline: none;
    min-width: 60px;
    text-align: right;
}
/* .input-number {
    width: 60px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: #f7fafd;
    padding: 2px 8px;
    margin-left: 8px;
} */
.setting-unit {
    color: #888;
    font-size: 13px;
    margin-left: 2px;
}
.settings-footer {
    margin: 32px 0 0 0;
    color: #aaa;
    font-size: 13px;
    text-align: center;
}
.settings-actions {
    margin: 24px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
button[type='button'] {
    background: #3578e5;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 32px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
    box-shadow: 0 1px 4px rgba(60, 60, 60, 0.08);
}
button[type='button']:hover {
    background: #2256a5;
}
@media (max-width: 600px) {
    .settings-group {
        max-width: 98vw;
        margin: 12px 0 0 0;
    }
    .settings-title {
        padding: 14px 12px 4px 12px;
    }
    .setting-item {
        padding: 0 12px;
        height: 48px;
        font-size: 15px;
    }
}
</style> 