const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526521844040335362")
setInterval(function() {
channel.send(راح أجيب نيترو);
}, 30)
})

client.login(process.env.BOT_TOKEN);
