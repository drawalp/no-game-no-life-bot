const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Çay İç')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const çayiç = new Discord.RichEmbed()
    .setAuthor('Hararetimi Alsın :D ')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('NoGameNoLife:tm: Sponsored')
       .setImage(`https://media.giphy.com/media/3o85xGocUH8RYoDKKs/giphy.gif`)
    return message.channel.sendEmbed(çayiç);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çay-iç',
  description: 'Atatürk resmi',
  usage: 'çay-iç'
};