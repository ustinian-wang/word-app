let clicked = false;
let clickHandler = () => {
    clicked = true;
    document.removeEventListener('mousedown', clickHandler);
};
document.addEventListener('mousedown', clickHandler);

export function callAudioPlay(audio) {
    if (!clicked) {
        return;
    }
    audio.play();
}

export function playAudio(url) {
    createAudioPlay(url);
}

export function playHandsup() {
    playAudio(import.meta.env.BASE_URL + '/audio/handsup.wav');
}

export function playNice() {
    playAudio(import.meta.env.BASE_URL + '/audio/nice.wav');
}

export function playOhno() {
    playAudio(import.meta.env.BASE_URL + '/audio/ohno.wav');
}
export function playRight() {
    playAudio(import.meta.env.BASE_URL + '/audio/right.wav');
}
let lastAudio = null;
export function createAudioPlay(url, resolve=()=>{}) {
    if (!clicked) {
        resolve(true);
        return;
    }
    const audio = new Audio(url);
    if (lastAudio) {
        lastAudio?.pause();
        lastAudio?.remove();
    }
    lastAudio = audio;
    audio.onended = () => {
        resolve(true);
    };
    audio.onerror = err => {
        console.error(err);
        resolve(false);
    };
    audio.play();
}
