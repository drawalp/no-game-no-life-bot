const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Evlen')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Bende Sizi Karı-Koca İlan Ediyorum.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('NoGameNoLife:tm: Sponsored')
       .setImage(`https://media.giphy.com/media/vTfFCC3rSfKco/giphy.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'evlen',
  description: 'Atatürk resmi',
  usage: 'evlen @kullanıcı'
};