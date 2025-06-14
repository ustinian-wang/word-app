export function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}

export function playHandsup() {
    playAudio('/word-app/audio/handsup.wav');
}

export function playNice() {
    playAudio('/word-app/audio/nice.wav');
}

export function playOhno() {
    playAudio('/word-app/audio/ohno.wav');
}