module.exports = {
    name: "Blacklist",
    event: "message",
    once: false,
    run(message, args) {

        const {blacklist} = require('../config.json');


        if(message.author.bot) return;

            for (var i=0; i < blacklist.length; i++) {
                if (message.content.toLowerCase().includes(blacklist[i])) {
                    message.delete();
                }
            }


    }
};