
const Discord = require('discord.js')



module.exports = {
    name: 'hangman' || 'hm',
    description: "use this to emphasise a bruhmoment",
    async execute(message, args) {
        //const emojiMapping = {"A":'🇦',"B":'🇧',"C":'🇨',"D":'🇩',"E":'🇪',"F":'🇫',"G":'🇬',"H":'🇭',"I":'🇮',"J":'🇯',"K":'🇰',"L":'🇱',"M":'🇲',"N":'🇳',"O":'🇴',"P":'🇵',"Q":'🇶',"R":'🇷',"S":'🇸',"T":'🇹',"U":'🇺',"V":'🇻',"W":'🇼',"X":'🇽',"Y":'🇾',"Z":'🇿'};
        const emojiMapping = new Map([
            ["🅰️", "A"],
            ["🇦", "A"],
            ["🅱️", "B"],
            ["🇧", "B"],
            ["🇨", "C"],
            ["🇩", "D"],
            ["🇪", "E"],
            ["🇫", "F"],
            ["🇬", "G"],
            ["🇭", "H"],
            ["ℹ️", "I"],
            ["🇮", "I"],
            ["🇯", "J"],
            ["🇰", "K"],
            ["🇱", "L"],
            ["Ⓜ️", "M"],
            ["🇲", "M"],
            ["🇳", "N"],
            ["🅾️", "O"],
            ["⭕", "O"],
            ["🇴", "O"],
            ["🅿️", "P"],
            ["🇵", "P"],
            ["🇶", "Q"],
            ["🇷", "R"],
            ["🇸", "S"],
            ["🇹", "T"],
            ["🇺", "U"],
            ["🇻", "V"],
            ["🇼", "W"],
            ["✖️", "X"],
            ["❎", "X"],
            ["❌", "X"],
            ["🇽", "X"],
            ["🇾", "Y"],
            ["💤", "Z"],
            ["🇿", "Z"],
        ]);
        let keys = Object.keys(emojiMapping);
        let vals = Object.values(emojiMapping);

        //var letter = ['🇦','🇧'...] --> vals
        var guessed=[];
        
        var words = ['bruh', 'nigga', 'thicc', 'motherchod', 'bhaji', 'bob','minecraft']
        var rng = Math.floor(Math.random()*words.length);
        var chosen = words[rng].toUpperCase;
        var str = '';
        const int = parseInt(chosen.length);
        for (let i = 0;i<int;i++) {

            str +='‗‗ ';
        }
        
        function step() {
            if (this.embed.deleted) {
                this.gameOver({ result: 'message deleted' });
                return;
            }
            this.waitForReaction();
        }
        function filter(reaction, user) {
            if (this.reactions.includes(reaction.emoji.name)) {
                if (this.player1Turn && user.id === this.gameStarter.id)
                    return true;
                if (!this.player1Turn && this.player2 != null && user.id === this.player2.id)
                    return true;
                if (!this.player1Turn && this.player2 === null && user.id === this.gameStarter.id)
                    return true;
            }
            return false;
        }
        
        // function waitForReaction() {
        //     this.gameEmbed.awaitReactions((reaction, user) => this.filter(reaction, user), { max: 1, time: 60000, errors: ['time'] })
        //         .then(collected => {
        //         const reaction = collected.first();
        //         if (reaction !== undefined)
        //             this.onReaction(reaction);
        //     })
        //         .catch(error => {
        //         if (!this.inGame)
        //             return;
        //         if (!this.gameEmbed || this.gameEmbed.deleted)
        //             this.gameOver({ result: ResultType.DELETED });
        //         else if (error instanceof Collection)
        //             this.gameOver({ result: ResultType.TIMEOUT });
        //         else
        //             this.gameOver({ result: ResultType.ERROR, error: error });
        //     });
        // }
        // function handleError(e, perm) {
        //     if (e instanceof DiscordAPIError && this.gameEmbed != null) {
        //         const de = e;
        //         switch (de.code) {
        //             case 10003:
        //                 this.gameOver({ result: ResultType.ERROR, error: "Channel not found!" });
        //                 break;
        //             case 10008:
        //                 this.gameOver({ result: ResultType.DELETED, error: "Message was deleted!" });
        //                 break;
        //             case 50001:
        //                 this.gameEmbed.channel.send(`The bot is missing access to preform some of it's actions!`).catch(err => {
        //                     console.log("Error in the access error handler!");
        //                 });
        //                 this.gameOver({ result: ResultType.ERROR, error: "Missing access!" });
        //                 break;
        //             case 50013:
        //                 this.gameEmbed.channel.send(`The bot is missing the '${perm}' permissions it needs order to work!`).catch(err => {
        //                     console.log("Error in the permission error handler!");
        //                 });
        //                 this.gameOver({ result: ResultType.ERROR, error: "Missing permissions!" });
        //                 break;
        //             default:
        //                 console.log("Encountered a Discord error not handled! ");
        //                 console.log(e);
        //                 break;
        //         }
        //     }
        // function makeGuess(reaction) {
        //     if (emojiMapping.has(reaction)) {
        //         const letter = emojiMapping.get(reaction);
        //         if (letter === undefined)
        //             return;
        //         if (!this.guessed.includes(letter)) {
        //             this.guessed.push(letter);
        //             if (this.word.indexOf(letter) == -1) {
        //                 this.wrongs++;
        //                 if (this.wrongs == 6) {
        //                     this.gameOver({ result: ResultType.LOSER, name: this.gameStarter.username, score: this.word });
        //                     return;
        //                 }
        //             }
        //             else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
        //                 this.gameOver({ result: ResultType.WINNER, name: this.gameStarter.username, score: this.word });
        //                 return;
        //             }
        //         }
        //     }
        //     this.step();
        // }
        // var hm = '=====================\n\n\n\t\t\t\t+------------------+\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t\t\t\t\t\t\t\t\t\t\t\t |\n\t====================';
        // const embed = new Discord.MessageEmbed()
        // .setTitle('HANGMAN')
        // .setDescription('Guess the word init')
        // .addField(hm, '\n\n\n' + str)
        // .addField('Letters Guessed', this.guessed.length == 0 ? '\u200b' : this.guessed.join(" "))
        // .setFooter('Game started by '+ message.author)

        
        // let msg = await message.channel.send(embed)

        
        // const filter = (reaction) => {
        //     return vals.includes(reaction.emoji.name);
        // };
        
        // const editEmbed = new Discord.MessageEmbed()
        //     .setColor(0x111111)
        //     .setTitle('HANGMAN')
        //     .setDescription('Guess the word init')
        //     .addField(hm, '\n\n\n' + str)
        //     .addField('letters guessed: ',"A")
        //     .setFooter('Game started by '+ message.author)
           
        
        // msg.awaitReactions(filter, { time: 60000, errors: ['time'] })
        //     .then(collected => {
        //         const reaction = msg.createReactionCollector(filter, { time: 15000 });
            
        // Object.keys(emojiMapping).map(function(key, index) {

        // }
        // function MapReact(){
        //     if (Object.keys(emojiMapping).includes(reaction)) {
        //         const letter = emojiMapping[reaction];
        //         if(!this.guessed.includes(letter)) {
        //             this.guessed.push(letter);
        //         }
        // }
        //         const editEmbed = new Discord.MessageEmbed()
        //             .setColor(0x111111)
        //             .setTitle('HANGMAN')
        //             .setDescription('Guess the word init')
        //             .addField(hm, '\n\n\n' + str)
        //             .addField('letters guessed: ',this.guessed.length==0? "" : this.guessed.join(" "))
        //         this.embed.edit(editEmbed)
                
        //     }
        
        

        // for (let i = 0;i<chosen.length;i++) {
        //     if 
        // }
    }
}