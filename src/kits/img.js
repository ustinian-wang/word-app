/**
 * @description 文件转base64
 * @param {File} file 文件
 * @returns {Promise<string>}
 */
export function file2Base64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
    });
}

/**
 * @description 唤起摄像头拍照并获取图片文件（移动端优先）
 * @returns {Promise<File>} 选中的图片文件
 */
export function captureImageFromCamera() {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'environment';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.addEventListener('change', (e) => {
            const file = input.files[0];
            document.body.removeChild(input);
            if (file) {
                resolve(file);
            } else {
                reject(new Error('未获取到图片文件'));
            }
        }, { once: true });
        input.click();
    });
}
