const Discord = require("discord.js")

module.exports = {
    name: 'bruhmoment' || 'bm',
    description: "use this to emphasise a bruhmoment",
    execute(message,args) {
        var bm = ["bruh1.gif","bruh2.gif","bruh3.gif","bruh4.gif","bruh5.gif","bruh6.gif","bruh7.gif","bruh8.gif","bruh9.gif","bruh10.gif","bruh11.gif","bruh12.gif","bruh13.gif","bruh14.gif","bruh15.gif","bruh16.gif","bruh17.gif","bruh18.gif","bruh19.gif","bruh20.gif","bruh21.gif","bruh22.gif","bruh23.gif"]
        var rng = Math.floor(Math.random()*bm.length)
        const mem = message.mentions.users.first();
        if (mem == null) return message.channel.send(message.author , {files: ['./bruhgifs/' + bm[rng]]})
        if (mem != null) return message.channel.send(mem , {files: ['./bruhgifs/' + bm[rng]]})
    }
}