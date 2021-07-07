module.exports = {
    name: 'insult',
    description: "insults mentioned user with various insults",
    execute(message,args) {
        var rng = Math.floor(Math.random()*12 +1);
        var insult;
        const mem = message.mentions.users.first();
        switch(rng) {
            case 1 : insult = '';
            break;
            case 2 : insult = '';
            break;
            case 3 : insult = '';
            break;
            case 4 : insult = '';
            break;
            case 5 : insult = '';
            break;
            case 6 : insult = ''
            break;
            case 7 : insult = '';
            break;
            case 8 : insult = '';
            break;
            case 9 : insult = '';
            break;
            case 10 : insult = '';
            break;
            case 11 : insult = '';
            break;
            case 12 : insult = '';
            break;
            case 13 : insult = '';
        }
    }
}