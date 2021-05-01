const Discord = require("discord.js");
const client = new Discord.Client();
const token = "your_token_here";

client.login(token);

client.on('ready', () => {
    console.log("the bot ready and running");

   setInterval(() => {
        var logBotChannel = client.channels.cache.get('your_channelid_here');
        logBotChannel.send("bump");
    }, 5000);
});