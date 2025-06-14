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
                <Icon :icon="getDictionaryIcon(dictType)" width="14" height="14" />
                <span class="dict-btn-text">{{ getDictionaryName(dictType) }}</span>
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
        },
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
                    showUrlInput: false,
                    width: '100vw',
                    height: '80vh',
                    onLoaded: () => {},
                    onError: error => {
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
                        } else {
                            alert(`${dictName}加载失败: ${error.message}`);
                        }
                    }
                });
            } catch (error) {
                alert(`打开${getDictionaryName(dictType)}失败: ${error.message}`);
            }
        }
    }
};
</script>

<style lang="less" scoped>
.dictionary-links {
    margin: 24px 0 12px 0;
    padding: 0;
    text-align: center;
}

.dictionary-title {
    font-size: 12px;
    color: #aaa;
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 1px;
}

.dictionary-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 18px;
    max-width: 320px;
    margin: 0 auto;
}

.dict-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 14px;
    background: #f8f9fa;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
    color: #444;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.18s;
    min-width: 72px;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);

    &:hover {
        background: #e9ecef;
        border-color: #3578e5;
        color: #3578e5;
    }

    &:active {
        transform: scale(0.97);
    }

    .iconify {
        color: #888;
    }

    &:hover .iconify {
        color: #3578e5;
    }
}

.dict-btn-text {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
}

@media (max-width: 480px) {
    .dictionary-buttons {
        gap: 16px;
        max-width: 98vw;
    }
    .dict-btn {
        padding: 5px 8px;
        font-size: 11px;
        min-width: 56px;
    }
}
</style>
