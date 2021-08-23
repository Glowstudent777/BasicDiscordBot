module.exports = {
    name: 'check',
    description: "Checks ID",
    execute(msg, args) {
        let Whitelisted = whitelist;
        const mentioned = msg.mentions.users.first();

        if (!msg.mentions.users.size) {
            if (whitelist.includes(msg.author.id))
                return msg.react('✅');
        }

        if (!msg.mentions.users.size) {
            if (!whitelist.includes(msg.author.id))
                return msg.react('❌');
        }


        if (msg.mentions.users.size) {
            if (whitelist.includes(mentioned.id))
                return msg.react('✅');
        }

        if (msg.mentions.users.size) {
            if (!whitelist.includes(mentioned.id))
                return msg.react('❌');
        }
    }
}