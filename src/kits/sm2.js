export function getDefaultSM2() {
    return {
        EF: 2.5,
        interval: 0,
        repetitions: 0
    };
}

export function updateBinarySM2({ EF, interval, repetitions }, correct) {
    if (!correct) {
        repetitions = 0;
        interval = 1;
        EF = Math.max(1.3, EF - 0.2); // 降低 EF
    } else {
        repetitions += 1;
        if (repetitions === 1) interval = 1;
        else if (repetitions === 2) interval = 6;
        else interval = Math.round(interval * EF);

        EF = Math.min(2.5, EF + 0.1); // 稍微提升 EF
    }

    return { EF, interval, repetitions };
}
