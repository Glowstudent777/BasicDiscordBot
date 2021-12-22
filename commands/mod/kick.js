module.exports = {
    name: "kick",
    description: "Kicks user",
    execute(message, args) {

        try {
            if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Kick Users! - [KICK_MEMBERS]**");
            if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Kick Users! - [KICK_MEMBERS]**");
            if (!args[0]) return message.channel.send("**Please Provide A User To Kick!**")

            let kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("**User Is Not In The Guild**");
            if (kickMember === message.member) return message.channel.send("**You Cannot Kick Yourself**")

            const reason = args.slice(1).join(" ");

            if (!kickMember.kicknable) return message.channel.send("**Cant Kick That User**")
            try {
                message.guild.members.kick(kickMember)
                kickMember.send(`**Hello, You Have Been Kicked From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null)
            } catch {
                message.guild.members.kick(kickMember)
            }
            if (reason) {
                let kick = new MessageEmbed()
                    .setTitle(`kick`)
                    .setColor("#50C878")
                    .setFields({
                        name: "User kickned",
                        value: `**${kickMember.user.username}** has been kicked for ${reason}**`
                    })
                    .setFooter(message.author.tag, message.author.avatarURL())
                message.channel.send({ embeds: [kick] });
            } else {
                let kick = new MessageEmbed()
                    .setTitle(`kick`)
                    .setFields({
                        name: "User kicked",
                        value: `**${kickMember.user.username}** has been kicked`
                    })
                    .setColor("#50C878")
                    .setFooter(message.author.tag, message.author.avatarURL())
                message.channel.send({ embeds: [kick] });
            }
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}