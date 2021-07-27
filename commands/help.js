module.exports = {
    name: 'help',
    description: "List of commands",
    execute(msg, args){
            msg.channel.send({embed: {
                    footer: {
                        icon_url: msg.author.avatarURL(),
                        text: msg.author.tag
                    },
                    fields: [
                        {
                            name: 'Prefix',
                            value: "The prefix for the bot is " + `${prefix}`
                        },
                        {
                            name: 'Server',
                            value: "Displays information about the server",
                            inline: true
                        },
                        {
                            name: 'Info',
                            value: "Displays information about the bot",
                            inline: true
                        },
                        {
                            name: 'Profile',
                            value: "Displays the users profile",
                            inline: true
                        },
                        {
                            name: 'Avatar',
                            value: "Displays the mentioned users avatar",
                            inline: true
                        },
                        {
                            name: 'Shutdown',
                            value: "Shuts down the bot - Whitelist Only",
                            inline: true
                        },
                        {
                            name: 'Restart',
                            value: "Restarts the bot - Whitelist Only",
                            inline: true
                        },
                        {
                          name: 'Fix',
                          value: "Fixes the bots status - Whitelist Only",
                          inline: true
                        },
                        {
                            name: 'Ping',
                            value: "Displays Latency",
                            inline: true
                        },
                        {
                            name: 'Check',
                            value: "Checks if user has their ID on the whitelist that allows the use of whitelisted commands\n ✅ - On the whitelist\n ❌- Not on the whitelist",
                            inline: true
                        },
                        {
                            name: 'Kick',
                            value: "Kicks Mentioned User - Requires KICK_MEMBERS Permission",
                            inline: true
                        },
                        {
                            name: 'Ban',
                            value: "Bans Mentioned User - Requires BAN_MEMBERS Permission",
                            inline: true
                        }],
                    color: '#50C878'
                }});
        }
}