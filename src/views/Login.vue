<template>
    <div class="auth-page">
        <div class="auth-container">
            <div class="auth-title">{{ isLogin ? '登录' : '注册' }}</div>
            <form @submit.prevent="handleSubmit">
                <input
                    v-model="form.account"
                    placeholder="请输入账号"
                    class="auth-input"
                    type="text"
                    autocomplete="username"
                />
                <input
                    v-model="form.password"
                    placeholder="请输入密码"
                    class="auth-input"
                    type="password"
                    autocomplete="current-password"
                />
                <transition name="fade">
                    <input
                        v-if="!isLogin"
                        v-model="form.code"
                        placeholder="请输入验证码"
                        class="auth-input"
                        type="text"
                        autocomplete="off"
                        style="margin-bottom: 0"
                    />
                </transition>
                <div v-if="!isLogin" class="auth-code-row">
                    <button
                        type="button"
                        class="auth-code-btn"
                        :disabled="codeCountdown > 0"
                        @click="sendCode"
                    >
                        {{ codeCountdown > 0 ? codeCountdown + 's后重试' : '获取验证码' }}
                    </button>
                </div>
                <button class="auth-btn" type="submit">{{ isLogin ? '登录' : '注册' }}</button>
            </form>
            <div class="auth-switch">
                <span>{{ isLogin ? '还没有账号？' : '已有账号？' }}</span>
                <a href="javascript:;" @click="isLogin = !isLogin">{{
                    isLogin ? '注册' : '登录'
                }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import app from '@/kits/cloudbase';

export default {
    name: 'Login',
    data() {
        return {
            isLogin: true,
            isPhoneMode: true, // 可扩展为邮箱/手机号切换
            codeCountdown: 0,
            form: {
                account: '',
                password: '',
                code: ''
            }
        };
    },
    methods: {
        async handleSubmit() {
            if (!this.form.account || !this.form.password) {
                alert('请填写完整信息');
                return;
            }
            try {
                await app.auth().signInWithUsernameAndPassword(this.form.account, this.form.password);
                alert('登录成功');
                this.$router.push('/settings');
            } catch (e) {
                alert(e.message || '登录失败');
            }
        },
        sendCode() {
            if (!this.form.account) {
                alert('请先输入手机号/邮箱');
                return;
            }
            this.codeCountdown = 60;
            const timer = setInterval(() => {
                this.codeCountdown--;
                if (this.codeCountdown <= 0) clearInterval(timer);
            }, 1000);
            alert('验证码已发送（示例）');
        }
    }
};
</script>

<style scoped>
.auth-page {
    min-height: 100vh;
    background: #f5f6fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100vw;
    box-sizing: border-box;
}
.auth-container {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(60, 60, 60, 0.06);
    width: 92vw;
    max-width: 380px;
    margin: 0 auto;
    padding: 32px 22px 18px 22px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.auth-title {
    font-size: 22px;
    color: #3578e5;
    font-weight: bold;
    margin-bottom: 28px;
    text-align: center;
}
.auth-input {
    width: 100%;
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    background: #f7fafd;
    font-size: 16px;
    margin-bottom: 18px;
    outline: none;
    box-sizing: border-box;
}
.auth-btn {
    width: 100%;
    background: #3578e5;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
}
.auth-btn:hover {
    background: #2256a5;
}
.auth-switch {
    margin-top: 18px;
    text-align: center;
    color: #888;
    font-size: 15px;
}
.auth-switch a {
    color: #3578e5;
    margin-left: 6px;
    text-decoration: underline;
    cursor: pointer;
}
.auth-code-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 12px;
}
.auth-code-btn {
    background: #e9f2ff;
    color: #3578e5;
    border: none;
    border-radius: 6px;
    padding: 6px 14px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.18s;
}
.auth-code-btn:disabled {
    background: #f0f4fa;
    color: #bbb;
    cursor: not-allowed;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style> 