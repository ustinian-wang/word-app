import cloudbase from '@cloudbase/js-sdk';

const app = cloudbase.init({
  env: '你的环境ID', // TODO: 替换为你的云开发环境ID
});

export default app; 