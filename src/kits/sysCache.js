import { modalConfirm } from '@/components/wa-modal/wa-modal';
import { sleep } from '@ustinian-wang/kit';
/**
 * @description 清理掉
 */
export async function clearSysCache() {
    try {
        if (await modalConfirm('确定要清理缓存吗？')) {
            return;
        }
        // 清理 localStorage
        localStorage.clear();

        // 清理 sessionStorage
        sessionStorage.clear();

        // 清理 IndexedDB
        const databases = await window.indexedDB.databases();
        databases.forEach(db => {
            if (db.name) {
                window.indexedDB.deleteDatabase(db.name);
            }
        });

        // 清理 Service Worker 缓存
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
        }

        // 清理单词缓存
        if (window.word_cache) {
            window.word_cache = {};
        }

        this.$message.success('缓存清理成功，页面将在3秒后刷新');
        await sleep(300);
    } catch (error) {
        console.error('清理缓存失败:', error);
        this.$message.error('清理缓存失败，请重试');
    } finally {
        window.location.reload(true);
    }
}
