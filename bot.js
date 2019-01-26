const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();



client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);
client11.login(process.env.TOKEN11);
client12.login(process.env.TOKEN12);
client13.login(process.env.TOKEN13);
client14.login(process.env.TOKEN14);
client15.login(process.env.TOKEN15);
client16.login(process.env.TOKEN16);
client17.login(process.env.TOKEN17);
client18.login(process.env.TOKEN18);
client19.login(process.env.TOKEN19);
client20.login(process.env.TOKEN20);
client21.login(process.env.TOKEN21);
client22.login(process.env.TOKEN22);
client23.login(process.env.TOKEN23);
client24.login(process.env.TOKEN24);
client25.login(process.env.TOKEN25);
client26.login(process.env.TOKEN26);
client27.login(process.env.TOKEN27);
client28.login(process.env.TOKEN28);
client29.login(process.env.TOKEN29);
client30.login(process.env.TOKEN30);
client31.login(process.env.TOKEN31);
client32.login(process.env.TOKEN32);
client33.login(process.env.TOKEN33);
client34.login(process.env.TOKEN34);
client35.login(process.env.TOKEN35);
client36.login(process.env.TOKEN36);
client37.login(process.env.TOKEN37);
client38.login(process.env.TOKEN38);
client39.login(process.env.TOKEN39);
client40.login(process.env.TOKEN40);
client41.login(process.env.TOKEN41);
client42.login(process.env.TOKEN42);
client43.login(process.env.TOKEN43);
client44.login(process.env.TOKEN44);
client45.login(process.env.TOKEN45);
client46.login(process.env.TOKEN46);
client47.login(process.env.TOKEN47);
client48.login(process.env.TOKEN48);
client49.login(process.env.TOKEN49);
client50.login(process.env.TOKEN50);



client.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '1d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '1c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("1say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '2d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '2c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("2say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '3d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '3c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("3say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '4d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '4c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("4say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '5d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '5c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("5say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '6d'){
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '6c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("6say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client7.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '7d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '7c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("7say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '8d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '8c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("8say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '9d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '9c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("9say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '10d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '10c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("10say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client11.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '11d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '11c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("11say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client12.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '12d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '12c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("12say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client13.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '13d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '13c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("13say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client14.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '14d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '14c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("14say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client15.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '15d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '15c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("15say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client16.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '16d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '16c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("16say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client17.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '17d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '17c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("17say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client18.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '18d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '18c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("18say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client19.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '19d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '19c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("19say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client20.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '20d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '20c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("20say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client21.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '21d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '21c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("21say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client22.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '22d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '22c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("22say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client23.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '23d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '23c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("23say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client24.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '24d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '24c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("24say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client25.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '25d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '25c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("25say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client26.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '26d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '26c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("26say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client27.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '27d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '27c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("27say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client28.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '28d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '28c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("28say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client29.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '29d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '29c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("29say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client30.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '30d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '30c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("30say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client31.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '31d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '31c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("31say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client32.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '32d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '32c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("32say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client33.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '33d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '33c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("33say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client34.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '34d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '34c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("34say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client35.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '35d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '35c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("35say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client36.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '36d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '36c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("36say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client37.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '37d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '37c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("37say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client38.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '38d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '38c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("38say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client39.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '39d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '39c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("39say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client40.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '40d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '40c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("40say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client41.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '41d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '41c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("41say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client42.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '42d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '42c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("42say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client43.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '43d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '43c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("43say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client44.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '44d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '44c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("44say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client45.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '45d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '45c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("45say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client46.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '46d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '46c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("46say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client47.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '47d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '47c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("47say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client48.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '48d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '48c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("48say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client49.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '49d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '49c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("49say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client50.on('message', message => {
  if (message.author.id !== '536127560728313856') return;
  if (message.content === '50d') {
message.channel.send('#daily')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content === '50c'){
message.channel.send('#credits')
  }
  if (message.author.id !== '536127560728313856') return;
  if(message.content.startsWith("50say")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


client.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client7.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client8.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client9.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client10.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client11.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client12.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client13.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client14.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client15.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client16.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client17.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client18.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client19.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client20.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client21.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client22.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client23.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client24.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client25.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client26.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client27.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client28.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client29.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client30.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client31.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client32.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client33.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client34.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client35.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client36.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client37.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client38.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client39.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client40.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client41.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client42.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client43.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client44.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client45.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client46.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client47.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client48.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client49.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client50.on('message', message => { // Don't Play with this.
if (message.author.id !== '536127560728313856') return;
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`[ ${x} ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
