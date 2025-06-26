let data_arr = require('./data.json');
let fs = require('fs');
let path = require('path');
let cet4 = fs.readFileSync(path.join(__dirname, './cet4.txt'), 'utf-8');

let cet4_arr = cet4.split('\n').filter(Boolean);

let data_map_by_word = data_arr.reduce((acc, item) => {
    acc[item.word] = item;
    return acc;
}, {});

let new_data_arr = cet4_arr.map(item => {
    let now_word = item.split('\t')[0];
    let now_mean = item.split('\t')[1];
    let data_item = data_map_by_word[now_word];
    if (data_item) {
        let { word, symbols, part } = data_item;
        // return `${word}\t${symbols}\t${now_mean}`;
        return {
            word,
            symbols,
            now_mean
        };
    }
    return {
        word: now_word,
        symbols: 'null',
        now_mean
    };
});

// console.log(new_data_arr);

fs.writeFileSync(path.join(__dirname, './new_data.txt'), new_data_arr.join('\n'));

// async function fetchPhonetic(word) {
//     // 这里用有道词典网页接口做演示，实际项目建议用官方API或自有服务
//     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
//     console.log(url);
//     const res = await fetch(url);
//     const data = await res.json();

//     // 解析音标（以英式音标为例）
//     try {
//         const phonetic = data.ec.word[0].ukphone || data.ec.word[0].phone || '';
//         return phonetic;
//     } catch (e) {
//         return '';
//     }
// }

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function main() {
//     for (let i = 0; i < new_data_arr.length; i++) {
//         let item = new_data_arr[i];
//         let phonetic = await fetchPhonetic(item.word);
//         console.log(phonetic);
//     }
// }

// (async function () {
//     let get_new_data_arr = new_data_arr.filter(item => item.symbols === 'null');
//     for (let new_data of get_new_data_arr.slice(0, 3)) {
//         let phonetic = await fetchPhonetic(new_data.word);
//         await sleep(2000 + parseInt(Math.random() * 500));
//         console.log(phonetic);
//     }
// })();

async function fetchPhonetic(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res = await fetch(url);
    const data = await res.json();

    // 兼容 dictionaryapi.dev 的数据结构
    try {
        // phonetics 可能有多个，优先取有 text 的
        const phonetic = data[0]?.phonetics?.find(p => p.text)?.text || '';
        return phonetic;
    } catch (e) {
        return '';
    }
}

// 使用示例
fetchPhonetic('example').then(phonetic => {
    console.log('example 的音标:', phonetic);
});
