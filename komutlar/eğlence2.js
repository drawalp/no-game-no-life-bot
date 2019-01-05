const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('NoGameNoLife Eğlence Komutları 2')
.setDescription('`?topla <sayı> <sayı>` **Yazdığın Sayıları Toplar.**\n`?çıkar <sayı> <sayı>` **Yazdığın Sayıları Çıkarır.**\n`?böl <sayı> <sayı>` **Yazdığın Sayıları Böler.**\n`?çarp <sayı> <sayı>` **Yazdığın Sayıları Çarpar.**\n`?kaçcm` **Malafatın Boyunu Gösterir.**\n`?korkut` **BÖÖ Koyktun mu?**\n`?nahçek` **Nah Çekersin.**\n`?öp` **Birini Öpersin.**\n`?piyango` **Piyango Oynarsın.**\n`?playstore <oyun>` **Yazdığın Oyunu PlayStorede Aratırsın.**\n`?polis` **Polis Çağırırsın.**\n`?roblox <Hesap İsmi>` **Seçtiğin Roblox Hesabının İstatistiklerini Gösterir.**\n`?rolbilgi <Rol İsmi>` **Rolün Bilgilerine Bakarsın.**\n`?saat` **Türkiye Saatine Bakarsın.**\n`?sarıl` **Sarılırsın.**\n`?sunucu-simgesi` **Sunucunun Simgesini Gösterir.**\n`?sigara` **Sigara İçersin.**\n`?simit-ye` **Simit Yersin.**\n`?sins` **Sins Gifi Atar.**\n`?slots` **Slot Oynarsın.**\n`?şifre <uzunluk>` **Belirlediğin Uzunlukta Şifre Belirler.**\n`?uyu` **Uyursun.**\n`?windows` **Windows 10 Resmi Atar.**\n`?wwe-gif` **WWE Gifleri Atar.**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcı yardım komutunu kullandı.`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("HyRobot:tm:", type)
.setThumbnail(message.author.avatarURL)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence2',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: '?eğlence2'
};