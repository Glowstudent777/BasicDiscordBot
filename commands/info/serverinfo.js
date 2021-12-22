module.exports = {
    name: 'serverinfo',
    aliases: ['si', 'server', 'guild', 'guildinfo'],
    description: "Information about the server",
    async execute(message, args) {


        const owner = await message.guild.fetchOwner();
        const members = await message.guild.members.fetch();

        const Discord = require('discord.js');
        const moment = require('moment');
        const { MessageEmbed } = require('discord.js');

            const siembed = new MessageEmbed()
            .setTitle(`${message.guild.name} Information`)
            .setColor("#50C878")
            .setFields(
                {
                    name: "Server Owner",
                    value: `${owner}`,
                },
                {
                    name: "Server ID",
                    value: message.guild.id,
                },
                {
                    name: "Server Creation Date",
                    value: `${moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm a')}`,
                },
                {
                    name: "Server Member Count",
                    value: message.guild.members.cache.filter(member => !member.user.bot).size + " Humans, " + message.guild.members.cache.filter(member => member.user.bot).size + " Bots",
                })
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [siembed] });
    }
}