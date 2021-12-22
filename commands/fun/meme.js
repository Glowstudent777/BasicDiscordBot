const Discord = require('discord.js');
const fetch = require("node-fetch");
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
const https = require('https');
const got = require("got");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'meme',
    description: "Sends a meme",
    async execute(message, args, Discord) {

        // const embed = new Discord.MessageEmbed()
        // got('https://www.reddit.com/r/memes/random/.json').then(response => {
        //     let content = JSON.parse(response.body);
        //     let permalink = content[0].data.children[0].data.permalink;
        //     let memeUrl = `https://reddit.com${permalink}`;
        //     let memeImage = content[0].data.children[0].data.url;
        //     let memeTitle = content[0].data.children[0].data.title;
        //     let memeUpvotes = content[0].data.children[0].data.ups;
        //     let memeDownvotes = content[0].data.children[0].data.downs;
        //     let memeNumComments = content[0].data.children[0].data.num_comments;
        //     embed.setTitle(`${memeTitle}`)
        //     embed.setURL(`${memeUrl}`)
        //     embed.setImage(memeImage)
        //     embed.setColor('RANDOM')
        //     embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        //     message.channel.send(embed);


        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;


            // message.channel.send({
            //     embed: {
            //         title: `${memeTitle}`,
            //         footer: {
            //             icon_url: message.author.avatarURL(),
            //             text: `${memeUpvotes}` + " Upvotes"
            //         },
            //         url: `${memeUrl}`,
            //         color: "#FFA500",
            //         image: {
            //             url: `${memeImage}`
            //         }
            //     }
            // })

                let embed = new MessageEmbed()
                    .setTitle(`${memeTitle}`)
                    .setColor("#50C878")
                    .setImage(`${memeImage}`)
                    .setImage(`${memeUrl}`)
                    .setFooter(`${memeUpvotes}`, message.author.avatarURL())
                message.channel.send({ embeds: [embed] });

        })
    }
}