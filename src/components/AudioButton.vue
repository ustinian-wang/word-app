<template>
    <div class="audio-btn" :class="{ 'is-playing': isPlaying, 'is-loading': isLoading }" @click="handleClick" :title="title">
        <Icon v-if="!isLoading" icon="mdi:volume-high" width="32" height="32" :style="{ color: '#3578e5' }" />
        <Icon v-else icon="mdi:loading" width="32" height="32" :style="{ color: '#3578e5' }" class="loading-icon" />
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2'
import { getAvailableAudioUrl } from '@/kits/words'
import $message from '@/kits/toast'

export default {
    name: 'AudioButton',
    components: { Icon },
    props: {
        word: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: '播放发音'
        }
    },
    data() {
        return {
            isPlaying: false,
            isLoading: false,
            audioPlayer: null
        }
    },
    methods: {
        async handleClick() {
            console.log('jser click')
            if (!this.word) {
                return
            }

            if (this.audioPlayer) {
                this.audioPlayer.pause()
            }

            this.isLoading = true
            try {
                let wordAudioUrl = await getAvailableAudioUrl(this.word)
                if (!wordAudioUrl) {
                    $message.error('网络异常，请稍后重试')
                    return
                }
                this.audioPlayer = new Audio(wordAudioUrl)

                // 添加音频结束监听器
                this.audioPlayer.addEventListener('ended', () => {
                    this.isPlaying = false
                })

                await this.audioPlayer.play()
                this.isPlaying = true
            } catch (err) {
                console.error('Failed to play audio:', err)
                this.isPlaying = false
                $message.error('播放失败，请稍后重试')
            } finally {
                this.isLoading = false
            }
        }
    },
    beforeDestroy() {
        if (this.audioPlayer) {
            this.audioPlayer.pause()
            this.audioPlayer.src = ''
            this.audioPlayer = null
        }
        this.isPlaying = false
        this.isLoading = false
    }
}
</script>

<style lang="less" scoped>
.audio-btn {
    margin-top: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f0f4fa;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.audio-btn .iconify {
    transition: color 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    color: #3578e5;
}

.audio-btn:active {
    background: #e0e7ef;
    transform: scale(0.95);
}

// 加载状态的动画效果
.audio-btn.is-loading {
    background: #f0f4fa;
    cursor: wait;
}

.loading-icon {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

// 播放状态的动画效果
.audio-btn.is-playing {
    background: linear-gradient(45deg, #3578e5, #4f8cff);
    animation: audioPulse 2s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(53, 120, 229, 0.3);
}

.audio-btn.is-playing .iconify {
    color: #fff !important;
    animation: audioIconGlow 2s ease-in-out infinite;
}

// 脉冲动画
@keyframes audioPulse {
    0% {
        box-shadow: 0 0 20px rgba(53, 120, 229, 0.3);
    }
    50% {
        box-shadow: 0 0 25px rgba(53, 120, 229, 0.5);
    }
    100% {
        box-shadow: 0 0 20px rgba(53, 120, 229, 0.3);
    }
}

// 图标发光动画
@keyframes audioIconGlow {
    0% {
        filter: brightness(1);
    }
    50% {
        filter: brightness(1.15);
    }
    100% {
        filter: brightness(1);
    }
}
</style>
