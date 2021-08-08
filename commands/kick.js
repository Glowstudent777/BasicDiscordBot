module.exports = {
    name: 'kick',
    description: "Kicks the mentioned user",
    execute(msg, args){

        if (!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("Invalid Permissions").then(msg.react('❌'))



        let User = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0])
        if (!User) return msg.channel.send("Invalid User")

        if (User.hasPermission("KICK_MEMBERS")) return msg.reply("Cannot Kick User")

        let kickReason = args.join(" ").slice(22);
        if (!kickReason) {
            kickReason = "None"
        }

        User.kick({reason: kickReason})
        msg.reply("Successfully Kicked " + `${User}`)
    }
}