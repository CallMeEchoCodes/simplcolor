module.exports = {
    black: function (text) { return `\x1b[30m${text}\x1b[0m` },
    red: function (text) { return `\x1b[31m${text}\x1b[0m` },
    green: function (text) { return `\x1b[32m${text}\x1b[0m` },
    yellow: function (text) { return `\x1b[33m${text}\x1b[0m` },
    blue: function (text) { return `\x1b[34m${text}\x1b[0m` },
    magenta: function (text) { return `\x1b[35m${text}\x1b[0m` },
    cyan: function (text) { return `\x1b[36m${text}\x1b[0m` },
    white: function (text) { return `\x1b[37m${text}\x1b[0m` },

    grey: function (text) { return `\x1b[90m${text}\x1b[0m` },
    brightRed: function (text) { return `\x1b[91m${text}\x1b[0m` },
    brightGreen: function (text) { return `\x1b[92m${text}\x1b[0m` },
    brightYellow: function (text) { return `\x1b[93m${text}\x1b[0m` },
    brightBlue: function (text) { return `\x1b[94m${text}\x1b[0m` },
    brightMagenta: function (text) { return `\x1b[95m${text}\x1b[0m` },
    brightCyan: function (text) { return `\x1b[96m${text}\x1b[0m` },
    brightWhite: function (text) { return `\x1b[97m${text}\x1b[0m` },

    bgBlack: function (text) { return `\x1b[40m${text}\x1b[0m` },
    bgRed: function (text) { return `\x1b[41m${text}\x1b[0m` },
    bgGreen: function (text) { return `\x1b[42m${text}\x1b[0m` },
    bgYellow: function (text) { return `\x1b[43m${text}\x1b[0m` },
    bgBlue: function (text) { return `\x1b[44m${text}\x1b[0m` },
    bgMagenta: function (text) { return `\x1b[45m${text}\x1b[0m` },
    bgCyan: function (text) { return `\x1b[46m${text}\x1b[0m` },
    bgWhite: function (text) { return `\x1b[47m${text}\x1b[0m` },

    bgGrey: function (text) { return `\x1b[100m${text}\x1b[0m` },
    bgBrightRed: function (text) { return `\x1b[101m${text}\x1b[0m` },
    bgBrightGreen: function (text) { return `\x1b[102m${text}\x1b[0m` },
    bgBrightYellow: function (text) { return `\x1b[103m${text}\x1b[0m` },
    bgBrightBlue: function (text) { return `\x1b[104m${text}\x1b[0m` },
    bgBrightMagenta: function (text) { return `\x1b[105m${text}\x1b[0m` },
    bgBrightCyan: function (text) { return `\x1b[106m${text}\x1b[0m` },
    bgBrightWhite: function (text) { return `\x1b[107m${text}\x1b[0m` },

    bold: function (text) { return `\x1b[1m${text}\x1b[22m` },
    italic: function (text) { return `\x1b[3m${text}\x1b[23m` },
    underline: function (text) { return `\x1b[4m${text}\x1b[24m` },
    inverse: function (text) { return `\x1b[7m${text}\x1b[27m` },
    strikethrough: function (text) { return `\x1b[9m${text}\x1b[29m` },
    dim: function (text) { return `\x1b[2m${text}\x1b[22m` },
}