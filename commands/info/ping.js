const { MessageEmbed } = require('discord.js');
const {contentType} = require("mime-types");
const moment = require('moment');
module.exports = {
    name: 'ping',
    description: "Displays latency",
    execute(message, args) {

        const ping = new MessageEmbed()
            .setColor('#50C878')
            .setTitle('🏓  Ping')
            .setFields({
                name: 'Latency',
                value: `${Date.now() - message.createdTimestamp}ms`,
                inline: true
            },
                {
                    name: 'API Latency',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                })
            .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send({ embeds: [ping] });

            }
        }