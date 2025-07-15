<template>
    <div class="settings-page">
        <!-- 用户信息卡片，未登录时显示去登录按钮 -->
        <div class="ios-section ios-user-section">
            <div class="ios-avatar-box">
                <div class="user-avatar ios-avatar">
                    <span class="avatar-text">
                        {{ meInfo.username ? meInfo.username.charAt(0).toUpperCase() : '?' }}
                    </span>
                </div>
            </div>
            <div class="ios-user-meta">
                <div class="ios-user-name">{{ meInfo.username || '未登录' }}</div>
                <div class="ios-user-email" v-if="meInfo.email">{{ meInfo.email }}</div>
                <div v-if="!meInfo.username" class="ios-login-btn-box">
                    <button class="ios-login-btn" @click="$router.push('/login')">去登录</button>
                </div>
            </div>
        </div>
        <!-- 还原原有表单设置项 -->
        <div class="settings-group">
            <div class="settings-title">通用</div>
            <div class="setting-item" v-if="debugSetup">
                <span class="setting-label">调试模式</span>
                <wa-switch v-test="'wa-switch-debug'" v-model="currDebug" />
            </div>
            <div class="setting-item" v-test="'setting-group-size'">
                <span class="setting-label">每次学习数量</span>
                <div class="setting-control">
                    <wa-input-number
                        v-test="'setting-group-size'"
                        v-model="currGroupSize"
                        :min="10"
                        :max="40"
                        :step="1"
                    />
                </div>
            </div>
            <div class="setting-item" v-test="'clearCache'" @click="clearSysCache">
                <span class="setting-label" style="color: #3578e5">清理缓存</span>
            </div>
        </div>
        <div class="settings-group" v-if="false">
            <div class="settings-title">数据同步</div>
            <div class="setting-item">
                <span class="setting-label">学习记录</span>
                <div class="setting-actions">
                    <button type="button" class="wa-button" v-test="'export'" @click="handleExport">
                        导出
                    </button>
                    <button
                        type="button"
                        class="wa-button"
                        v-test="'import'"
                        @click="showImportModal = true"
                    >
                        导入
                    </button>
                </div>
            </div>
        </div>
        <!-- 退出登录和修改密码整合为一个操作区域 -->
        <div class="ios-section ios-setting-list ios-logout-section">
            <div class="setting-item" @click="showChangePwdModal = true">
                <span class="setting-label" style="color: #3578e5">修改密码</span>
            </div>
            <IosSettingItem v-if="meInfo.username" label="退出登录" danger @click="handleLogout" />
        </div>
        <div class="settings-footer">更多设置即将开放…</div>

        <!-- 意见反馈入口 -->
        <div class="settings-feedback">
            <button type="button" class="wa-button" @click="openFeedback">意见反馈</button>
        </div>

        <!-- 导入弹窗 -->
        <wa-modal :visible.sync="showImportModal" title="导入学习记录" @confirm="handleImport">
            <p class="import-description">请将之前导出的学习记录文本粘贴到下方文本框中。</p>
            <textarea
                v-model="importData"
                class="import-textarea"
                placeholder="请在此处粘贴学习记录..."
                v-test="'import-textarea'"
            ></textarea>
        </wa-modal>

        <!-- 修改密码弹窗入口 -->
        <wa-modal
            :visible.sync="showChangePwdModal"
            title="修改密码"
            @confirm="handleChangePassword"
        >
            <div class="change-pwd-form">
                <input
                    v-model="changePwdForm.oldPassword"
                    type="password"
                    placeholder="请输入旧密码"
                    class="auth-input"
                />
                <input
                    v-model="changePwdForm.newPassword"
                    type="password"
                    placeholder="请输入新密码"
                    class="auth-input"
                />
                <input
                    v-model="changePwdForm.confirmPassword"
                    type="password"
                    placeholder="请确认新密码"
                    class="auth-input"
                />
            </div>
        </wa-modal>
    </div>
</template>

<script>
/**
 * @typedef {import("@/types/comm").Result} Result
 */
import { clearSysCache } from '@/kits/sysCache';
import WaInputNumber from '@/components/wa-input-number.vue';
import WaSwitch from '@/components/wa-switch.vue';
import WaModal from '@/components/wa-modal/wa-modal.vue';
import IosSettingItem from '@/components/IosSettingItem.vue';
import { mapGetters, mapState } from 'vuex';
import { exportAppData2Clipboard } from '@/kits/idb/idbExport';
import { importAppData2DB } from '@/kits/idb/idbExport';
import $message from '@/kits/toast';
import { meApi, changePasswordApi, checkLoginApi } from '@/apis/userApi';
import { setLoginToken } from '@/core/token';

export default {
    name: 'Settings',
    components: { WaInputNumber, WaSwitch, WaModal, IosSettingItem },
    data() {
        return {
            theme: 'light',
            showPhonetic: true,
            autoPlayAudio: false,
            showDictionary: true,
            enableShortcuts: true,
            showImportModal: false,
            showChangePwdModal: false,
            importData: '',
            meInfo: {},
            changePwdForm: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            }
        };
    },
    computed: {
        ...mapState('setting', ['groupSize', 'debug', 'debugSetup']),
        ...mapGetters('setting', ['setGroupSize', 'setDebug']),
        currGroupSize: {
            get() {
                return this.groupSize;
            },
            set(value) {
                console.log('[value]', value);
                this.setGroupSize(value);
            }
        },
        currDebug: {
            get() {
                return this.debug;
            },
            set(value) {
                this.setDebug(value);
            }
        },
        user() {
            // 假设用户信息保存在localStorage或vuex
            // 优先从vuex获取，没有则从localStorage获取
            return (
                this.$store.state.user?.userInfo ||
                JSON.parse(localStorage.getItem('userInfo') || '{}')
            );
        }
    },
    methods: {
        clearSysCache,
        saveSettings() {
            // 这里可以扩展为保存到本地存储或全局store
            alert('设置已保存（仅本地演示，未持久化）');
        },
        async handleExport() {
            exportAppData2Clipboard();
        },
        async handleImport() {
            if (!this.importData) {
                $message.error('请输入导入内容');
                return;
            }
            let res = await importAppData2DB(this.importData);
            if (res.success) {
                $message.success('导入成功');
                this.showImportModal = false;
                this.importData = '';
            } else {
                $message.error(res.msg || '导入失败');
            }
        },
        openFeedback() {
            window.open('https://support.qq.com/product/741648', '_blank');
        },
        async getMe() {
            let res = await meApi();
            if (res.data.success) {
                this.meInfo = res.data.data;
            }
        },
        async handleLogout() {
            this.meInfo = {};
            $message.success('已退出登录');
            setLoginToken(null);
        },
        async handleChangePassword() {
            if (
                !this.changePwdForm.oldPassword ||
                !this.changePwdForm.newPassword ||
                !this.changePwdForm.confirmPassword
            ) {
                $message.error('请填写完整信息');
                return;
            }
            if (this.changePwdForm.newPassword !== this.changePwdForm.confirmPassword) {
                $message.error('两次输入的新密码不一致');
                return;
            }
            // if (this.changePwdForm.newPassword.length < 6) {
            //     $message.error('新密码长度至少6位');
            //     return;
            // }
            const res = await changePasswordApi({
                oldPassword: this.changePwdForm.oldPassword,
                newPassword: this.changePwdForm.newPassword
            });
            if (res.data.success) {
                $message.success('密码修改成功');
                this.showChangePwdModal = false;
                this.changePwdForm.oldPassword = '';
                this.changePwdForm.newPassword = '';
                this.changePwdForm.confirmPassword = '';
            } else {
                $message.error(res.data.msg || '密码修改失败');
            }
        }
    },
    async mounted() {
        // 检查当前是否处于登录状态
        let res = await checkLoginApi();
        // 登录的情况下才去获取设置页面的信息
        if (res.data.success && res.data.data.loggedIn) {
            this.getMe();
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
    padding-bottom: 36px;
    overflow-y: auto;
}
.settings-group {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    width: 100%;
    max-width: 420px;
    margin: 0 0 32px 0;
    padding: 0 0 6px 0;
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
/* 为新按钮和弹窗添加一些样式 */
.setting-actions .wa-button {
    background: #e9f2ff;
    color: #3578e5;
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    font-size: 14px;
    cursor: pointer;
    margin-left: 10px;
}
.setting-actions .wa-button:hover {
    background: #dceaff;
}
.import-description {
    margin-bottom: 12px;
    color: #666;
    font-size: 14px;
}
.import-textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font-family: monospace;
}
.settings-feedback {
    margin: 16px 0 0 0;
    text-align: center;
}
.ios-section {
    width: 100%;
    max-width: 420px;
    margin: 0 auto 18px auto;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    margin-bottom: 24px;
}
.ios-user-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0 18px 0;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    border-radius: 22px;
    margin-bottom: 32px;
}
.ios-avatar-box {
    display: flex;
    justify-content: center;
    width: 100%;
}
.ios-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e9f2ff 60%, #f7fafd 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #3578e5;
    margin-bottom: 12px;
    box-shadow: 0 2px 8px rgba(60, 60, 60, 0.06);
}
.ios-user-meta {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ios-user-name {
    font-size: 19px;
    color: #222;
    font-weight: 700;
    margin-bottom: 2px;
}
.ios-user-email {
    font-size: 15px;
    color: #888;
    margin-bottom: 8px;
}
.ios-setting-list {
    padding: 0;
    margin-bottom: 32px;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    border-radius: 18px;
    background: #fff;
}
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
.ios-btn {
    min-width: 120px;
    height: 44px;
    border-radius: 22px;
    font-size: 17px;
    font-weight: 600;
    outline: none;
    border: none;
    transition: background 0.2s, color 0.2s, border 0.2s;
    cursor: pointer;
    box-shadow: none;
    margin: 0 6px;
    letter-spacing: 1px;
}
.ios-btn-primary {
    background: #3578e5;
    color: #fff;
    border: none;
}
.ios-btn-primary:hover {
    background: #2256a5;
}
.ios-btn-danger {
    background: #fff;
    color: #ff3b30;
    border: 1.5px solid #e0e0e0;
}
.ios-btn-danger:hover {
    background: #ffeaea;
    border-color: #ff3b30;
}
@media (max-width: 600px) {
    .ios-user-info {
        max-width: 98vw;
        padding: 18px 0 12px 0;
    }
    .ios-avatar {
        width: 48px;
        height: 48px;
        font-size: 22px;
    }
    .ios-user-name {
        font-size: 16px;
    }
    .ios-user-email {
        font-size: 13px;
    }
    .ios-login-btn,
    .ios-logout-btn {
        font-size: 14px;
        padding: 7px 18px;
    }
}
.ios-logout-section {
    margin-bottom: 40px;
    box-shadow: 0 2px 12px rgba(255, 59, 48, 0.08);
    border-radius: 18px;
    background: #fff;
    max-width: 420px;
    width: 100%;
}
.ios-login-btn-box {
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.ios-login-btn {
    width: 160px;
    height: 40px;
    background: #fff;
    color: #3578e5;
    border: 2px solid #3578e5;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, border 0.2s;
    outline: none;
    box-shadow: none;
    letter-spacing: 1px;
}
.ios-login-btn:hover {
    background: #3578e5;
    color: #fff;
    border-color: #2256a5;
}
.change-pwd-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 8px;
}
.auth-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>