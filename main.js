const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
require('dotenv').config();

const {prefix} = require('./config.json');
const {whitelist} = require('./config.json');

const {Activity} = require('./config.json');
const {ActivityType} = require('./config.json');

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


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${Activity}`, { type: `${ActivityType}` })
        .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
        .catch(console.error);
    console.log('Current Server Number: ' + client.guilds.cache.size)

});


client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

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