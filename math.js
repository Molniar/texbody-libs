// ============================================================
// TexBody^^ Library: math
// Математические функции
// Версия: 1.0.0
// ============================================================

window.math = {
    // ===== Скалярные (принимают число) =====
    sqrt: (x) => { if (x < 0) throw new Error(`sqrt(${x}): отрицательное`); return Math.sqrt(x); },
    cbrt: (x) => Math.cbrt(x),
    pow: (b, e) => Math.pow(b, e),
    abs: (x) => Math.abs(x),
    sign: (x) => Math.sign(x),
    round: (x) => Math.round(x),
    floor: (x) => Math.floor(x),
    ceil: (x) => Math.ceil(x),
    trunc: (x) => Math.trunc(x),
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => Math.tan(x),
    asin: (x) => Math.asin(x),
    acos: (x) => Math.acos(x),
    atan: (x) => Math.atan(x),
    atan2: (y, x) => Math.atan2(y, x),
    log: (x) => Math.log(x),
    log10: (x) => Math.log10(x),
    log2: (x) => Math.log2(x),
    exp: (x) => Math.exp(x),
    toRadians: (deg) => deg * Math.PI / 180,
    toDegrees: (rad) => rad * 180 / Math.PI,

    // ===== Пакетные (принимают Pack как массив) =====
    sum: (arr) => arr.reduce((a, b) => a + b, 0),
    avg: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
    max: (arr) => Math.max(...arr),
    min: (arr) => Math.min(...arr),
    median: (arr) => {
        const s = [...arr].sort((a, b) => a - b);
        const m = Math.floor(s.length / 2);
        return s.length % 2 !== 0 ? s[m] : (s[m - 1] + s[m]) / 2;
    },
    hypot: (arr) => Math.hypot(...arr),

    // ===== Утилиты =====
    clamp: (x, min, max) => Math.min(Math.max(x, min), max),
    lerp: (a, b, t) => a + (b - a) * t,

    // ===== Константы =====
    PI: Math.PI,
    E: Math.E,
    TAU: Math.PI * 2,
};