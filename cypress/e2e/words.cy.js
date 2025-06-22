import { getRecommendedDictionaries } from '../../src/views/Words/dictionaryConfig';
console.log('[getRecommendedDictionaries]', getRecommendedDictionaries());

context('单词页面测试', () => {
    it('访问单词页面, url符合预期', () => {
        // 先访问首页
        gotoWords(cy);
        cy.location('hash').should('include', '/words');
    });

    it('点击释义，会切换释义', () => {
        gotoWords(cy);
        // 等待 [data-test="word-zh"] 元素出现并可见
        // Cypress 会自动重试直到元素可见或超时 (默认为4秒)
        // cy.get('[data-test="word-zh"]').should('be.visible');
        // // 检查初始状态是否含有 mosaic 类
        // cy.get('[data-test="word-zh"]').should('have.class', 'mosaic');
        // cy.wait(1000);
        // 点击中文释义
        cy.get('.is-current [data-test="word-zh"]').click();

        // 验证 .mosaic 类是否已被移除
        // cy.get('[data-test="word-zh"]').should('not.have.class', 'mosaic');
    });
    // it('查看权威词典', () => {
    //     //  gotoWords(cy);
    //     // 等待 [data-test="word-zh"] 元素出现并可见
    //     // Cypress 会自动重试直到元素可见或超时 (默认为4秒)
    //     // cy.get('[data-test="word-zh"]').should('be.visible');
    //     // // 检查初始状态是否含有 mosaic 类
    //     // cy.get('[data-test="word-zh"]').should('have.class', 'mosaic');

    //     // 点击中文释义
    //     cy.get('[data-test="word-zh"]').click();

    //     // 验证 .mosaic 类是否已被移除
    //     // cy.get('[data-test="word-zh"]').should('not.have.class', 'mosaic');
    // });
});

context('权威词典', () => {
    const dictCount = 6; // 根据你的测试，这里有6个词典

    beforeEach(() => {
        gotoWords(cy);
    });

    // 动态为每个权威词典创建一个测试用例
    let rmd_dict = getRecommendedDictionaries();
    let dict = rmd_dict[0];
    runDictTest(dict);
});

context('操作：打勾', () => {
    const dictCount = 6; // 根据你的测试，这里有6个词典
    beforeEach(() => {
        gotoWords(cy);
    });

    runPassTest('打勾两次，切换下一个单词', '[data-test="pass-btn"]');

    it('点击20次打勾按钮，出现完成弹窗', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="pass-btn"]').click();
            cy.get('[data-test="pass-btn"]').click();
        }
        cy.get('[data-test="finish-modal"]').should('be.visible');
        // cy.get('[data-test="finish-btn"]').click();
        // cy.get('[data-test="home-btn"]').click();
    });
    it.only('点击20次打勾按钮，出现完成弹窗，【继续下一组】按钮', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="pass-btn"]').click();
            cy.get('[data-test="pass-btn"]').click();
        }
        cy.get('[data-test="finish-modal"]').should('be.visible');
        cy.get('[data-test="finish-btn"]').click();
        // 还是再当前页面
        cy.location('hash').should('include', '/words');
        // cy.get('[data-test="home-btn"]').click();
    });
    it.only('点击20次打勾按钮，出现完成弹窗，【返回首页】按钮', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="pass-btn"]').click();
            cy.get('[data-test="pass-btn"]').click();
        }
        cy.get('[data-test="finish-modal"]').should('be.visible');
        cy.get('[data-test="home-btn"]').click();
        // 还是再当前页面
        cy.location('hash').should('not.include', '/words');
    });
});



context.only('操作：打叉', () => {
    const dictCount = 6; // 根据你的测试，这里有6个词典
    beforeEach(() => {
        gotoWords(cy);
    });

    runPassTest('打勾两次，切换下一个单词', '[data-test="fail-btn"]');

    it('点击20次打勾按钮，出现完成弹窗', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-test="fail-btn"]').click();
            cy.get('[data-test="fail-btn"]').click();
        }
        cy.get('[data-test="finish-modal"]').should('not.be.visible');
        // cy.get('[data-test="finish-btn"]').click();
        // cy.get('[data-test="home-btn"]').click();
    });
});

function runPassTest(itText, passSelector) {
    it(itText, () => {
        cy.get('.is-current .word-en')
            .invoke('text')
            .then(origin_word_en => {
                cy.get(passSelector).click();
                cy.get(passSelector).click();
                cy.get('.is-current .word-en')
                    .invoke('text')
                    .should('not.equal', origin_word_en);
            });
    });
}

function runDictTest(dict) {
    it(`权威词典 ${dict}：打开词典`, () => {
        // 点击第 i 个词典按钮
        cy.get('.is-current [data-test="dict-btn-' + dict + '"]').click();
    });
    it(`权威词典${dict}：刷新词典`, () => {
        cy.get('.is-current  [data-test="dict-btn-' + dict + '"]').click();
        // 点击第 i 个词典按钮
        cy.get('[data-test="refresh-btn"]').click();
    });
    it(`权威词典${dict}：取消加载`, () => {
        cy.get('.is-current  [data-test="dict-btn-' + dict + '"]').click();
        // 点击第 i 个词典按钮
        cy.get('[data-test="cancel-load-btn"]').click();
    });
    it(`权威词典${dict}：关闭词典`, () => {
        cy.get('.is-current  [data-test="dict-btn-' + dict + '"]').click();
        cy.get('[data-test="close-btn"]').click();
    });
    it(`权威词典${dict}：点击遮罩关闭词典`, () => {
        cy.get('.is-current  [data-test="dict-btn-' + dict + '"]').click();
        cy.get('[data-test="iframe-modal-overlay"]').click();
    });
}

function gotoWords(cy) {
    cy.visit('/');
    cy.get('[data-test="primary"]').click();
}
