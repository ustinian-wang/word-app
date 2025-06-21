import { wordRecordDB } from '@/kits/idb/WordRecordDB';
import { wordReviewDB } from '@/kits/idb/WordReviewDB';

export async function exportAppData2Clipboard() {
    const wordRecords = await wordRecordDB.getAllRecords();
    const wordReviews = await wordReviewDB.getAllWords();
    let data = {
        wordRecords,
        wordReviews
    };

    console.log(data);
    if (isDataEmpty(data)) {
        alert('没有需要导出的学习记录。');
        return;
    }
    const dataStr = JSON.stringify(data);
    await navigator.clipboard.writeText(dataStr);
    alert('学习记录已成功导出到剪贴板！');
}

export async function exportAppData2File(data) {
    Object.assign();

    if (isDataEmpty(data)) {
        alert('没有需要导出的学习记录。');
        return;
    }
    const dataStr = JSON.stringify(data);
    const blob = new window.Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `word-app-data-${Date.now()}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
}

function isDataEmpty(data) {
    let { wordRecords = [], wordReviews = [] } = data;

    return wordRecords.length === 0 && wordReviews.length === 0;
}

export async function importAppData2DB(data) {
    let { wordRecords = [], wordReviews = [] } = data;
    if (isDataEmpty(data)) {
        alert('没有需要导入的学习记录。');
        return;
    }

    for (const wordRecord of wordRecords) {
        await wordRecordDB.importRecord(wordRecord);
    }

    for (const wordReview of wordReviews) {
        await wordReviewDB.importWord(wordReview);
    }
    alert('导入成功！');
}
