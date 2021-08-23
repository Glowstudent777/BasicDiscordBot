module.exports = {
    name: 'avatar',
    description: "avatar",
    execute(msg, args) {

        const mentioned = msg.mentions.users.first();

        if (!msg.mentions.users.size) {
            msg.channel.send({
                embed: {
                    footer: {
                        icon_url: msg.author.avatarURL(),
                        text: msg.author.tag
                    },
                    color: "#50C878",
                    author: "Avatar",
                    title: msg.author.username + "'s Avatar",
                    image: {
                        url: msg.author.displayAvatarURL(
                            {format: 'png', size: 1024, dynamic: true}
                        )
                    }
                }
            });
        }
        if (msg.mentions.users.size) {
            msg.channel.send({
                embed: {
                    footer: {
                        icon_url: msg.author.avatarURL(),
                        text: msg.author.tag
                    },
                    color: "#50C878",
                    author: "Avatar",
                    title: mentioned.username + "'s Avatar",
                    image: {
                        url: mentioned.displayAvatarURL(
                            {format: 'png', size: 1024, dynamic: true}
                        )
                    }
                }
            });
        }
    }
}