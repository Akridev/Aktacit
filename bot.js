const Discord = require('discord.js');
const {Client , MessageEmbed} = require('discord.js');
const client = new Client();
snipes = new Discord.Collection()
const cron = require('cron');


const prefix = "$";

client.on('ready', () => {
    console.log("I'm Online init")
    let scheduledMessage = new cron.CronJob('10 23 04,18 * * *', () => {
        // This runs every day at 10:30:00, you can do anything you want
        // Specifing your guild (server) and your channel
           const guild = client.guilds.cache.get('859498219116298261');
           const channel = guild.channels.cache.get('859498219779915801');
           channel.send('🕠💯💯💯');
        });
              
          // When you want to start it, use:
          scheduledMessage.start()
      
});




client.on('messageDelete',message=>{
    if(message.author.id !='712993507542958080' && message.author.id !='358623095428349955' && message.author.id !='859494412580421652' && !(message.content.startsWith('$hm'))){
        snipes.set(message.channel.id,message)
        const LogChannel = client.channels.cache.get('863477491603079197')
        const DeletedEmbed = new Discord.MessageEmbed()
            .setTitle('Deleted Message')
            .addField('Deleted by',`${message.author}-${message.author.id}`)
            .addField('In', `${message.channel}`)
            .addField('Content', `${message.content}`)
            .setThumbnail(message.author.avatarURL({dynamic: true}))
            .setTimestamp()
        LogChannel.send(DeletedEmbed)
    }
})

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command=require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

var nice =['69','420','4.20','369','69420','42069']
const isNice = (element) => message.content==element;

client.on('message', message=> {
    if(!message.content.startsWith(prefix) || message.author.bot ) {
        return;
    } 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command=args.shift().toLowerCase();

    if (command == 'ping'){
        client.commands.get('ping').execute(message, args);
    
    }else if (command == 'wagwan'){
        client.commands.get('wagwan').execute(message, args);
    } else if (command == 'gaycheck' || command == 'gc') {
        client.commands.get('gaycheck' || command == 'gc').execute(message, args);
    } else if (command == 'id') {
        client.commands.get('id').execute(message, args);
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command == 'commands') {
        client.commands.get('commands').execute(message, args);
    } else if (command == 'mad') {
        client.commands.get('mad').execute(message, args);
    } else if (command == 'thancc') {
        client.commands.get('thancc').execute(message, args);
    } else if (command == 'insult') {
        client.commands.get('insult').execute(message, args);
    } else if (command == 'hangman' || command == 'hm') {
        client.commands.get('hangman' || 'hm').execute(message, args);
    } else if (command == 'stopprocrastination' || command == 'stopp') {
        client.commands.get('stopprocrastination' || 'stopp').execute(message, args);
    } else if (command == 'weather' || command == 'w') {
        client.commands.get('weather' || 'w').execute(message, args);
    } else if (command == 'bruhmoment' || command == 'bm') {
        client.commands.get('bruhmoment' || 'bm').execute(message, args);
    }

    
    
        if (message.content === 'flick') {
            message.react('👌')
                .then(() => message.react('😂'))
                .then(() => message.react('🔥'))
                .then(() => message.react('💯'))
                .catch(error => console.error('One of the emojis failed to react:', error));
        }

});


client.login(process.env.token);
