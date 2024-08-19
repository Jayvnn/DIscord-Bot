//Imported Packages
const {Client, IntentsBitField} = require('discord.js');


const client = new Client({
    //Intents are a set of permissions that the bot can use to get access to set of events
    //See link for List of Intents https://discord.com/developers/docs/topics/gateway
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
    ]
})


/*

|----Dev Notes----| 
Step 1: npm run build

*/