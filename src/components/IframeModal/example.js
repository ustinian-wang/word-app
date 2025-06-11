import { openIframeModal, closeIframeModal, isIframeModalOpen } from './iframeModal';

// 示例1: 基本使用
export async function basicExample() {
    await openIframeModal({
        url: 'https://example.com',
        title: '示例网页'
    });
}

// 示例2: 带回调的完整配置
export async function fullExample() {
    try {
        await openIframeModal({
            url: 'https://www.google.com',
            title: 'Google 搜索',
            showRefresh: true,
            showUrlInput: true,
            width: '90vw',
            height: '80vh',
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
}

// 示例3: 全屏显示
export async function fullscreenExample() {
    await openIframeModal({
        url: 'https://example.com',
        width: '100vw',
        height: '100vh',
        closeOnOverlay: false,
        showUrlInput: false
    });
}

// 示例4: 错误处理
export async function errorHandlingExample() {
    await openIframeModal({
        url: 'https://invalid-url-that-will-fail.com',
        onError: (error) => {
            alert('页面加载失败: ' + error.message);
        }
    });
}

// 示例5: 在按钮点击时使用
export function buttonClickExample() {
    const button = document.createElement('button');
    button.textContent = '打开网页';
    button.onclick = async () => {
        await openIframeModal({
            url: 'https://example.com',
            title: '按钮打开的网页'
        });
    };
    document.body.appendChild(button);
}

// 示例6: 检查弹窗状态
export function checkModalStatus() {
    if (isIframeModalOpen()) {
        console.log('iframe弹窗正在打开');
    } else {
        console.log('没有iframe弹窗打开');
    }
}

// 示例7: 强制关闭弹窗
export function forceCloseModal() {
    closeIframeModal();
}

// 示例8: 在Vue组件中使用
export const vueComponentExample = {
    methods: {
        async openWebPage() {
            await openIframeModal({
                url: 'https://example.com',
                title: 'Vue组件打开的网页'
            });
        }
    }
};

// 示例9: 动态切换URL
export async function dynamicUrlExample() {
    const urls = [
        'https://example.com',
        'https://www.google.com',
        'https://github.com'
    ];
    
    for (const url of urls) {
        await openIframeModal({
            url,
            title: `浏览: ${url}`,
            onUrlChange: (newUrl) => {
                console.log(`用户切换到: ${newUrl}`);
            }
        });
    }
}

// 示例10: 自定义样式
export async function customStyleExample() {
    await openIframeModal({
        url: 'https://example.com',
        width: '800px',
        height: '600px',
        title: '自定义尺寸的弹窗'
    });
} 