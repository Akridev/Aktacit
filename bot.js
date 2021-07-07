const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "$";

client.once('ready', () => {
    console.log("I'm Online init")
});

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
    if(!message.content.startsWith(prefix) || message.author.bot || !message.content == '69') {
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

});


























client.login(process.env.token);
