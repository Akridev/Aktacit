module.exports = {
    name: 'id',
    description: 'returns id of mentioned user',
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member == null) {
            message.channel.send('uhh, can you mention the person whose id u wan get?')
        } else if (member != null) {
            message.channel.send('<@'+ member + '>\'s id : ' + member)
        }
    }
}