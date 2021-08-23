module.exports = {
    name: 'profile',
    description: "Displays information about the user",
    execute(msg, args) {

        const mentioned = msg.mentions.users.first();

        if (!msg.mentions.users.size) {
            msg.channel.send({
                embed: {
                    footer: {
                        icon_url: msg.author.avatarURL(),
                        text: msg.author.tag
                    },
                    image: {
                        url: msg.author.avatarURL()
                    },
                    fields:
                        [{
                            name: "Name",
                            value: msg.author.tag
                        },
                            {
                                name: "User ID",
                                value: msg.author.id
                            },
                            {
                                name: "Created At",
                                value: msg.author.createdAt
                            }],
                    color: '#50C878',
                    image: {
                        url: msg.author.avatarURL()
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
                    image: {
                        url: mentioned.avatarURL()
                    },
                    fields:
                        [{
                            name: "Name",
                            value: mentioned.tag
                        },
                            {
                                name: "User ID",
                                value: mentioned.id
                            },
                            {
                                name: "Created At",
                                value: mentioned.createdAt
                            }],
                    color: '#50C878',
                    image: {
                        url: mentioned.avatarURL()
                    }
                }
            });
        }
    }
}