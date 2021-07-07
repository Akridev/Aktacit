module.exports = {
    name: 'thancc',
    description: "thanks user in a random language",
    execute(message,args) {
        var rng = Math.floor(Math.random()*13 +1);
        var language,thank;
        const mem = message.mentions.users.first();
        switch(rng) {
            case 1 : language = 'English',thank = 'thanks';
            break;
            case 2 : language = 'Mandarin',thank = 'xièxiè';
            break;
            case 3 : language = 'Hindi', thank = 'dhanyavaad';
            break;
            case 4 : language = 'Spanish', thank = 'gracias';
            break;
            case 5 : language = 'French', thank = 'merci mon pote';
            break;
            case 6 : language = 'Malay', thank = 'terima kasih'
            break;
            case 7 : language = 'Arabic', thank = 'shukrana';
            break;
            case 8 : language = 'Russian', thank = 'blagodarnost\'';
            break;
            case 9 : language = 'Portuguese', thank = 'obrigada';
            break;
            case 10 : language = 'Tamil', thank = 'nandri';
            break;
            case 11 : language = 'Italian', thank = 'grazie';
            break;
            case 12 : language = 'Japanese', thank = 'arigatōgozaimashita';
            break;
            default : language = 'Swedish', thank = 'tack kompis';
        }
        if (mem == 859494412580421652) {
            message.channel.send('No need to thank me blud')
        } else if (mem == message.author.id) {
            message.channel.send('Bruv <@' + message.author.id + '> Why are you thanccing yourself, are you gay?')
        }else if (mem == null) {
            message.channel.send('<@' + message.author.id + '> Who are you thanccing??');
        } else {
            message.channel.send('Ah ' + thank + ' <@' + mem + '> (' + language + ')');
        }
    }
}