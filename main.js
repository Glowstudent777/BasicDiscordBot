const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'DIRECT_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES', "GUILD_EMOJIS_AND_STICKERS", "GUILD_MESSAGE_REACTIONS"] });
const fs = require('fs');
const dotenv = require('dotenv');
require('dotenv').config();
const {prefix} = require('./config.json');
const {whitelist} = require('./config.json');
const {Activity} = require('./config.json');
const {ActivityType} = require('./config.json');
const {aliases} = require("./commands/fun/profile");
const {Intents} = require("discord.js");
global.whitelist = whitelist;
global.client = client;
global.prefix = prefix;
global.Activity = Activity;
global.ActivityType = ActivityType;
global.client = client;
client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();
const { MessageEmbed } = require('discord.js');


const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
        client.aliases.set(command.aliases, aliases);
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${Activity}`, { type: `${ActivityType}` });
    console.log('Current Server Number: ' + client.guilds.cache.size)

    console.log(`Bot invite link: ` + client.generateInvite({permissions: ['ADMINISTRATOR'], scopes: ['bot']})
        //client.generateInvite({ scopes: ['bot'], permissions: [Permissions.FLAGS.SEND_MESSAGES] })
    )
});


client.on("messageCreate", msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.channel.type === 'dm') return msg.reply("This command must be used in a guild");

    const args = msg.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    try {
        command.execute(msg, args);
    } catch (error) {
        // ...
    }
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const once = eventFunction.once;

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(client, ...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});



client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.on("guildCreate", (guild) => {
    console.log('Joined New Guild: ' + guild.name)
});

client.login(process.env.CLIENT_TOKEN);