let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [083129083971]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [083139083971]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
