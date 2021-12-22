const Discord = require('discord.js');
const fetch = require("node-fetch");
const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100'
const https = require('https');
const got = require("got");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'safememe',
    description: 'Sends a random meme from r/memes',
    category: 'fun',
    aliases: ['smeme'],
    async execute(message, args, Discord){

        var url = `https://www.reddit.com/r/memes/hot/.json?limit=100`
        https.get(url, (result) => {
            var body = ''
            var chunked = false
            result.on('data', (chunk) => {
                body += chunk
                if (chunked == false){
                    chunked = true
                }
            })
            result.on('end', () => {
                if (body.length > 1000){
                    var response = JSON.parse(body)
                    var postChildren = []
                    if (message.channel.nsfw == false){
                        var postsNumber = 0
                        for (var number = 0; number < response.data.children.length; number++){
                            postChildren.push(number)
                        }
                        for (var found = false; found == false; postsNumber ++){
                            if (postChildren.length > 0){
                                var index1 = Math.floor(Math.random() * (postChildren.length))
                                var index2 = postChildren[index1]
                                if (response.data.children[index2].data.over_18 == true){
                                    postChildren.splice(index1, 1)
                                } else {
                                    var index = response.data.children[index2].data
                                    var found = true
                                }
                            } else {
                                var found = true
                            }
                        }
                    } else {
                        var index = response.data.children[Math.floor(Math.random() * (response.data.children.length-1)) + 1].data
                    }
                    if (postChildren.length > 0 || message.channel.nsfw){
                        var title = index.title
                        var upvotes = index.ups
                        var link = 'https://reddit.com' + index.permalink
                        var subRedditName = index.subreddit_name_prefixed
                        if (index.post_hint !== 'image') {
                            var text = index.selftext
                            if (title.length > 256) {
                                title = (title.substring(0, 253) + "...")
                            }
                            if (text.length > 2048) {
                                text = (text.substring(0, 2045) + "...")
                            }

                            let embed = new MessageEmbed()
                                .setTitle(`${title}`)
                                .setColor("#50C878")
                                .setImage(image)
                                .setFooter(`${upvotes} Upvotes`, message.author.avatarURL())
                                .setURL(link)
                            message.channel.send({ embeds: [embed] });
                        }
                        if (index.post_hint == 'image'){
                            var image = index.preview.images[0].source.url.replace('&amp;', '&')
                            if (title.length > 256) {
                                title = (title.substring(0, 253) + "...")
                            }
                            let embed = new MessageEmbed()
                                .setTitle(`${title}`)
                                .setColor("#50C878")
                                .setImage(image)
                                .setFooter(`${upvotes} Upvotes`, message.author.avatarURL())
                                .setURL(link)
                            message.channel.send({ embeds: [embed] });
                        }
                    } else {
                        message.channel.send('Could not find a meme that was not nsfw')
                    }
                } else {
                    message.channel.send('Could not find subreddit!')
                }
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })},}