module.exports = {
    name: 'restart',
    description: "Restarts the bot",
    execute(msg, args){
        var Whitelist = whitelist;
        for (var i = 0; i < Whitelist.length; i++) {
            if (msg.author.id !== Whitelist[i]) {
                    msg.react('❌')
            }
            if (msg.author.id === Whitelist[i]) {
                msg.react('✅')
                msg.react('❌')
                msg.awaitReactions((reaction, user) => user.id == msg.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
                    {max: 1, time: 30000}).then(collected => {
                    if (collected.first().emoji.name == '✅') {
                        msg.reply('Restarting...')
                        msg.reactions.removeAll()
                            .then(msg => {
                                setTimeout(function () {
                                    client.destroy();
                                    client.login(process.env.CLIENT_TOKEN)
                                    console.log('Restarted ----------------------->')
                                    console.log('Current Server Number: ' + client.guilds.cache.size)
                                    msg.channel.send('Restart Complete')
                                        .then(client => {
                                            client.user.setActivity(`${Activity}`, { type: `${ActivityType}` })
                                                .catch(console.error);
                                        })
                                }, 2000);
                            }).then(msg => {
                            client.user.setActivity(`${Activity}`, { type: `${ActivityType}` })
                                .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
                                .catch(console.error);
                        })
                    } else
                        msg.reply('Operation canceled.');
                    msg.reactions.removeAll();
                }).catch(() => {
                    msg.reply('No reaction after 30 seconds, operation canceled');
                    msg.reactions.removeAll();
                });
            }
        }
    }
}