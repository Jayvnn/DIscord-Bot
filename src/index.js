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
        IntentsBitField.Flags.MessageContent
    ],
});

client.on('ready', (clientUser) => {
    console.log(`${clientUser.user.tag} is currently online`);
});

client.on('messageCreate', (message) => {

    const content = message.content.toLowerCase();

    if (content === 'hello!!' || content === 'hey!!!' || content === 'hi' || content === 'sup' || content == 'ello') {
        message.reply('Hey there! :D');
        console.log("Bot responded: \"Hey There!!!! :D\" ");
    } else if (content === 'how are you?') {
        message.reply('I\'m doing Fantastic! What about you?');
        console.log("Bot responded: \"I\'m doing Fantastic! What about you?\" ");
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