module.exports = {
    name: 'help',
    description: "List of commands",
    execute(msg, args){


        if(!args[0]) {
            msg.channel.send({
                embed: {
                    footer: {
                        icon_url: msg.author.avatarURL(),
                        text: msg.author.tag
                    },
                    fields: [
                        {
                            name: 'Modules',
                            value: "fun\ninfo\nmod\nwhitelist"
                        }],
                    color: '#50C878'
                }
            });
        }

        if(!args[0]) return;

            if (args[0].toLowerCase() === 'fun') {
                msg.channel.send({
                    embed: {
                        footer: {
                            icon_url: msg.author.avatarURL(),
                            text: msg.author.tag
                        },
                        fields: [
                            {
                                name: 'Avatar',
                                value: "Displays users avatar"
                            },
                            {
                                name: 'Profile',
                                value: "Displays users profile"
                            }],
                        color: '#50C878',
                        title: 'Fun'
                    }
                });
            }

            if (args[0].toLowerCase() === 'info') {
                msg.channel.send({
                    embed: {
                        footer: {
                            icon_url: msg.author.avatarURL(),
                            text: msg.author.tag
                        },
                        fields: [
                            {
                                name: 'Help',
                                value: "Displays help modules"
                            },
                            {
                                name: 'Info',
                                value: "Sends info about the bot"
                            },
                            {
                                name: 'Ping',
                                value: 'Displays latency'
                            },
                            {
                                name: 'Server',
                                value: 'Displays info about the server'
                            }],
                        color: '#50C878',
                        title: 'Info'
                    }
                });
            }

            if (args[0].toLowerCase() === 'mod') {
                msg.channel.send({
                    embed: {
                        footer: {
                            icon_url: msg.author.avatarURL(),
                            text: msg.author.tag
                        },
                        fields: [
                            {
                                name: 'Ban',
                                value: "Bans mentioned user"
                            },
                            {
                                name: 'Kick',
                                value: "Kicks mentioned user"
                            }],
                        color: '#50C878',
                        title: 'Mod'
                    }
                });
            }

            if (args[0].toLowerCase() === 'whitelist') {
                msg.channel.send({
                    embed: {
                        footer: {
                            icon_url: msg.author.avatarURL(),
                            text: msg.author.tag
                        },
                        fields: [
                            {
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
                                value: 'If bot status is not showing use this command to fix it'
                            }],
                        color: '#50C878',
                        title: 'Whitelist'
                    }
                });
            }





        }
}