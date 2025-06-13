<template>
    <div class="dictionary-links">
        <div class="dictionary-title">权威词典</div>
        <div class="dictionary-buttons">
            <button
                v-for="dictType in dictionaries"
                :key="dictType"
                class="dict-btn"
                @click="handleDictionaryClick(dictType)"
                :title="getDictionaryName(dictType)"
            >
                <Icon :icon="getDictionaryIcon(dictType)" width="16" height="16" />
                <span>{{ getDictionaryName(dictType) }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import {
    getRecommendedDictionaries,
    getDictionaryName,
    getDictionaryIcon,
    getDictionaryUrl
} from '@/views/Words/dictionaryConfig';
import { openIframeModal } from './IframeModal/iframeModal';

export default {
    name: 'DictionaryLinks',
    components: { Icon },
    props: {
        word: {
            type: String,
            required: true
        }
    },
    computed: {
        dictionaries() {
            return getRecommendedDictionaries();
        }
    },
    methods: {
        getDictionaryName(dictType) {
            return getDictionaryName(dictType);
        },
        getDictionaryIcon(dictType) {
            return getDictionaryIcon(dictType);
        },
        handleDictionaryClick(dictType) {
            this.openDictionary(dictType, this.word);
            // this.$emit('dictionary-click', dictType, this.word);
        },
        // 打开词典
        async openDictionary(dictType, word) {
            if (!word) return;

            try {
                const url = getDictionaryUrl(dictType, word);
                const dictName = getDictionaryName(dictType);
                const title = `${dictName} - ${word}`;

                await openIframeModal({
                    url,
                    title,
                    showRefresh: true,
                    showUrlInput: false, // 词典页面不需要URL输入
                    width: '100vw',
                    height: '80vh',
                    onLoaded: () => {
                        // console.log(`${dictName}加载完成:`, loadedUrl);
                    },
                    onError: error => {
                        // console.error(`${dictName}加载错误:`, error.message);
                        // 如果iframe加载失败，提示用户
                        if (
                            error.message.includes('frame-ancestors') ||
                            error.message.includes('CSP')
                        ) {
                            if (dictType === 'cambridge' || dictType === 'merriam') {
                                alert(
                                    `${dictName}不支持在iframe中显示。\n\n建议：\n1. 尝试其他国内词典\n2. 或直接访问：${url}`
                                );
                            } else {
                                alert(`${dictName}不支持在iframe中显示，请尝试其他词典。`);
                            }
                        } else if (error.message.includes('加载已取消')) {
                            // console.log('用户取消了加载');
                            // 不显示alert，因为这是用户主动取消的
                        } else {
                            alert(`${dictName}加载失败: ${error.message}`);
                        }
                    }
                });
            } catch (error) {
                // console.error(`打开词典失败:`, error);
                alert(`打开${getDictionaryName(dictType)}失败: ${error.message}`);
            }
        }
    }
};
</script>

<style lang="less" scoped>
.dictionary-links {
    // margin-top: 32px;
    text-align: center;
}

.dictionary-title {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    font-weight: 500;
}

.dictionary-buttons {
    padding: 0 24px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    flex-wrap: wrap;
}

.dict-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    color: #333;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 60px;
    justify-content: center;

    &:hover {
        background: #e9ecef;
        border-color: #3578e5;
        color: #3578e5;
    }

    &:active {
        transform: scale(0.95);
    }

    .iconify {
        color: #666;
    }

    &:hover .iconify {
        color: #3578e5;
    }
}

// 响应式设计
@media (max-width: 480px) {
    .dict-btn {
        padding: 6px 10px;
        font-size: 12px;
        min-width: 50px;
    }
}
</style>
