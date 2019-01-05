const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('NoGameNoLife Eğlence Komutları 1')
.setDescription('`?1vs1 @kullanıcı @kullanıcı` **Etiketlediğin 2 Kişi 1vs1 Atar.**\n`?aşkölçer @kullanıcı` **Etiketlediğin Kişiyi Ne Kadar Sevdiğini Söyler.**\n`?atasözü` **Rasthgele Atasözü Söyler.**\n`?atatürk` **Atatürk Gifleri Atar.**\n`?ateş-et @kullanıcı` **Etiketlediğin Kişiye Ateş Edersin.**\n`?atom-at` **Atom Bombası Atar.**\n`?avatar @kullanıcı` **Etiketlediğin Kişinin Discord Avatarını Gösterir.**\n`?balık-tut` **Balık Tutarsın.**\n`?bayrak` **Türk Bayrağı Gifi Atar.**\n`?cool` **Cool Resimler Atar.**\n`?csgo <Hesap İsmi>` **Seçtiğin CSGO Hesabının İstatistiklerini Gösterir.**\n`?çay-doldur`**Çay Doldrursun.**\n`?çay-iç` **Çay İçersin.**\n`?espri` **Rastgele Espri Söyler.**\n`?evlen` **Evlenirsin <3 **\n`?fortnite <Hesap İsmi>` **Seçtiğin Fortnite Hesabının İstatistiklerini Gösterir.**\n`?google <kelime>` **Googleden Kelime Aratırsın.**\n`?hackle` **Heçkır Olursun.**\n`?havadurumu <Şehir>` **Arattığınız Şehirin Hava Durumuna Bakar. (Türkçe Harf Kullanmayın.)**\n`?stresçarkı` **Stres Atarsın.**\n``?sunucu-davet` **Bulunduğun Sunucunun Davet Linkini Atar.**\n`?tarih` **Tarihe Bakarsın.**\n`?uzaya-çık` **Uzaya Çıkarsın.**\n`?yardım` **Botun Komutlarını Gösterir.**\n`?yazıtura` **Yazı Tura Atarsın.**'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('`?1vs1 @kullanıcı @kullanıcı` **Etiketlediğin 2 Kişi 1vs1 Atar.**\n`?aşkölçer @kullanıcı` **Etiketlediğin Kişiyi Ne Kadar Sevdiğini Söyler.**\n`?atasözü` **Rasthgele Atasözü Söyler.**\n`?atatürk` **Atatürk Gifleri Atar.**\n`?ateş-et @kullanıcı` **Etiketlediğin Kişiye Ateş Edersin.**\n`?atom-at` **Atom Bombası Atar.**\n`?avatar @kullanıcı` **Etiketlediğin Kişinin Discord Avatarını Gösterir.**\n`?balık-tut` **Balık Tutarsın.**\n`?bayrak` **Türk Bayrağı Gifi Atar.**\n`?cool` **Cool Resimler Atar.**\n`?csgo <Hesap İsmi>` **Seçtiğin CSGO Hesabının İstatistiklerini Gösterir.**\n`?çay-doldur`**Çay Doldrursun.**\n`?çay-iç` **Çay İçersin.**\n`?espri` **Rastgele Espri Söyler.**\n`?evlen` **Evlenirsin <3 **\n`?fortnite <Hesap İsmi>` **Seçtiğin Fortnite Hesabının İstatistiklerini Gösterir.**\n`?google <kelime>` **Googleden Kelime Aratırsın.**\n`?hackle` **Heçkır Olursun.**\n`?havadurumu <Şehir>` **Arattığınız Şehirin Hava Durumuna Bakar. (Türkçe Harf Kullanmayın.)**')
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
  name: 'eğlence',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: '?eğlence'
};