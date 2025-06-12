<template>
    <div class="index-page">
        <div class="bg-img" :style="bgStyle"></div>
        <div class="content" v-if="dailyWord">
            <div class="daily-word-block">
                <div class="daily-label">每日精选单词</div>
                <div class="daily-word">{{ dailyWord.en }}</div>
                <div class="daily-zh">{{ dailyWord.zh }}</div>
            </div>
            <div class="daily-sentence-block">
                <div class="sentence-label">每日英文句子</div>
                <div class="sentence-en">“{{ dailyWord.sentence_en }}”</div>
                <div class="sentence-zh">{{ dailyWord.sentence_zh }}</div>
            </div>
            <div class="f_button_group">
                <button
                    v-for="option in goOptions"
                    :key="option.status"
                    class="start-btn"
                    :class="option.type || 'primary'"
                    :disabled="buttonLoading"
                    @click="handleButtonClick(option)"
                >
                    {{ option.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { STUDY_STATUS_DEF } from '@/store/index.js';
import { getRandomWordInfoApi } from '@/kits/words';

export default {
    name: 'Index',
    data() {
        return {
            dailyWord: null,
            // 这里可用接口或本地随机，示例写死
            // dailyWord: { en: 'serendipity', zh: '意外发现美好事物的能力' },
            buttonLoading: false
        };
    },
    methods: {
        ...mapMutations(['setStudyStatus']),
        goWords() {
            this.setStudyStatus(STUDY_STATUS_DEF.LEARNING);
            this.$router.push('/words');
        },
        goNext(status) {},
        handleButtonClick(option) {
            if (this.buttonLoading) return;
            this.buttonLoading = true;
            Promise.resolve(option.action()).finally(() => {
                setTimeout(() => {
                    this.buttonLoading = false;
                }, 500); // 0.5秒后可再次点击
            });
        }
    },
    computed: {
        bgStyle() {
            return `background-image: url(${this?.dailyWord?.bg || ''});`;
        },
        goOptions() {
            if (this.study_status === STUDY_STATUS_DEF.DEFAULT) {
                return [
                    {
                        text: '背单词',
                        nextStatus: STUDY_STATUS_DEF.LEARNING,
                        type: 'primary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.LEARNING);
                            this.$router.push('/words');
                        }
                    },
                    {
                        text: '复习',
                        nextStatus: STUDY_STATUS_DEF.REVIEWING,
                        type: 'secondary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING);
                            this.$router.push('/words');
                        }
                    }
                ];
            } else if (this.study_status === STUDY_STATUS_DEF.LEARNING) {
                return [
                    {
                        text: '继续背单词',
                        nextStatus: STUDY_STATUS_DEF.LEARNING,
                        type: 'primary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.LEARNING);
                            this.$router.push('/words');
                        }
                    }
                ];
            } else if (this.study_status === STUDY_STATUS_DEF.LEARNED) {
                return [
                    {
                        text: '再背一组',
                        nextStatus: STUDY_STATUS_DEF.LEARNING,
                        type: 'primary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.LEARNING);
                            this.$router.push('/words');
                        }
                    },
                    {
                        text: '复习',
                        nextStatus: STUDY_STATUS_DEF.REVIEWING,
                        type: 'secondary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING);
                            this.$router.push('/words');
                        }
                    }
                ];
            } else if (this.study_status === STUDY_STATUS_DEF.REVIEWING) {
                return [
                    {
                        text: '背单词',
                        nextStatus: STUDY_STATUS_DEF.LEARNING,
                        type: 'primary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.LEARNING);
                            this.$router.push('/words');
                        }
                    },
                    {
                        text: '继续复习',
                        nextStatus: STUDY_STATUS_DEF.REVIEWING,
                        type: 'secondary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING);
                            this.$router.push('/words');
                        }
                    }
                ];
            } else if (this.study_status === STUDY_STATUS_DEF.REVIEWED) {
                return [
                    {
                        text: '背单词',
                        nextStatus: STUDY_STATUS_DEF.DEFAULT,
                        type: 'primary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.DEFAULT);
                            this.$router.push('/words');
                        }
                    },
                    {
                        text: '复习',
                        nextStatus: STUDY_STATUS_DEF.REVIEWING,
                        type: 'secondary',
                        action: () => {
                            this.setStudyStatus(STUDY_STATUS_DEF.REVIEWING);
                            this.$router.push('/words');
                        }
                    }
                ];
            }

            return [
                {
                    text: '背单词',
                    nextStatus: STUDY_STATUS_DEF.DEFAULT,
                    type: 'primary',
                    action: () => {
                        this.setStudyStatus(STUDY_STATUS_DEF.DEFAULT);
                        this.$router.push('/words');
                    }
                }
            ];
        },
        ...mapState(['study_status']),
        buttonText() {
            switch (this.study_status) {
                case STUDY_STATUS_DEF.DEFAULT:
                    return '背单词';
                case STUDY_STATUS_DEF.LEARNING:
                    return '继续背单词';
                case STUDY_STATUS_DEF.LEARNED:
                    return '复习';
            }
        }
    },
    async mounted() {
        /** @type {WordInfoResponse} */
        let res = await getRandomWordInfoApi();
        let data = res.data.data;
        console.log(data);
        let dailyWord = {
            en: data.word,
            zh: data.translations
                .map(item => {
                    return `${item.pos}. ${item.tran_cn}`;
                })
                .join('\n'),
            sentence_en: data?.sentences?.[0]?.s_content,
            sentence_zh: data?.sentences?.[0]?.s_cn,
            bg: `https://image.pollinations.ai/prompt/${data.word}`
        };
        this.dailyWord = dailyWord;
    }
};
</script>

<style scoped>
.index-page {
    min-height: 100vh;
    width: 100vw;
    position: relative;
    background: #f8fafc;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')
        center/cover no-repeat;
    opacity: 0.18;
    z-index: 1;
}
.content {
    position: relative;
    z-index: 2;
    width: 100vw;
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 10vh;
}
.daily-word-block {
    /* background: #fff; */
    border-radius: 14px;
    /* box-shadow: 0 4px 24px rgba(60,60,60,0.08); */
    padding: 28px 24px 18px 24px;
    margin-bottom: 24px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
}
.daily-label {
    color: #3578e5;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: 1px;
}
.daily-word {
    font-size: 32px;
    font-weight: bold;
    color: #222;
    margin-bottom: 8px;
}
.daily-zh {
    font-size: 18px;
    color: #666;
}
.daily-sentence-block {
    /* background: #f0f4fa; */
    border-radius: 12px;
    padding: 18px 18px 12px 18px;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
}
.sentence-label {
    color: #4f8cff;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
}
.sentence-en {
    font-size: 18px;
    color: #333;
    margin-bottom: 6px;
}
.sentence-zh {
    font-size: 15px;
    color: #888;
}
.f_button_group {
    position: fixed;
    bottom: 16vh;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 10;
    padding: 0 16px;
    box-sizing: border-box;
}
.start-btn {
    background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
    color: #fff;
    border: none;
    border-radius: 24px;
    font-size: 18px;
    font-weight: 700;
    padding: 14px 36px;
    min-width: 120px;
    box-shadow: 0 2px 12px rgba(79, 140, 255, 0.12);
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    letter-spacing: 2px;
    outline: none;
    position: relative;
    overflow: hidden;
}
.start-btn:active {
    background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}
.start-btn:disabled {
    background: #b3d8ff;
    color: #fff;
    cursor: not-allowed;
    box-shadow: none;
}
.start-btn.primary {
    background: linear-gradient(90deg, #4f8cff 0%, #6ed0ff 100%);
    color: #fff;
}
.start-btn.secondary {
    background: #f0f4fa;
    color: #3578e5;
    border: 1.5px solid #b3d8ff;
}
.start-btn.primary:active {
    background: linear-gradient(90deg, #3578e5 0%, #4f8cff 100%);
}
.start-btn.secondary:active {
    background: #e0e8f8;
    color: #3578e5;
}
@media (max-width: 600px) {
    /* .f_button_group {
            flex-direction: row;
            gap: 12px;
            padding: 0 8vw;
        }
        .start-btn {
            width: auto;
            min-width: 100px;
            padding: 12px 0;
            font-size: 16px;
        } */
}
</style>
