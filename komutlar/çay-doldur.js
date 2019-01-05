const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hanım Çay Koy')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const çaydoldur = new Discord.RichEmbed()
    .setAuthor('Hanım Bi Çay Doldur.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('NoGameNoLife:tm: Sponsored')
       .setImage(`https://media.giphy.com/media/jxuK7tUVYAsU/giphy.gif`)
    return message.channel.sendEmbed(çaydoldur);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çay-doldur',
  description: 'Atatürk resmi',
  usage: 'çay-doldur'
};