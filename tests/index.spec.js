import { test, expect } from '@playwright/test';
import { clickAllTestElements } from './utils/click-all-test-elements.js';
import { checkPageError } from './utils/checkPageExp.js';

test('首页：标题包含“图片”', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/图片/);
});

test('首页：点击元素，不产生控制台错误', async ({ page }) => {
    await page.goto('/'); // 或者包含该元素的具体页面
    await clickAllTestElements(page, test);
});
// 支持首页传递单词参数，固定每日单词
// 音标等待超过3s还没好的，需要给UI反馈：其次我觉得词库里面要加上音标才对

test('首页：点击各种菜单，不产生控制台错误：recognize', async ({ page }) => {
    // await page.goto('/');
    await testMenuClick(page, 'recognize');
});
test('首页：点击各种菜单，不产生控制台错误：records', async ({ page }) => {
    await page.goto('/');
    await testMenuClick(page, 'records');
});
test('首页：点击各种菜单，不产生控制台错误：fullscreen', async ({ page }) => {
    await page.goto('/');
    await testMenuClick(page, 'fullscreen');
});
test('首页：点击各种菜单，不产生控制台错误：settings', async ({ page }) => {
    await testMenuClick(page, 'settings');
});

async function testMenuClick(page, menu) {
    await page.goto('/');
    await page.click(`[data-test="fabMenu"]`); //先展开菜单
    await checkPageError(
        page,
        async () => {
            await page.click(`[data-test="${menu}"]`);
            await page.waitForTimeout(100);
        },
        errors => {
            return `点击${menu}菜单 \n- ${errors.join('\n- ')}`;
        }
    );
}
