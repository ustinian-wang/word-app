import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import os from 'os';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal && iface.address.startsWith('192.168')) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}
const LOCAL_IP = getLocalIp();
const VITE_PORT = 8080;
const API_PORT = 3001;

export default defineConfig({
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
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'audio/*'],
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
            }
        })
    ],
    server: {
        host: true,
        port: VITE_PORT,
        open: true,
        allowedHosts: ['371ct917zs52.vicp.fun', 'photosvr.w1.luyouxia.net'],
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    define: {
        __LOCAL_IP__: JSON.stringify(LOCAL_IP),
        __VITE_PORT__: JSON.stringify(VITE_PORT),
        __API_PORT__: JSON.stringify(API_PORT)
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: '/word-app',
    build: {
        outDir: 'dist'
    },
    publicDir: 'public'
});
