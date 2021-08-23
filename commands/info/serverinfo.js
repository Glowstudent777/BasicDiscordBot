module.exports = {
    name: 'serverinfo',
    description: "Information about the server",
    execute(msg, args){
        msg.channel.send({embed: {
                footer: {
                    icon_url: msg.author.avatarURL(),
                    text: msg.author.tag
                },
                fields: [
                    {
                        name: 'Server Owner',
                        value: msg.guild.owner
                    },
                    {
                        name: 'Server Name',
                        value: msg.guild.name
                    },
                    {
                        name: 'Server Created',
                        value: msg.guild.createdAt
                    },
                    {
                        name: 'Member Count',
                        value: msg.guild.members.cache.filter(member => !member.user.bot).size
                    },
                    {
                        name: 'Bot Count',
                        value: msg.guild.memberCount - msg.guild.members.cache.filter(member => !member.user.bot).size
                    }],
                color: "#50C878"
            }});
    }
}