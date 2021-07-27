module.exports = {
    name: 'log',
    description: "Logs Errors to the Console",
    execute(msg, args) {
        let Whitelisted = whitelist;

        if ( !whitelist.includes(msg.author.id) )
            return msg.react('❌');

        if ( whitelist.includes(msg.author.id)){
            msg.react('✅')
            console.log('Current Server Number: ' + client.guilds.cache.size)
            console.log(console.Console)

            msg.author.send('Current Server Number: ' + client.guilds.cache.size)
            msg.author.send(console.Console)
        }


    }
}