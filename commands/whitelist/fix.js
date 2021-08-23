module.exports = {
    name: 'fix',
    description: "Fixes the bots activity",
    execute(msg, args) {

            if (whitelist.includes(msg.author.id)) {
                msg.react('✅');
                client.user.setActivity(`${Activity}`, { type: `${ActivityType}` })
                    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
                    .catch(console.error);
            }


            if (!whitelist.includes(msg.author.id)) {
                msg.react('❌');
            }


    }
}