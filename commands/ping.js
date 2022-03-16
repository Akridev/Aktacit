const Discord = require('discord.js')
var client = new Discord.Client()

module.exports = {
    name: 'ping',
    description: "this is a ping command",
    execute(message,args) {
        message.channel.send('Doing quik mafs...').then(Rm=>{
            const p = Rm.createdTimestamp - message.createdTimestamp
            Rm.delete(5000)
            message.channel.send(`Bot Latency: ${p}ms`);
        });
        
    }
}