module.exports = {
    name: 'avatar',
    aliases: ['icon','pfp'],
    description: "avatar",
    execute(message, args) {

        const { MessageEmbed } = require('discord.js');
        const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if (!member) return message.channel.send('Mention a member to view their profile');

        let avatar = new MessageEmbed()
            .setTitle(`${member.user.username}'s Avatar`)
            .setColor("#50C878")
            .setImage(member.user.avatarURL({format: "png", size: 1024, dynamic: true}))
            .setURL(member.user.avatarURL({format: "png", size: 1024, dynamic: true}))
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [avatar] });
    }
}