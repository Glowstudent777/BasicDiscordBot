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
                        name: 'Invite',
                        value: `[Invite Link](${link})`
                    }],
                color: '#50C878'
            }});
    }
}