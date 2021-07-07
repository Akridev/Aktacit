module.exports = {
    name: 'commands',
    description: "displays the commands available for use",
    execute(message,args) {
        message.channel.send('Current commands available: ping,wagwan,id,gaycheck/gc,thancc,stopprocrastination/stopp,weather/w,bruhmoment/bm');
    }
}