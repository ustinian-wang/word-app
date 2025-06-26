<template>
    <div
        class="fab-menu"
        :style="{ left: pos.left + 'px', bottom: pos.bottom + 'px' }"
        @touchstart="onDragStart"
        @mousedown="onDragStart"
    >
        <button class="fab-main" @click="toggleMenu" v-test="'fabMenu'">
            <Icon icon="mdi:plus" width="28" height="28" />
        </button>
        <transition name="fab-menu-fade">
            <div v-if="menuOpen" class="fab-menu-list" :class="expandTo">
                <button
                    v-for="item in menuItems"
                    :key="item.action"
                    class="fab-menu-item"
                    @click="goMenu(item)"
                    v-test="item.test"
                >
                    <span class="icon">{{ item.icon }}</span>
                    <span class="label">{{ item.label }}</span>
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { sleep } from '@ustinian-wang/kit';
export default {
    name: 'FabMenu',
    data() {
        return {
            menuOpen: false,
            dragging: false,
            dragStart: { x: 0, y: 0 },
            pos: { left: 16, bottom: 16 },
            expandTo: 'left' // 'left' or 'right'
        };
    },
    computed: {
        ...mapState(['isFullscreen']),
        menuItems() {
            return [
                { test: 'recognize', label: 'AI识词', icon: '📷', route: '/recognize?auto=true' },
                // { test: "words", label: '背单词', icon: '📖', route: '/words' },
                // { test: "wordbooks", label: '词库', icon: '📚', route: '/wordbooks' },
                { test: 'records', label: '学习记录', icon: '📊', route: '/records' },
                // { test: "clearCache", label: '清理缓存', icon: '🧹', action: 'clearCache' },
                // {
                //     test: 'fullscreen',
                //     label: '全屏',
                //     icon: this.fullscreenIcon,
                //     action: 'toggleFullscreen'
                // },
                { test: 'settings', label: '设置', icon: '⚙️', route: '/settings' }
                // { test: "index", label: '首页', icon: '🏠', route: '/' }
            ];
        },
        fullscreenIcon() {
            return this.isFullscreen ? '🔳' : '🔲';
        }
    },
    methods: {
        toggleMenu() {
            if (!this.menuOpen) {
                // 菜单即将展开时，吸附到最近边缘
                this.snapToEdge();
            }
            this.menuOpen = !this.menuOpen;
        },
        snapToEdge() {
            const btnRect = this.$el.getBoundingClientRect();
            const isLeft = btnRect.left < window.innerWidth / 2;
            this.expandTo = isLeft ? 'right' : 'left';
            if (isLeft) {
                this.pos.left = 16;
            } else {
                this.pos.left = window.innerWidth - btnRect.width - 16;
            }
        },
        onDragStart(e) {
            this.dragging = true;
            const event = e.touches ? e.touches[0] : e;
            this.dragStart = {
                x: event.clientX,
                y: event.clientY,
                left: this.pos.left,
                bottom: this.pos.bottom
            };
            document.addEventListener('mousemove', this.onDragMove);
            document.addEventListener('mouseup', this.onDragEnd);
            document.addEventListener('touchmove', this.onDragMove, { passive: false });
            document.addEventListener('touchend', this.onDragEnd);
        },
        onDragMove(e) {
            if (!this.dragging) return;
            const event = e.touches ? e.touches[0] : e;
            const dx = event.clientX - this.dragStart.x;
            const dy = this.dragStart.y - event.clientY;

            let left = this.dragStart.left + dx;
            let bottom = this.dragStart.bottom + dy;

            // 限制在屏幕内
            const btnRect = this.$el.getBoundingClientRect();
            left = Math.max(0, Math.min(window.innerWidth - btnRect.width, left));
            bottom = Math.max(0, Math.min(window.innerHeight - btnRect.height, bottom));

            this.pos = { left, bottom };
            e.preventDefault && e.preventDefault();
        },
        onDragEnd(e) {
            this.dragging = false;
            document.removeEventListener('mousemove', this.onDragMove);
            document.removeEventListener('mouseup', this.onDragEnd);
            document.removeEventListener('touchmove', this.onDragMove);
            document.removeEventListener('touchend', this.onDragEnd);

            // 根据位置决定吸附到哪一边
            const btnRect = this.$el.getBoundingClientRect();
            const isLeft = btnRect.left < window.innerWidth / 2;

            if (isLeft) {
                this.pos.left = 16;
            } else {
                this.pos.left = window.innerWidth - btnRect.width - 16;
            }

            // 如果菜单打开，更新展开方向
            if (this.menuOpen) {
                this.expandTo = isLeft ? 'right' : 'left';
            }
        },
        handleGlobalClick(e) {
            if (!this.menuOpen) return;
            let el = e.target;
            while (el) {
                if (el.classList && el.classList.contains('fab-menu')) return;
                el = el.parentElement;
            }
            this.menuOpen = false;
        },
        ...mapMutations(['setCacheFrozen', 'setIsFullscreen']),
        async clearCache() {
            this.setCacheFrozen(true);
            try {
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
                this.setCacheFrozen(false);
                window.location.reload(true);
            }
        },
        goMenu(item) {
            if (item.action === 'clearCache') {
                this.clearCache();
            } else if (item.action === 'toggleFullscreen') {
                this.setIsFullscreen(!this.isFullscreen);
            } else if (item.route) {
                this.$router.push(item.route);
            } else {
                this.$router.replace({
                    path: '/redirect' + this.$route.fullPath
                });
            }
            this.menuOpen = false;
        }
    },
    mounted() {
        document.addEventListener('mousedown', this.handleGlobalClick);
        document.addEventListener('touchstart', this.handleGlobalClick);
        this.snapToEdge();
    },
    beforeDestroy() {
        document.removeEventListener('mousedown', this.handleGlobalClick);
        document.removeEventListener('touchstart', this.handleGlobalClick);
    }
};
</script>

<style scoped>
.fab-menu {
    position: fixed;
    z-index: 3000;
    user-select: none;
    cursor: move;
}

.fab-main {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
    color: #fff;
    border: none;
    box-shadow: 0 4px 16px rgba(60, 60, 60, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 0.2s, background 0.2s;
}

.fab-main:active {
    background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}

.fab-menu-list {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    background: transparent;
}

.fab-menu-list.left {
    right: 70px;
    flex-direction: row-reverse;
}

.fab-menu-list.right {
    left: 70px;
}

.fab-menu-item {
    background: #fff;
    color: #3578e5;
    border: none;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(60, 60, 60, 0.1);
    width: 64px;
    height: 64px;
    padding: 0;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
    transition: background 0.2s;
}

.fab-menu-item:active {
    background: #e0e7ef;
}

.fab-menu-item .icon {
    color: #3578e5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2px;
}

.fab-menu-item .label {
    font-size: 13px;
    color: #3578e5;
    font-weight: 500;
    line-height: 1;
}

.fab-menu-fade-enter-active,
.fab-menu-fade-leave-active {
    transition: opacity 0.2s;
}

.fab-menu-fade-enter,
.fab-menu-fade-leave-to {
    opacity: 0;
}
</style>
