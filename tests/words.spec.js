import { expect, test } from '@playwright/test';
import { clickAllTestElements } from './utils/click-all-test-elements.js';

test('单词页：点击元素，不产生控制台错误', async ({ page }) => {
    await page.goto('/#/words'); // 或者包含该元素的具体页面
    await clickAllTestElements(page, test);
});
test.only('单词页：点击释义，会切换释义', async ({ page }) => {
    await page.goto('http://localhost/#/words'); // 或者包含该元素的具体页面

    // await page.click(`[data-test="primary"]`);
    // await page.click(`[data-test="words"]`);
    await page.waitForTimeout(100);
    let res = await page.evaluate(() => {
        // let node = document.querySelector('[data-test="word-zh"]');
        return document.body.innerHTML;
    });
    console.log(res);
    await expect(page.locator(`[data-test="word-zh"]`)).toBeVisible();
    await page.click(`[data-test="word-zh"]`);
    await page.waitForTimeout(100);
    await expect(page.locator(`[data-test="word-zh"]`)).not.toHaveClass('mosaic');
    // await page.waitForTimeout(100);
    // js 跳转特定路由 #words
    // await page.evaluate(async () => {
    //     await window.Vue.nextTick();
    //     window.$router.push('/words');
    // });
    // await page.waitForTimeout(2100);
    // let res = await page.evaluate(() => {
    //     // let node = document.querySelector('[data-test="word-zh"]');
    //     return document.body.innerHTML;
    // });
    // console.log(res);
    // await expect(page.locator(`[data-test="word-zh"]`)).toBeVisible();
    // await page.click(`[data-test="word-zh"]`);
    // await page.waitForTimeout(100);
    // await expect(page.locator(`[data-test="word-zh"]`)).not.toHaveClass('mosaic');
});