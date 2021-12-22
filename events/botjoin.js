const fs = require("fs");
const {logBotAdditionsToFile} = require("../config.json");
module.exports = {
    name: "botjoin",
    event: "guildMemberAdd",
    once: false,
    async run(client, member, guild) {

        const {antiBotActive} = require('../config.json');
        const {logBotAdditionsToFile} = require('../config.json');
        if (antiBotActive === false) return;
        if (antiBotActive === true) {
            if (client.user.bot) {
                const fs = require("fs");
                const {allowedToAddBots} = require('../config.json');
                const auditLogs = await member.guild.fetchAuditLogs({type: "BOT_ADD", limit: 1});
                const auditLog = auditLogs.entries.first();

                if (member.user.flags.has('VERIFIED_BOT')) {
                    if (logBotAdditionsToFile === true) {
                        fs.appendFile('./log.txt', `${auditLog.executor.tag} added a verified bot named: ${auditLog.target.tag}\n`, function (err) {
                        if (err) throw err;
                    })} else {
                        let verifylevel = "Bot is verified";
                        console.log(verifylevel)
                    }
                }
                if (!member.user.flags.has('VERIFIED_BOT')) {
                    let verifylevel = 'Bot is not verified';
                    console.log(verifylevel)


                    if (allowedToAddBots.includes(auditLog.executor.id)) {
                        if (logBotAdditionsToFile === true) {
                            fs.appendFile('./log.txt', `${auditLog.executor.tag} added an unverified bot named: ${auditLog.target.tag}\n`, function (err) {
                                if (err) throw err;
                            })
                        } else {
                            console.log(`Bot Addition Permitted By: ${auditLog.executor.tag}`)
                        }
                    } else if (!allowedToAddBots.includes(auditLog.executor.id)) {
                        if (logBotAdditionsToFile === true) {
                            fs.appendFile('./log.txt', `${auditLog.executor.tag} attempted to add an unverified bot named: ${auditLog.target.tag}\n`, function (err) {
                                if (err) throw err;
                            })} else {
                            console.log(`Bot Addition Not Permitted || ${auditLog.executor.tag}`)
                            }
                        await member.kick(`Bot Addition Not Permitted || ${auditLog.executor.tag}`)
                    }
                }
            }
            if (!client.user.bot) {
                // ...
            }
        }
    }
}