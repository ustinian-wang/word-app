import VConsole from 'vconsole';

let instance = new VConsole();

instance.hideSwitch();

export function displayVConsole(open) {
    if (open) {
        instance.showSwitch();
    } else {
        instance.hideSwitch();
    }
}

export function showVConsole() {
    instance.showSwitch();
}

export function hideVConsole() {
    instance.hideSwitch();
}

export function toggleVConsole() {
    instance.toggleSwitch();
}

export function destroyVConsole() {
    instance.destroy();
}