require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    if (message.content.includes('bot')) {
        message.reply('Hello there!');
    }
    console.log(message.author.username);
});

client.login(process.env.BOT_TOKEN);