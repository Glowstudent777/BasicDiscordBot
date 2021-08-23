const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
require('dotenv').config();

const {prefix} = require('./config.json');
const {whitelist} = require('./config.json');

const {Activity} = require('./config.json');
const {ActivityType} = require('./config.json');

const {blacklist} = require('./config.json');



client.generateInvite(['ADMINISTRATOR'])
    .then(link => {
        console.log(`Generated bot invite link: ${link}`);
        const invite = link;
        global.link = link;
    });

global.whitelist = whitelist;
global.client = client;
global.prefix = prefix;

global.Activity = Activity;
global.ActivityType = ActivityType;


client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();


const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

fs.readdir('./events/', (err, files) => { // We use the method readdir to read what is in the events folder
    if (err) return console.error(err); // If there is an error during the process to read all contents of the ./events folder, throw an error in the console
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`); // Here we require the event file of the events folder
        if (eventFunction.disabled) return; // Check if the eventFunction is disabled. If yes return without any error

        const event = eventFunction.event || file.split('.')[0]; // Get the exact name of the event from the eventFunction variable. If it's not given, the code just uses the name of the file as name of the event
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client; // Here we define our emitter. This is in our case the client (the bot)
        const once = eventFunction.once; // A simple variable which returns if the event should run once

        // Try catch block to throw an error if the code in try{} doesn't work
        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(...args)); // Run the event using the above defined emitter (client)
        } catch (error) {
            console.error(error.stack); // If there is an error, console log the error stack message
        }
    });
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${Activity}`, { type: `${ActivityType}` })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    console.log('Current Server Number: ' + client.guilds.cache.size)

});


client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.channel.type === 'dm') return msg.reply("This command must be used in a guild");

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
    client.commands.get('ping').execute(msg, args);
    }
    else if (command === 'server'){
        client.commands.get('serverinfo').execute(msg, args);
    }
    else if (command === 'info'){
        client.commands.get('info').execute(msg, args);
    }
    else if (command === 'profile'){
        client.commands.get('profile').execute(msg, args);
    }
    else if (command === 'avatar'){
        client.commands.get('avatar').execute(msg, args);
    }
    else if (command === 'restart'){
        client.commands.get('restart').execute(msg, args);
    }
    else if (command === 'shutdown'){
        client.commands.get('shutdown').execute(msg, args);
    }
    else if (command === 'help'){
        client.commands.get('help').execute(msg, args);
    }
    else if (command === 'check'){
        client.commands.get('check').execute(msg, args);
    }
    else if (command === 'log'){
        client.commands.get('log').execute(msg, args);
    }
    else if (command === 'fix'){
        client.commands.get('fix').execute(msg, args);
    }
    else if (command === 'kick'){
        client.commands.get('kick').execute(msg, args);
    }
    else if (command === 'ban'){
        client.commands.get('ban').execute(msg, args);
    }
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