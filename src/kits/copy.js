import { getErrRst, getOkRst } from '@/types/comm';

export function copyToClipboard(text) {
    if (navigator.clipboard) {
        return navigator.clipboard
            .writeText(text)
            .catch(() => {
                return manualCopy(text);
            })
            .then(() => {
                return getOkRst('复制成功');
            });
    } else {
        return manualCopy(text);
    }
}

function manualCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.focus();
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    // if (!result) {
    //     alert('复制失败，请手动长按文本进行复制');
    // }

    return result ? getOkRst('复制成功') : getErrRst('复制失败，请手动长按文本进行复制');
}
