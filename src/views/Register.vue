<template>
    <div class="auth-page">
        <div class="auth-container">
            <div class="auth-title">注册</div>
            <form @submit.prevent="handleSubmit">
                <input
                    v-model="form.username"
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
                    autocomplete="new-password"
                />
                <input
                    v-model="form.confirmPassword"
                    placeholder="请确认密码"
                    class="auth-input"
                    type="password"
                    autocomplete="new-password"
                />
                <button class="auth-btn" type="submit">注册</button>
            </form>
            <div class="auth-switch">
                <span>已有账号？</span>
                <router-link to="/login">登录</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { registerApi } from '@/apis/userApi';
import $message from '@/kits/toast';
import { gotoIndex } from '@/router';

export default {
    name: 'Register',
    data() {
        return {
            isPhoneMode: true, // 可扩展为邮箱/手机号切换
            form: {
                username: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        async handleSubmit() {
            let {
                username,
                password,
                confirmPassword
            } = this.form;
            username = username.trim();
            password = password.trim();
            confirmPassword = confirmPassword.trim();
            if (!username || !password || !confirmPassword) {
                $message.warning('请填写完整信息');
                return;
            }
            if (password !== confirmPassword) {
                $message.warning('两次输入的密码不一致');
                return;
            }
            let res = await registerApi({
                username,
                password,
                confirmPassword
            });
            if (res.data.success) {
                $message.success(res.data.msg);
                gotoIndex(); // 跳转首页
            } else {
                $message.error(res.data.msg);
            }
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
</style> 