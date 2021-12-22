module.exports = {
    name: 'profile',
    aliases: ['p'],
    description: "Displays information about the user",
    execute(message, args) {

        const moment = require('moment');
        const { MessageEmbed } = require('discord.js');

        const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if (!member) return message.channel.send('Mention a member to view their profile');

        let profile = new MessageEmbed()
            .setColor("#50C878")
            .setFields(
                {
                    name: "Name",
                    value: member.user.tag
                },
                {
                    name: "User ID",
                    value: member.user.id
                },
                {
                    name: "Created At",
                    value: `${moment(member.user.createdAt).format('MMM DD YYYY')}`
                },
                {
                    name: "Joined Server On",
                    value: `${moment(member.joinedAt).format('MMM DD YYYY')}`
                }
            )
            .setImage(member.user.avatarURL({format: "png", size: 1024, dynamic: true}))
            .setURL(member.user.avatarURL({format: "png", size: 1024, dynamic: true}))
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [profile] });
    }
}