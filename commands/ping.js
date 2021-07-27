module.exports = {
    name: 'ping',
    description: "Displays latency",
    execute(msg, args){
        msg.channel.send({embed: {
                footer: {
                    icon_url: msg.author.avatarURL(),
                    text: msg.author.tag
                },
                fields:
                    [{
                        name: 'Latency',
                        value: `${Date.now() - msg.createdTimestamp}ms`,
                        inline: true
                    },
                        {
                            name: 'API Latency',
                            value: `${Math.round(client.ws.ping)}ms`,
                            inline: true
                        }],
                color: "#50C878",
                title: '🏓  Ping',
                image: msg.author.defaultAvatarURL
            }});
    }
}