// ============================================================
// TexBody^^ Library: math
// Математические функции
// Версия: 1.0.0
// ============================================================

window.math = {
    // ===== Базовое =====
    sqrt: (x) => {
        if (x < 0) throw new Error(`sqrt(${x}): отрицательное число`);
        return Math.sqrt(x);
    },
    cbrt: (x) => Math.cbrt(x),
    pow: (base, exp) => Math.pow(base, exp),
    abs: (x) => Math.abs(x),
    sign: (x) => Math.sign(x),

    // ===== Округление =====
    round: (x) => Math.round(x),
    floor: (x) => Math.floor(x),
    ceil: (x) => Math.ceil(x),
    trunc: (x) => Math.trunc(x),

    // ===== Тригонометрия =====
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => Math.tan(x),
    asin: (x) => Math.asin(x),
    acos: (x) => Math.acos(x),
    atan: (x) => Math.atan(x),
    atan2: (y, x) => Math.atan2(y, x),

    // ===== Логарифмы и степени =====
    log: (x) => Math.log(x),         // натуральный
    log10: (x) => Math.log10(x),
    log2: (x) => Math.log2(x),
    exp: (x) => Math.exp(x),

    // ===== Статистика (работа с Pack) =====
    sum: (arr) => arr.reduce((a, b) => a + b, 0),
    avg: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
    max: (arr) => Math.max(...arr),
    min: (arr) => Math.min(...arr),
    median: (arr) => {
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2;
    },

    // ===== Полезное =====
    hypot: (...args) => Math.hypot(...args),         // √(x²+y²+...)
    clamp: (x, min, max) => Math.min(Math.max(x, min), max),
    lerp: (a, b, t) => a + (b - a) * t,
    toRadians: (deg) => deg * Math.PI / 180,
    toDegrees: (rad) => rad * 180 / Math.PI,

    // ===== Константы =====
    PI: Math.PI,
    E: Math.E,
    TAU: Math.PI * 2,
    INFINITY: Infinity,
    NAN: NaN,
};