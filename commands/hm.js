const Discord = require('discord.js')
const client = new Discord.Client()


module.exports = {
    name: 'hm',
    description: "Play hangman",
    execute(message,args) {
        if(message.content.startsWith('$hangman')) {

        }
        var usage = "`$hm <your word(can be a phrase)>,[INCLUDE COMMA BETWEEN WORD & CLUE]<your clue(can also be a phrase)>`\n`Example: $hm apples and bananas,fruits`";
        var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
        var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var games = [];

        var words = message.content.substr(3).split('\n')[0].split(',');
        var word = words.slice(0,1).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
        var clue = words.slice(-1).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
        
        

        
        function generateMessage(phrase, guesses) {
            var s = "";
            for(var i = 0; i < phrase.length; i++) {
                if(phrase[i] == ' ')
                    s += " ";
                else {
                    var c = phrase[i];
                    if(guesses.indexOf(c) == -1)
                        c = "\\_";
                    s += "__" + c + "__ ";
                }
            }
            return s;
        }

        var stages = [`\`\`\`
        /-----|     
        |           clue: ${clue}
        |           
        |           word requested by ${message.author.username}
        |           
        =========
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡     clue: ${clue}
        |
        |           word requested by ${message.author.username}
        |
        =========
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡     clue: \'${clue}\'
        |    🎽
        |           word requested by ${message.author.username}
        |
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡        clue: \'${clue}\'
        |  🤏🎽
        |           word requested by ${message.author.username}
        |
        =========
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡        clue: \'${clue}\'
        |  🤏🎽👌
        |           word requested by ${message.author.username}
        |
        =========
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡        clue: \'${clue}\'
        |  🤏🎽👌
        |    🩳    word requested by ${message.author.username}
        |
        =========
        \`\`\`
        `, `\`\`\`
        /-----|
        |    🤡        Word not guessed,lost
        |  🤏🎽👌       
        |    🩳    word requested by ${message.author.username}
        |    👞        word/phrase: ${word}
        =========       
        \`\`\`
        `];

        if(words.length < 2) {
            message.reply(usage);
        } else {
            
            message.channel.send(stages[0]).then(m => {
            message.delete();
            nextLetter(m, 0, word);
            });   
        }
        
        
        function nextLetter(message, index, word) {
            message.react(letters[index]).then(r => {
                index++;
                if(index < letters.length) {
                    if(index == 13) {
                        message.channel.send(generateMessage(word, [])).then(m => {
                            games.push({
                                stage: 0,
                                msg0: message,
                                msg1: m,
                                phrase: word,
                                guesses: []
                            });
                            nextLetter(m, index);
                        });
                    } else {
                        nextLetter(message, index, word);
                    }
                }
            });
        }
        
        message.client.on('messageReactionAdd', (reaction, user) => {
            var msg = reaction.message;
            if(!user.bot) {
                for(var i = 0; i < games.length; i++) {
                    var game = games[i];
                    if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
                        var letter = unicode[letters.indexOf(reaction.emoji.name)];
                        
                        reaction.fetch().then(usrs => {
                            var reactors = usrs.array;
                            var remove_next = function(index) {
                                if(index < reactors.length)
                                    reaction.remove(reactors[index]).then(() => remove_next(index + 1));
                            };
                            
                            remove_next(0);
                        });
                        
                        if(game.guesses.indexOf(letter) == -1) {
                            game.guesses.push(letter);
                            if(game.phrase.indexOf(letter) == -1) {
                                game.stage ++;
                                game.msg0.edit(stages[game.stage]);
                            } else {
                                var sik = true;
                                for(var j = 0; j < game.phrase.length; j++) {
                                    var c = game.phrase[j];
                                    if(c != ' ' && game.guesses.indexOf(c) == -1) {
                                        sik = false;
                                    }
                                }
                                
                                game.msg1.edit(generateMessage(game.phrase, game.guesses));

                                if(sik) {
                                    return game.msg0.edit(stages[game.stage].replace("-|", "-|     you guessed the phrase, nice"));
                                    
                                }
                                
                                
                            }
                        }
                    }
                    games[i] = game;
                }
            }
        });
    }
}