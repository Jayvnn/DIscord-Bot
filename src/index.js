//Imported Packages
const {Client, IntentsBitField} = require('discord.js');
const axios = require('axios');
require('dotenv').config();

const client = new Client({
    //Intents are a set of permissions that the bot can use to get access to set of events
    //See link for List of Intents https://discord.com/developers/docs/topics/gateway
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (clientUser) => {
    console.log(`${clientUser.user.tag} is currently online`);
});

client.on('messageCreate', async msg => {

    const content = msg.content.toLowerCase();
    const nickname = msg.member ? msg.member.nickname : null;
    const username = msg.author.username;

    switch(content) {
        case 'hello':
        case 'hey':
        case 'hi':
        case 'sup':
        case 'ello':
            msg.reply(`Hey there ${nickname || username}!!! :D`);
            console.log(`Bot responded: "Hey there ${nickname || username}! :D" `);
            break;
        case "how are you?":
            msg.reply('I\'m doing Fantastic!! What about you?');
            console.log("Bot Responded: 'I\'m doing Fantastic!' ");
            break;
        default:
            break;
    }
})
client.login(
    process.env.CLIENT_TOKEN
);

/*

|----Dev Notes----| 
Step 1: npm run build
Step 2: npm run dev

*/