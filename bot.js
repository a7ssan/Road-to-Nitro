const discord = require("discord.js");
const randomWord = require("random-words")
const client = new discord.Client();

client.login(process.env.TOKEN);
  

 
var spam;
 
var phrases = ["thing1","another one","keep adding more","there's no limit"];
 
function startspam()
{
    console.log("Spam starting!")
    var server = client.guilds.get("538592060580691968");
    var chan = new discord.TextChannel(server,{"id":"538592060580691970"});
    spam = client.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{ // Sticking with randomwords.
            console.log(msg.content);
        });
  
    },5000);
}
 
function stopspam()
{
    client.clearTimeout(spam);
    console.log("Spam Stopped.")
}
 
client.on("ready",()=>{
    console.log("Ready!");
})
 
client.on("message",msg=>{
    if(msg.author.id == "531150470681460746")
    {
        if(msg.content.toLowerCase() == "=start")
        {
            startspam()
        }
        else if(msg.content.toLowerCase() == "=stop")
        {
            stopspam()
        }
    }
})
