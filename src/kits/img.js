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
        input.addEventListener(
            'change',
            e => {
                const file = input.files[0];
                document.body.removeChild(input);
                if (file) {
                    resolve(file);
                } else {
                    reject(new Error('未获取到图片文件'));
                }
            },
            { once: true }
        );
        input.click();
    });
}
/**
 * @description 压缩图片
 * @param {File} file 图片文件
 * @param {number} maxWidth 最大宽度
 * @param {number} maxHeight 最大高度
 * @param {number} quality 质量
 * @returns
 */

export function compressImage(file, maxWidth = 800, maxHeight = 1600, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const img = new window.Image();
        const reader = new FileReader();
        reader.onload = e => {
            img.src = e.target.result;
        };
        img.onload = () => {
            let { width, height } = img;
            // 如果图片本身比较小，不压缩，直接返回原base64
            if (width <= maxWidth) {
                resolve(img.src);
                return;
            }
            const scale = Math.min(maxWidth / width, maxHeight / height, 1);
            width = width * scale;
            height = height * scale;
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(
                blob => {
                    const reader2 = new FileReader();
                    reader2.onload = e2 => resolve(e2.target.result); // base64
                    reader2.onerror = reject;
                    reader2.readAsDataURL(blob);
                },
                'image/jpeg',
                quality
            );
        };
        img.onerror = reject;
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
