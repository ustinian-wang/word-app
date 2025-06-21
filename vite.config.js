import { defineConfig, loadEnv } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
// import os from 'os';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// function getLocalIp() {
//     const interfaces = os.networkInterfaces();
//     for (const name of Object.keys(interfaces)) {
//         for (const iface of interfaces[name]) {
//             if (iface.family === 'IPv4' && !iface.internal && iface.address.startsWith('192.168')) {
//                 return iface.address;
//             }
//         }
//     }
//     return 'localhost';
// }
// const LOCAL_IP = getLocalIp();
// const VITE_PORT = 4000;

export default ({ mode }) => {
    // console.log(mode, process.cwd(), '');
    const env = loadEnv(mode, process.cwd(), '');
    const VITE_API = env.VITE_API;
    const VITE_PORT = env.VITE_PORT;
    const VITE_PROXY_API = env.VITE_PROXY_API;
    // console.log(env);

    return defineConfig({
        plugins: [
            vue2(),
            VitePWA({
                strategies: 'injectManifest',
                srcDir: 'src',
                filename: 'sw.js',
                registerType: 'autoUpdate',
                devOptions: {
                    enabled: true,
                    type: 'module'
                },
                includeAssets: [
                    'favicon.ico',
                    'apple-touch-icon.png',
                    'masked-icon.svg',
                    'audio/*'
                ],
                manifest: {
                    name: '单词学习',
                    short_name: '单词学习',
                    description: '一个简单的单词学习应用',
                    theme_color: '#3578e5',
                    start_url: '/',
                    display: 'standalone',
                    background_color: '#ffffff',
                    icons: [
                        {
                            src: 'icons/icon-72x72.png',
                            sizes: '72x72',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-96x96.png',
                            sizes: '96x96',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-128x128.png',
                            sizes: '128x128',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-144x144.png',
                            sizes: '144x144',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-152x152.png',
                            sizes: '152x152',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-192x192.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-384x384.png',
                            sizes: '384x384',
                            type: 'image/png'
                        },
                        {
                            src: 'icons/icon-512x512.png',
                            sizes: '512x512',
                            type: 'image/png'
                        }
                    ]
                },
                injectManifest: {
                    maximumFileSizeToCacheInBytes: 8 * 1024 * 1024 // 设置为 8MB
                }
            })
        ],
        server: {
            host: true,
            port: VITE_PORT,
            open: true,
            allowedHosts: [
                '371ct917zs52.vicp.fun',
                'photosvr.w1.luyouxia.net',
                'qyapi.weixin.qq.com'
            ],
            proxy: {
                '/api': {
                    target: env.VITE_PROXY_API,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, '')
                }
            }
        },
        define: {
            VITE_API: JSON.stringify(VITE_API),
            VITE_PROXY_API: JSON.stringify(VITE_PROXY_API)
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        base: '/word-app',
        build: {
            outDir: 'dist',
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['vue', 'vue-router'],
                        utils: ['lodash', 'echarts']
                    }
                }
            }
        },
        publicDir: 'public'
    });
};
