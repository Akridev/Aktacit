module.exports = {
    name: 'gaycheck' || 'gc' ,
    description: 'tells person if they are gay or not',
    execute(message, args) {
        var rng = Math.floor(Math.random()*100000000000 +1);
        var randomNum=Math.floor(Math.random()*100 +1);
        const member = message.mentions.users.first();
        if (member == 712993507542958080 || member == 358623095428349955){
            message.channel.send('Bruh <@' + message.author.id + '> My creator <@' + member + '> isn\'t gay, get that in your mind aight? You dun wanna be catching these hands init');
        } else if (member == 859494412580421652){
            message.channel.send('Bruh <@' + message.author.id + '> I am the only non-gay bot out there fam no cap.On the stinky hand tho, all the other bots are gay to some extent.')
        }else if (rng <=50000000000) {
            if (member == null) {
                message.channel.send('<@' + message.author.id + '> Yes, you are indeed ' + randomNum + '% gay, get out');
            } else if (member != null){
                message.channel.send('<@' + member + '> is indeed ' + randomNum + '% gay, be weary of that man');
            }
        }else {
            if (member == null) {
                message.channel.send('<@' + message.author.id + '> Nah fam you\'re not gay, you\'re ' + randomNum + '% halal blud');
            } else if (member != null){
                message.channel.send('<@' + member + '> is not gay fam, mans certified ' + randomNum + '% halal init');
            }
        }
    }
}