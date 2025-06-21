function generateUniqueId() {
    return `test-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export const test = {
    bind(el, binding) {
        const testId = binding.value || generateUniqueId();
        el.setAttribute('data-test', testId);
    }
}; 