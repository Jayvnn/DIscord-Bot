//Imported Packages
const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config();

const client = new Client({
    //Intents are a set of permissions that the bot can use to get access to set of events
    //See link for List of Intents https://discord.com/developers/docs/topics/gateway
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages
    ],
});

client.on('ready', (clientUser) => {
    console.log(`${clientUser.user.tag} is online`);
});

client.on('messageCreate', (message) => {
    if (message.content === 'hello') {
        message.reply('Hey there! :D');
    }
})
client.login(
    process.env.BOT_TOKEN
);

/*

|----Dev Notes----| 
Step 1: npm run build
Step 2: npm run dev

*/