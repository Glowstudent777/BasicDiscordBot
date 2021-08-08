module.exports = {
    name: "ban",
    description: "Bans a member from the server",
    execute(message, args) {

        try {
            if (!message.member.hasPermission("BAN_MEMBERS") && !ownerID.includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("**Please Provide A User To Ban!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Cant Kick That User**")
            try {
                message.guild.members.ban(banMember)
                banMember.send(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).catch(() => null)
            } catch {
                message.guild.members.ban(banMember)
            }
            if (reason) {
                message.channel.send({embed: {
                        fields: [
                            {
                                name: 'User Banned',
                                value: `**${banMember.user.username}** has been banned for ${reason}`
                            }],
                        color: "GREEN"
                    }})
            } else {
                message.channel.send({embed: {
                        fields: [
                            {
                                name: 'User Banned',
                                value: `**${banMember.user.username}** has been banned`
                            }],
                        color: "GREEN"
                    }})
            }
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}