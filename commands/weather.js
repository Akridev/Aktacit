const Discord = require('discord.js');
const weather= require('weather-js');

module.exports = {
    name: 'weather' || 'w',
    description: 'displays current weather in specified location',

    async execute(message, args) {
        weather.find({search: args.join(" "),degreeType: 'C'}, function(error,result){
            if (error) return message.channel.send("Fam can you specify the location?");
            if (!args[0]) return message.channel.send("Fam can you specify the location?");

            if(result === undefined || result.length == 0) return message.channel.send("Yo that's not a valid location is it? Stop clowning🤡");

            var current = result[0].current;
            var location = result[0].location;

            var windint = parseInt(String(current.winddisplay.charAt(0)) + String(current.winddisplay.charAt(1)));
            if (windint >= 33) {
                winddesc = 'Strong Breeze';
            } else if (windint >= 22) {
                winddesc = 'Very Windy';
            } else if (windint >= 11) {
                winddesc = 'Windy';
            } else if (windint>0){
                winddesc = 'Slight Breeze';
            } else {
                winddesc = 'No Wind';
            }

            // var utc,d,localTime,localOffset,nd;
            // d = new Date();
            // localTime = d.getTime();
            // localOffset = d.getTimezoneOffset() * 60000
            // utc = localTime + localOffset
            // var tokyo = utc + (1000 * 32400)
            // nd = new Date(tokyo)
            // console.log(nd)
            
            const embed = new Discord.MessageEmbed()
            .setColor(0x111111)
            .setAuthor(`Current Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('Timezone', `UTC ${location.timezone}`, true)
            .addField('Temperature',`${current.temperature}°C`, true)
            .addField('Feels Like', `${current.feelslike}°C`, true)
            .addField('Wind',`${current.winddisplay}`, true)
            .addField('Description', winddesc, true)
            .addField('Humidity', `${current.humidity}%`, true)
            //.addField('Local Time', , true)

            message.channel.send(embed)
        })
    }
}