import { test } from '@playwright/test';
import { clickAllTestElements } from './utils/click-all-test-elements.js';

test('在首页上点击所有可交互元素，检查控制台报错', async ({ page }) => {
    // 1. 访问你想测试的页面
    await page.goto('/');

    // 2. 调用通用的冒烟测试函数
    await clickAllTestElements(page, test);
});
