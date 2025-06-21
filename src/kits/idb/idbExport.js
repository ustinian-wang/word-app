import { wordRecordDB } from '@/kits/idb/WordRecordDB';
import { wordReviewDB } from '@/kits/idb/WordReviewDB';
import { getErrRst, getOkRst } from '@/types/comm';
import { isJSON, isObject, isString } from '@ustinian-wang/kit';
import { openCopyModal } from '@/components/CopyModal';
import { $message } from '../toast';
import store from '@/store';

/**
 * @typedef {import("@/types/comm.js").Result} Result
 */

/**
 * @description 导出学习记录到剪贴板
 * @returns {Promise<Result>}
 */
export async function exportAppData2Clipboard() {
    const wordRecords = await wordRecordDB.getAllRecords();
    const wordReviews = await wordReviewDB.getAllWords();
    let data = {
        wordRecords,
        wordReviews
    };

    console.log(data);
    if (isDataEmpty(data)) {
        return getErrRst('没有需要导出的学习记录。');
    }
    const dataStr = JSON.stringify(data);
    try {
        if (store.state.setting.dbgClipboardFail) {
            throw new Error('测试剪切板复制失败');
        }
        await navigator.clipboard.writeText(dataStr);
        return getOkRst('学习记录已成功导出到剪贴板！');
    } catch (err) {
        console.error('Failed to copy to clipboard', err);
        let copied = await openCopyModal({
            title: '请手动复制导出的内容',
            content: dataStr
        });
        if (copied) {
            $message.success('已复制到剪贴板');
            return getOkRst('已复制到剪贴板');
        }
        return getOkRst('');
    }
}

/**
 * @description 导出学习记录到文件
 * @returns {Promise<Result>}
 */
export async function exportAppData2File() {
    const wordRecords = await wordRecordDB.getAllRecords();
    const wordReviews = await wordReviewDB.getAllWords();
    let data = {
        wordRecords,
        wordReviews
    };

    if (isDataEmpty(data)) {
        return getErrRst('没有需要导出的学习记录。');
    }
    const dataStr = JSON.stringify(data);
    const blob = new window.Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `word-app-data-${Date.now()}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
    return getOkRst('学习记录已成功导出到文件！');
}

function isDataEmpty(data) {
    let { wordRecords = [], wordReviews = [] } = data;

    return wordRecords.length === 0 && wordReviews.length === 0;
}

/**
 * @description 导入学习记录到数据库
 * @async
 * @param {Object | string} data
 * @returns {Promise<Result>}
 */
export async function importAppData2DB(data) {
    if (isString(data)) {
        data = data.trim();
        if (data === '') {
            return getErrRst('粘贴内容不能为空！');
        }
        if (isJSON(data)) {
            data = JSON.parse(data);
        }
    }

    if (isObject(data)) {
        if (isDataEmpty(data)) {
            return getErrRst('没有需要导入的学习记录。');
        }
    } else {
        return getErrRst('粘贴内容格式错误！');
    }

    let { wordRecords = [], wordReviews = [] } = data;
    if (isDataEmpty(data)) {
        return getErrRst('没有需要导入的学习记录。');
    }

    for (const wordRecord of wordRecords) {
        await wordRecordDB.importRecord(wordRecord);
    }

    for (const wordReview of wordReviews) {
        await wordReviewDB.importWord(wordReview);
    }
    return getOkRst('导入成功！');
}
