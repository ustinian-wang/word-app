import { expect } from '@playwright/test';

export async function checkPageError(page, asyncFn, errMsgFn) {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });

    await asyncFn();

    expect(errors, `发现错误: ${errMsgFn(errors)}`).toEqual([]);

    page.removeAllListeners('pageerror');
    page.removeAllListeners('console');

    return errors;
}
