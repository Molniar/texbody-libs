// ============================================================
// TexBody^^ Library: strings
// Работа с текстом: регистр, поиск, замена, форматирование
// Версия: 1.0.0
// Автор: TexBody^^ Community
// Лицензия: MIT
// ============================================================

window.strings = {

    // ============================================================
    // 🔤 РЕГИСТР
    // ============================================================

    // strings.upper."привет"! → "ПРИВЕТ"
    upper: (s) => String(s).toUpperCase(),

    // strings.lower."ПРИВЕТ"! → "привет"
    lower: (s) => String(s).toLowerCase(),

    // strings.capitalize."привет мир"! → "Привет мир"
    capitalize: (s) => {
        s = String(s);
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    },

    // strings.title."привет мир"! → "Привет Мир"
    title: (s) => String(s).split(' ').map(w =>
        w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    ).join(' '),

    // ============================================================
    // 📏 ДЛИНА И ПРОВЕРКИ
    // ============================================================

    // strings.length."hello"! → 5
    length: (s) => String(s).length,

    // strings.isEmpty.""! → yes
    isEmpty: (s) => String(s).length === 0,

    // strings.contains."hello"."ell"! → yes
    contains: (s, sub) => String(s).includes(String(sub)),

    // strings.startsWith."hello"."he"! → yes
    startsWith: (s, prefix) => String(s).startsWith(String(prefix)),

    // strings.endsWith."hello"."lo"! → yes
    endsWith: (s, suffix) => String(s).endsWith(String(suffix)),

    // strings.isNumeric."12345"! → yes
    isNumeric: (s) => /^-?\d+(\.\d+)?$/.test(String(s)),

    // strings.isEmail."test@example.com"! → yes
    isEmail: (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s)),

    // ============================================================
    // ✂️ ОБРЕЗКА
    // ============================================================

    // strings.trim."  hi  "! → "hi"
    trim: (s) => String(s).trim(),

    // strings.trimLeft."  hi  "! → "hi  "
    trimLeft: (s) => String(s).trimStart(),

    // strings.trimRight."  hi  "! → "  hi"
    trimRight: (s) => String(s).trimEnd(),

    // strings.substring."hello".1.4! → "ell"
    substring: (s, from, to) => String(s).substring(from, to),

    // strings.charAt."hello".1! → "e"
    charAt: (s, index) => {
        s = String(s);
        if (index < 0) index = s.length + index;
        return s.charAt(index);
    },

    // strings.first."hello".3! → "hel"
    first: (s, n) => String(s).slice(0, n),

    // strings.last."hello".3! → "llo"
    last: (s, n) => String(s).slice(-n),

    // ============================================================
    // 🔍 ПОИСК
    // ============================================================

    // strings.indexOf."hello"."l"! → 2
    indexOf: (s, sub) => String(s).indexOf(String(sub)),

    // strings.lastIndexOf."hello"."l"! → 3
    lastIndexOf: (s, sub) => String(s).lastIndexOf(String(sub)),

    // strings.count."banana"."a"! → 3
    count: (s, sub) => String(s).split(String(sub)).length - 1,

    // ============================================================
    // 🔄 ЗАМЕНА
    // ============================================================

    // strings.replace."a-b-c"."-"."_"! → "a_b_c"
    replace: (s, from, to) => String(s).split(String(from)).join(String(to)),

    // strings.replaceFirst."a-b-c"."-"."_"! → "a_b-c"
    replaceFirst: (s, from, to) => String(s).replace(String(from), String(to)),

    // ============================================================
    // 🔗 РАЗБИЕНИЕ И СКЛЕЙКА
    // ============================================================

    // strings.split."a,b,c".,! → Pack<a,b,c>
    split: (s, sep) => {
        const parts = String(s).split(String(sep));
        return (typeof Pack !== 'undefined') ? new Pack(parts) : parts;
    },

    // strings.splitLines."a\nb\nc"! → Pack<a,b,c>
    splitLines: (s) => {
        const parts = String(s).split(/\r?\n/);
        return (typeof Pack !== 'undefined') ? new Pack(parts) : parts;
    },

    // strings.splitWords."hello world tex"! → Pack<hello,world,tex>
    splitWords: (s) => {
        const parts = String(s).split(/\s+/).filter(w => w.length > 0);
        return (typeof Pack !== 'undefined') ? new Pack(parts) : parts;
    },

    // strings.join.Pack<a,b,c>."-"! → "a-b-c"
    join: (arr, sep) => {
        if (!Array.isArray(arr)) throw new Error('join: ожидается Pack');
        return arr.join(String(sep));
    },

    // ============================================================
    // 🎨 ФОРМАТИРОВАНИЕ
    // ============================================================

    // strings.reverse."abc"! → "cba"
    reverse: (s) => String(s).split('').reverse().join(''),

    // strings.repeat."ab".3! → "ababab"
    repeat: (s, n) => String(s).repeat(n),

    // strings.padLeft."5".3."0"! → "005"
    padLeft: (s, len, ch) => String(s).padStart(len, String(ch || ' ')),

    // strings.padRight."5".3."0"! → "500"
    padRight: (s, len, ch) => String(s).padEnd(len, String(ch || ' ')),

    // strings.center."hi".6."-"! → "--hi--"
    center: (s, len, ch) => {
        s = String(s);
        ch = String(ch || ' ');
        const total = len - s.length;
        if (total <= 0) return s;
        const left = Math.floor(total / 2);
        const right = total - left;
        return ch.repeat(left) + s + ch.repeat(right);
    },

    // ============================================================
    // 🧰 УТИЛИТЫ
    // ============================================================

    // strings.removeSpaces."a b c"! → "abc"
    removeSpaces: (s) => String(s).replace(/\s+/g, ''),

    // strings.onlyDigits."a1b2c3"! → "123"
    onlyDigits: (s) => String(s).replace(/\D/g, ''),

    // strings.onlyLetters."a1b2c3"! → "abc"
    onlyLetters: (s) => String(s).replace(/[^a-zA-Zа-яА-Я]/g, ''),

    // strings.slug."Hello World!"! → "hello-world"
    slug: (s) => String(s)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, ''),

    // strings.truncate."Длинный текст".7."..."! → "Длинный..."
    truncate: (s, maxLen, suffix) => {
        s = String(s);
        suffix = String(suffix || '...');
        if (s.length <= maxLen) return s;
        return s.slice(0, maxLen - suffix.length) + suffix;
    },

};
