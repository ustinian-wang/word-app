// 键盘指令
export const keyboard = {
    bind(el, binding, vnode) {
        const vm = vnode.context;
        const { value } = binding;
        
        const handleKeyDown = (e) => {
            if (!value) return;
            
            // 支持单个按键或按键数组
            const keys = Array.isArray(value) ? value : [value];
            
            for (const { key, handler } of keys) {
                if (key && handler && e.key === key) {
                    e.preventDefault(); // 防止默认行为
                    handler.call(vm);
                    break;
                }
            }
        };

        el._keyboardHandler = handleKeyDown;
        window.addEventListener('keydown', handleKeyDown);
    },
    
    unbind(el) {
        window.removeEventListener('keydown', el._keyboardHandler);
        delete el._keyboardHandler;
    }
};

// 左方向键指令
export const keyboardLeft = {
    bind(el, binding, vnode) {
        const vm = vnode.context;
        
        const handleKeyDown = (e) => {
            if (vm.isAnimating || vm.learningQueue.length === 0) return;
            
            if (e.key === 'ArrowLeft') {
                // 向左切换，显示上一个单词
                if (vm.currentIdx > 0) {
                    vm.currentIdx--;
                } else {
                    // 如果是第一个单词，循环到最后一个
                    vm.currentIdx = vm.learningQueue.length - 1;
                }
                vm.revealedSet.clear();
                vm.afterChange();
            }
        };

        el._keyboardLeftHandler = handleKeyDown;
        window.addEventListener('keydown', handleKeyDown);
    },
    
    unbind(el) {
        window.removeEventListener('keydown', el._keyboardLeftHandler);
        delete el._keyboardLeftHandler;
    }
};

// 右方向键指令
export const keyboardRight = {
    bind(el, binding, vnode) {
        const vm = vnode.context;
        
        const handleKeyDown = (e) => {
            if (vm.isAnimating || vm.learningQueue.length === 0) return;
            
            if (e.key === 'ArrowRight') {
                // 向右切换，显示下一个单词
                if (vm.currentIdx < vm.learningQueue.length - 1) {
                    vm.currentIdx++;
                } else {
                    // 如果是最后一个单词，循环到第一个
                    vm.currentIdx = 0;
                }
                vm.revealedSet.clear();
                vm.afterChange();
            }
        };

        el._keyboardRightHandler = handleKeyDown;
        window.addEventListener('keydown', handleKeyDown);
    },
    
    unbind(el) {
        window.removeEventListener('keydown', el._keyboardRightHandler);
        delete el._keyboardRightHandler;
    }
}; 