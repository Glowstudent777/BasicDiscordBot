module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "List of commands",
    execute(message, args){

        const { MessageEmbed } = require('discord.js');

        if(!args[0]){
            let embed = new MessageEmbed()
                .setTitle(`Help Menu`)
                .setColor("#50C878")
                .setFields({
                    name: 'Modules',
                    value: "fun\ninfo\nmod\nwhitelist"
                })
                .setFooter(message.author.tag, message.author.avatarURL())
            message.channel.send({ embeds: [embed] });
        }

            if (args[0].toLowerCase() === 'fun') {
                    let embed = new MessageEmbed()
                        .setTitle(`Help Menu - Fun`)
                        .setColor("#50C878")
                        .setFields({
                            name: 'Avatar',
                            value: "Displays users avatar"
                        },
                            {
                                name: 'Profile',
                                value: "Displays users profile"
                            },
                            {
                                name: 'Meme',
                                value: "Sends a meme"
                            })
                        .setFooter(message.author.tag, message.author.avatarURL())
                    message.channel.send({ embeds: [embed] });
            }

            if (args[0].toLowerCase() === 'info') {
                let embed = new MessageEmbed()
                    .setTitle(`Help Menu - Info`)
                    .setColor("#50C878")
                    .setFields({
                            name: 'Help',
                            value: "Displays help modules"
                        },
                        {
                            name: 'Info',
                            value: "Sends info about the bot"
                        },
                        {
                            name: 'Ping',
                            value: "Displays latency"
                        },
                        {
                            name: 'Server',
                            value: "Displays info about the server"
                        })
                    .setFooter(message.author.tag, message.author.avatarURL())
                message.channel.send({ embeds: [embed] });
            }

            if (args[0].toLowerCase() === 'mod') {
                let embed = new MessageEmbed()
                    .setTitle(`Help Menu - Mod`)
                    .setColor("#50C878")
                    .setFields(
                        {
                          name: 'Announce',
                          value: "Sends an announcement"
                        },
                        {
                          name: 'Eannounce',
                          value: "Sends an embed announcement"
                        },
                        {
                            name: 'Ban',
                            value: "Bans mentioned user"
                        },
                        {
                            name: 'Kick',
                            value: "Kicks mentioned user"
                        },
                        {
                            name: 'Mail',
                            value: "Sends mail to everyone"
                        })
                    .setFooter(message.author.tag, message.author.avatarURL())
                message.channel.send({ embeds: [embed] });
            }

            if (args[0].toLowerCase() === 'whitelist') {
                let embed = new MessageEmbed()
                    .setTitle(`Help Menu - Whitelist`)
                    .setColor("#50C878")
                    .setFields({
                            name: 'Check',
                            value: "Check if user is on whitelist"
                        },
                        {
                            name: 'Restart',
                            value: "Restarts the bot"
                        },
                        {
                            name: 'Shutdown',
                            value: "Turns off the bot"
                        },
                        {
                            name: 'Fix',
                            value: 'Fixes bot status'
                        })
                    .setFooter(message.author.tag, message.author.avatarURL())
                message.channel.send({ embeds: [embed] });
            }
        }
}