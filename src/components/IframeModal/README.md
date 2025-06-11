# IframeModal 组件使用说明 (Vue2版本)

## 概述

IframeModal 是一个功能完整的 iframe 弹窗组件，专为 Vue2 设计，支持动态加载网页、loading 效果、URL 切换等功能，且不会阻塞主页面渲染。

## 特性

- ✅ 动态加载任意网页
- ✅ 加载状态显示
- ✅ URL 输入和切换
- ✅ 刷新功能
- ✅ 响应式设计
- ✅ 不阻塞主页面
- ✅ Promise 支持
- ✅ 错误处理
- ✅ 自定义尺寸
- ✅ Vue2 完全兼容

## 安装和使用

### 1. 导入 API

```javascript
import { openIframeModal, closeIframeModal, isIframeModalOpen } from '@/components/IframeModal/iframeModal';
```

### 2. 基本使用

```javascript
// 简单打开一个网页
await openIframeModal({
    url: 'https://example.com',
    title: '示例网页'
});
```

### 3. 完整配置示例

```javascript
try {
    await openIframeModal({
        // 基本配置
        url: 'https://example.com',
        title: '示例网页',
        
        // 显示控制
        showRefresh: true,        // 显示刷新按钮
        showUrlInput: true,       // 显示URL输入框
        
        // 尺寸设置
        width: '90vw',
        height: '80vh',
        
        // 行为控制
        closeOnOverlay: true,     // 点击遮罩关闭
        
        // 事件回调
        onLoaded: (url) => {
            console.log('页面加载完成:', url);
        },
        onError: (error) => {
            console.error('加载错误:', error.message);
        },
        onUrlChange: (url) => {
            console.log('URL已更改:', url);
        }
    });
    
    console.log('弹窗已关闭');
} catch (error) {
    console.error('打开弹窗失败:', error);
}
```

## API 参考

### openIframeModal(options)

打开 iframe 弹窗

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `url` | `string` | `''` | 要加载的URL |
| `title` | `string` | `''` | 弹窗标题 |
| `showRefresh` | `boolean` | `true` | 是否显示刷新按钮 |
| `showUrlInput` | `boolean` | `true` | 是否显示URL输入框 |
| `width` | `string` | `'90vw'` | 弹窗宽度 |
| `height` | `string` | `'80vh'` | 弹窗高度 |
| `closeOnOverlay` | `boolean` | `true` | 是否允许点击遮罩关闭 |

#### 事件回调

| 事件 | 参数 | 说明 |
|------|------|------|
| `onLoaded` | `(url: string) => void` | 页面加载完成时触发 |
| `onError` | `(error: {message: string}) => void` | 加载错误时触发 |
| `onUrlChange` | `(url: string) => void` | URL变化时触发 |

#### 返回值

返回一个 Promise，当弹窗关闭时 resolve。

### closeIframeModal()

关闭当前打开的 iframe 弹窗

### isIframeModalOpen()

检查是否有 iframe 弹窗正在打开

## Vue2 兼容性说明

本组件专为 Vue2 设计，使用了以下 Vue2 特性：

- `Vue.extend()` 创建组件构造函数
- `$mount()` 挂载组件
- `$destroy()` 销毁组件
- `$on()` 监听事件
- `$emit()` 发射事件
- 移除了 Vue3 特有的 `Teleport` 和 `v-bind` CSS 语法

## 使用场景

### 1. 查看外部网页

```javascript
// 在按钮点击时打开网页
async function openWebPage() {
    await openIframeModal({
        url: 'https://www.google.com',
        title: 'Google 搜索'
    });
}
```

### 2. 动态切换网页

```javascript
// 用户可以在弹窗中输入新的URL进行切换
await openIframeModal({
    url: 'https://example.com',
    showUrlInput: true,
    onUrlChange: (url) => {
        // 记录用户访问的URL
        console.log('用户访问:', url);
    }
});
```

### 3. 错误处理

```javascript
await openIframeModal({
    url: 'https://invalid-url.com',
    onError: (error) => {
        // 显示错误提示
        alert('页面加载失败: ' + error.message);
    }
});
```

### 4. 自定义尺寸

```javascript
// 全屏显示
await openIframeModal({
    url: 'https://example.com',
    width: '100vw',
    height: '100vh',
    closeOnOverlay: false  // 禁用点击遮罩关闭
});
```

## 注意事项

1. **跨域限制**: 某些网站可能不允许在 iframe 中加载
2. **安全策略**: 某些网站设置了 X-Frame-Options 头，会阻止在 iframe 中显示
3. **性能考虑**: 同时只能打开一个 iframe 弹窗
4. **移动端适配**: 组件已包含响应式设计，支持移动端使用
5. **Vue2 兼容**: 确保项目使用 Vue2 版本

## 故障排除

### 页面无法加载

```javascript
// 检查是否是跨域问题
await openIframeModal({
    url: 'https://example.com',
    onError: (error) => {
        if (error.message.includes('跨域')) {
            console.log('该网站不允许在iframe中加载');
        }
    }
});
```

### 弹窗无法关闭

```javascript
// 强制关闭弹窗
closeIframeModal();
```

### Vue2 相关错误

如果遇到 Vue2 兼容性问题，请确保：

1. 项目使用的是 Vue2 版本
2. 正确导入了 `Vue` 对象
3. 组件使用了正确的 Vue2 语法

## 示例代码

完整的使用示例请参考 `src/views/Words/Words.vue` 中的 `openIframeExample` 方法。 