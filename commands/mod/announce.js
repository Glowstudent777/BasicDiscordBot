module.exports = {
    name: 'announce',
    aliases: ['announcement'],
    description: "Announce a message to the server.",
    execute(message, args){

        let announcement = args.slice(0).join(" ");
        let achannel = message.guild.channels.cache.find(c => c.name.includes("announcements"));

        if(!args[0]){
            return message.channel.send("Please provide a message to announce.");
        }
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send("You do not have permission to use this command.");
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send("I do not have permission to use this command.");
        }
        if (!achannel) {
            return message.channel.send("I cannot find the announcements channel.");
        }
        if (announcement.length > 1024) {
            return message.channel.send("The announcement is too long.");
        }

        achannel.send(`${announcement}`)

    }
}