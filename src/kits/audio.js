export function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
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