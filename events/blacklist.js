module.exports = {
    name: "Blacklist",
    event: "message",
    once: false,
    run(message, args) {

        const {blacklist} = require('../config.json');
        const {blacklistMessage} = require('../config.json');

        for (var i = 0; i < blacklist.length; i++) {


            if (!message.content.toLowerCase().includes(blacklist[i])) return;

            if (message.author.bot) return;
            if (blacklist == '') return;
            if (whitelist.includes(message.author.id)) return;
            if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_MESSAGES')) return;


            if (message.content.toLowerCase().includes(blacklist[i])) {
                message.delete();
                if (blacklistMessage === '') return;
                message.reply(`${blacklistMessage}`)
                    .then(message => {
                        setTimeout(() => message.delete(), 3000)
                    }).catch();
            }
        }
    }
}