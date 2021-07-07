module.exports = {
    name: 'stopprocrastination' || 'stopp' ,
    description: "selects a random message to tell the user to stop procrastinating",
    execute(message,args) {
        var rng = Math.floor(Math.random()*13 +1);
        var msg;
        switch(rng) {
            case 1 : msg="Oi stop procrastinating like one cb dog leh";
            break;
            case 2 : msg="Lol when do you plan on completing your tings ah? After waiting for me to give you a stepsister so that you can go and fk her?";
            break;
            case 3 : msg="Bruh go do your shit fam, are you mad bruv get outta dc blud";
            break;
            case 4 : msg="N1g can you get off pr0nhub and study";
            break;
            case 5 : msg="\"I will procrastinate later\"-A dumbass n1glet";
            break;
            case 6 : msg="Why are you wasting your time reading this message instead of actually doing something smh";
            break;
            case 7 : msg="Imagine using this command just to procrastinate more";
            break;
            case 8 : msg="Lmfao bro just go and do your shit already";
            break;
            case 9 : msg="\"The greatest amount of time _wasted_ is the time not getting started\"~A wise man";
            break;
            case 10 : msg="If you don\'t start your work after reading this, you are certified gay";
            break;
            case 11 : msg="bruhmomentJustbruhmomentGobruhmomentAndbruhmomentDobruhmomentYourbruhmomentTingsbruhmomentBruvbruhmoment";
            break;
            case 12 : msg="Keep procrastinating fam";
            break;
            default : msg="Ah where has this command led you to? Back to me";
        }
        message.channel.send('<@' + message.author.id + '>' + " " + msg)
    }
}