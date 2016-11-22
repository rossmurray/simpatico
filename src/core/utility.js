export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export function distance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
}

export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function scale(value, min, max) {
    const delta = max - min;
    const result = value * delta + min;
    return result;
}

export function scaleFrom(value, valueMin, valueMax, newMin, newMax) {
    const oldDelta = valueMax - valueMin;
    const newDelta = newMax - newMin;
    //difference in scale between old range and new range
    const ratio = newDelta / oldDelta;
    //shift the value so zero is the min, then scale by the ratio, then shift to the new min.
    const result = (value - valueMin) * ratio + newMin;
    return result;
}