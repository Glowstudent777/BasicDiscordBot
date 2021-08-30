module.exports = {
    name: 'info',
    description: "Information about the bot",
    execute(msg, args){




        msg.channel.send({embed: {

                footer: {
                    icon_url: msg.author.avatarURL(),
                    text: msg.author.tag
                },
                fields: [
                    {
                        name: 'Bot Creator',
                        value: 'Glowstudent#1229'
                    },
                    {
                      name: 'Prefix',
                      value: `${prefix}`
                    },
                    {
                        name: 'Invite',
                        value: `[Invite Link](${link})`
                    },
                    {
                        name: 'Servers',
                        value: `${client.guilds.cache.size}`
                    },
                    {
                        name: 'Github',
                        value: `[GitHub Repository](https://github.com/Glowstudent777/BasicDiscordBot)`
                    }],
                color: '#50C878'
            }});
    }
}