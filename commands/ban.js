module.exports = {
    name: 'ban',
    description: "Bans the mentioned user",
    execute(msg, args){
        if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("Invalid Permissions").then(msg.react('❌'))



        let User = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.cache.get(args[0])
        if (!User) return msg.channel.send("Invalid User")

        if (User.hasPermission("BAN_MEMBERS")) return msg.reply("Invalid Permissions")

        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "None"
        }

        User.ban({reason: banReason})
        msg.reply("Successfully Banned " + `${User}`)
    }
}