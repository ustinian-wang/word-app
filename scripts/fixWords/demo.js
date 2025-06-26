const https = require('https');
const { execSync } = require('child_process');


// curl方式同步实现
function fetchPhoneticByCurlSync(word) {
    try {
        const curlCmd = `curl 'https://api.dictionaryapi.dev/api/v2/entries/en/${word}' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en,zh-CN;q=0.9,zh;q=0.8' \
  -H 'cache-control: no-cache' \
  -b '_ga=GA1.2.2049658323.1749651946; _ga_135JF1ZKNC=GS2.1.s1749960104$o3$g0$t1749960142$j22$l0$h0' \
  -H 'pragma: no-cache' \
  -H 'priority: u=0, i' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: none' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'`;
        const stdout = execSync(curlCmd, { encoding: 'utf8' }).toString();
        return stdout;
    } catch (e) {
        console.error('curl sync error:', e);
        return '';
    }
}

// 使用示例
const phonetic = fetchPhoneticByCurlSync('project');
console.log('project 的音标(curl sync):', phonetic);
