const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'apply',
    description: "Sends an application form to user",
    execute(message, args) {

        if (message.guild.id === '893994729577001020') {
            global.formlink = "https://forms.gle/D5DLpjy4vyffYoSh9";
        } else if (message.guild.id === '751251776237338626') {
            global.formlink = "Applications are currently closed";
        } else if (message.guild.id !== '751251776237338626' && message.guild.id !== '893994729577001020') {
            global.formlink = "There is no application form for this server";
        }

        const embed = new MessageEmbed()
            .setColor('#50C878')
            .setTitle('Form')
            .setDescription(`${formlink}`)
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [embed] });

    }
}