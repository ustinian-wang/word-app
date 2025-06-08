import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import os from 'os';
import { resolve } from 'path';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
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
  plugins: [vue()],
  server: {
    host: true,
    port: VITE_PORT,
    open: true,
    allowedHosts: ['371ct917zs52.vicp.fun', 'photosvr.w1.luyouxia.net']
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
  }
});
