<template>
    <div class="auth-page">
        <div class="auth-container">
            <div class="auth-title">{{ true ? '登录' : '注册' }}</div>
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
                    autocomplete="current-password"
                />
                <button class="auth-btn" type="submit">登录</button>
            </form>
            <div class="auth-switch">
                <span>还没有账号？</span>
                <a href="/#/register">注册</a>
            </div>
        </div>
    </div>
</template>

<script>
import { loginApi } from '@/apis/userApi';
import $message from '@/kits/toast';

export default {
    name: 'Login',
    data() {
        return {
            true: true,
            isPhoneMode: true, // 可扩展为邮箱/手机号切换
            form: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        async handleSubmit() {
            if (!this.form.username || !this.form.password) {
                alert('请填写完整信息');
                return;
            }
            let res = await loginApi(this.form);
            if (res.data.success) {
                $message.success(res.data.msg);
                res.data.data.token && this.setTokenToCookie(res.data.data.token);
                this.$router.push('/settings');
            } else {
                $message.error(res.data.msg);
            }
        },
        setTokenToCookie(token) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 7); // 7天过期
            
            document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}samesite=strict`;
        },
        getTokenFromCookie() {
            const name = 'token=';
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return null;
        },
        removeTokenFromCookie() {
            document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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