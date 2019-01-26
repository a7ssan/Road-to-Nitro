const discord = require('discord.js');
const prefix = '$';
const commands = ["help", "hello", "joke", "GAMER GOD AWARD", "spam"];
const client = new discord.Client();

client.on('ready', () => {
    client.user.setGame('Hello!');
    client.user.setStatus('online');
    console.log("BOT STARTED!");
});

for (i = 0; i < commands.length; i++) {
    commands[i] = prefix + commands[i];
}
let gamergodchosen = 0;

client.on('message', (message) => {
    if (message.author.bot) return;


    if (message.content === commands[0]) {
        let e = "Here is a list of commands: \n";
        for (i = 0; i < commands.length; i++) {
            e += (i != (commands.length - 1)) ? commands[i] + "\n" : commands[i];
        }
        message.reply(e);
    }


    if (message.content === commands[1]) {
        message.reply('hello! :smile:');
    }


    if (message.content === commands[2]) {
        let jsonjokes = require('./jokes.json');
        let rn = Math.floor(Math.random() * jsonjokes.jokes.length);
        message.reply(jsonjokes.jokes[rn]);
    }


    if (message.content === commands[3]) {
        //You have been deemed a Gamer God
        if (gamergodchosen === 0) {
            message.reply("YOU HAVE BEEN DEEMED *THE GAMER GOD*! **YOU WILL ONLY SEE THIS ONCE!** :trophy:");
            gamergodchosen = 1;
        }
    }


    let spam = message.content.split(' ');

    if (spam[0] === commands[4] && spam[1] && spam[2]) {
        let times = Number(spam[1]).toFixed(0);
        if (times > 100) {
            message.reply('Number is larger than 100.');
            return;
        }
        if (times < 1) {
            message.reply('Number is less than 1.');
            return;
        }
        let msg = "";
        for (i = 2; i < spam.length; i++) {
            msg += spam[i];
        }

        message.channel.startTyping()
        for (i = 0; i < (times + 1); i++) {
            message.channel.sendMessage(msg);
        }
        message.channel.stopTyping()
    }



});

client.login('NTM4NDk1MjUzNjg3MTczMTMx.Dy1WrQ.qvszeqPhoZrG3ICo4WcDssG6hko');
