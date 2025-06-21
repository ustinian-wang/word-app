<template>
    <div
        class="wa-phonetic-audio"
        :class="{ disabled: isAudioUnavailable }"
        v-test
        @click="playAudio"
    >
        <span class="phonetic-text">{{ phonetic }}</span>
        <button
            class="audio-btn"
            :disabled="isAudioUnavailable || disabled"
            :class="{ 'is-playing': isPlaying }"
            :title="isAudioUnavailable ? '暂无发音' : '播放发音'"
        >
            <svg viewBox="0 0 24 24" width="1em" height="1em" style="font-size: 20px">
                <path
                    d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z"
                    :fill="isAudioUnavailable || disabled ? '#bbb' : '#3578e5'"
                />
            </svg>
            <span class="ripple"></span>
        </button>
    </div>
</template>

<script>
import { callAudioPlay, createAudioPlay } from '@/kits/audio';
export default {
    name: 'WaPhoneticAudio',
    props: {
        phonetic: {
            type: String,
            default: ''
        },
        word: {
            type: String,
            default: ''
        },
        audioUrl: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isPlaying: false
        };
    },
    computed: {
        isAudioUnavailable() {
            // 没有word且没有audioUrl时不可用
            return !this.word && !this.audioUrl;
        },
        realAudioUrl() {
            if (this.audioUrl) return this.audioUrl;
            if (this.word)
                return `https://dict.youdao.com/dictvoice?type=1&audio=${encodeURIComponent(
                    this.word
                )}`;
            return '';
        }
    },
    methods: {
        playAudio() {
            console.log('playAudio', this.disabled, this.isAudioUnavailable, this.realAudioUrl);
            if (this.disabled || this.isAudioUnavailable) return;
            this.isPlaying = true;
            createAudioPlay(this.realAudioUrl, () => {
                this.isPlaying = false;
                console.log('playAudio end', this.disabled, this.isAudioUnavailable);
            });
        }
    }
};
</script>

<style scoped>
.wa-phonetic-audio {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    /* background: #f0f4fa; */
    /* border-radius: 8px; */
    /* padding: 4px 16px; */
    font-size: 17px;
    color: #3578e5;
    user-select: none;
}
.phonetic-text {
    font-family: 'IPA', monospace;
    color: #666;
    font-size: 17px;
}
.audio-btn {
    background: none;
    border: none;
    padding: 0;
    margin-left: 2px;
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.18s;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
}
.audio-btn:active {
    background: #e3e8f0;
}
.audio-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
.wa-phonetic-audio.disabled {
    opacity: 0.5;
    pointer-events: none;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(53, 120, 229, 0.2);
    transform: scale(0);
    animation: ripple 1s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.audio-btn.is-playing {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@media (max-width: 480px) {
    .wa-phonetic-audio {
        gap: 8px;
        padding: 2px 8px;
        font-size: 15px;
    }
    .phonetic-text {
        font-size: 15px;
    }
    .audio-btn {
        width: 32px;
        height: 32px;
        min-width: 32px;
        min-height: 32px;
    }
}
</style>
