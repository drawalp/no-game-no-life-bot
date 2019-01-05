exports.run = async (bot, message, args) => {
const { RichEmbed } = require('discord.js')
  if (message.author.id != '327064201245753344') return message.channel("Şuan Yazıyorum Geldi Mi?")
let embed = new RichEmbed()
  .setDescription("Yazıyoooor Yazıyoor!")
  .setFooter(bot.user.username, bot.user.avatarURL)
  .setColor(0x1D82B6)
message.channel.send(embed)
      message.channel.startTyping();
  
}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıyor', 
  description: 'Yazıyor Yazıyor...',
  usage: 'yazıyor'
};