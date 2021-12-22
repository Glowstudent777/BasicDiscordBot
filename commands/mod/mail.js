const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'mail',
    description: "Sends mail through the bot.",
    execute(message, args) {

        let mail = args.slice(0).join(" ");
        if (!mail) {
            return message.channel.send("Please provide a message to send.");
        }
        if (!args[0]) {
            return message.channel.send("Please provide a message to send.");
        }
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send("You do not have permission to use this command.");
        }
        if (mail.length > 1024) {
            return message.channel.send("The mail is too long.");
        }

        message.guild.members.fetch().then(members => {
            members.forEach(member => {
                if (!member.user.bot) {
                    let embed = new MessageEmbed()
                        .setTitle(`Mail`)
                        .setColor("#50C878")
                        .setDescription(`${(mail)}`)
                        .setFooter(message.author.tag, message.author.avatarURL())
                    member.send({embeds: [embed]});
                }
            })
        });
    }
}