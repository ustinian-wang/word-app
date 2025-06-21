import { expect } from '@playwright/test';

/**
 * 发现并点击页面上所有带有 [data-test] 的可见元素，并检查控制台是否有错误。
 * @param {import('@playwright/test').Page} page - Playwright 的 page 对象.
 * @param {import('@playwright/test').Test} test - Playwright 的 test 对象.
 */
export async function clickAllTestElements(page, test) {
    // 1. 发现页面上所有可见的 data-test 元素，并获取它们的 CSS Selector Path
    const selectors = await page.evaluate(() => {
        function getElementCssSelector(element) {
            if (!(element instanceof Element)) return '';
            const path = [];
            while (element.nodeType === Node.ELEMENT_NODE) {
                let selector = element.nodeName.toLowerCase();
                if (element.id) {
                    selector = `#${element.id}`;
                    path.unshift(selector);
                    break;
                } else {
                    let index = 1;
                    let sibling = element.previousElementSibling;
                    while (sibling) {
                        if (sibling.nodeName === element.nodeName) {
                            index++;
                        }
                        sibling = sibling.previousElementSibling;
                    }
                    const nextSibling = element.nextElementSibling;
                    let hasSameTypeSibling = false;
                    if (index > 1) {
                        hasSameTypeSibling = true;
                    } else if (nextSibling) {
                        sibling = element.nextElementSibling;
                        while (sibling) {
                            if (sibling.nodeName === element.nodeName) {
                                hasSameTypeSibling = true;
                                break;
                            }
                            sibling = sibling.nextElementSibling;
                        }
                    }
                    if (hasSameTypeSibling) {
                        selector += `:nth-of-type(${index})`;
                    }
                }
                path.unshift(selector);
                element = element.parentNode;
            }
            return path.join(' > ').replace('html > ', '');
        }

        const nodes = Array.from(document.querySelectorAll('[data-test]'));
        return nodes
            .filter(node => node.offsetParent !== null)
            .map(node => getElementCssSelector(node));
    });

    console.log(`在当前页面发现 ${selectors.length} 个可见元素，将逐一进行点击测试...`);
    console.log(selectors);

    // 2. 遍历所有发现的选择器
    for (const selector of selectors) {
        // 使用 test.step 为每一次点击创建独立的报告条目
        await test.step(`Testing click on: ${selector}`, async () => {
            // 在这里，我们不再重新加载页面，因为我们期望在调用此函数前已经访问了正确的页面
            const errors = [];
            page.on('pageerror', error => errors.push(error.message));
            page.on('console', msg => {
                if (msg.type() === 'error') {
                    errors.push(msg.text());
                }
            });

            await page.click(selector);
            await page.waitForTimeout(100);

            expect(
                errors,
                `Found errors after clicking ${selector}: \n- ${errors.join('\n- ')}`
            ).toEqual([]);

            page.removeAllListeners('pageerror');
            page.removeAllListeners('console');
        });
    }
} 