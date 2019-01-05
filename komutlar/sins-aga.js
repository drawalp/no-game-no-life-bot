const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Ulan Sins Aga Seviliyon Vallah :) ')
.setDescription('NoGameNoLife:tm: Sponsored')
.setImage('https://media.giphy.com/media/tpgAJCXrOa6Mo/giphy.gif'));
const embed = new Discord.RichEmbed()

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sins',
  description: 'kedileri gösterir.',
  usage: 'sins-aga'
};
