module.exports = {
    name: 'info',
    description: "Information about the bot",
    execute(message, args){

        const version = "v3";

        const { MessageEmbed } = require('discord.js');
        let embed = new MessageEmbed()
            .setTitle(`Bot Info`)
            .setColor("#50C878")
            .setFields(
                {
                    name: `${client.user.username}`,
                    value: "A bot made by [Glowstudent#1229](https://discord.gg/4wM63P7ZUd)",
                },
                {
                    name: `Version`,
                    value: `${version}`,
                },
                {
                    name: `Prefix`,
                    value: `${prefix}`,
                },
                {
                    name: `Guilds`,
                    value: `${client.guilds.cache.size}`,
                },
                {
                    name: `Invite`,
                    value: `[Click Here](https://discord.com/api/oauth2/authorize?client_id=` + `${client.user.id}` + `&scope=bot+guilds+applications.commands&permissions=8)`,
                },
                {
                    name: `Support Server`,
                    value: `[Click Here](https://discord.gg/4wM63P7ZUd)`,
                },
                {
                    name: `Github`,
                    value: `[Click Here](https://github.com/Glowstudent777/BasicDiscordBot)`,
                }
            )
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [embed] });
    }
}