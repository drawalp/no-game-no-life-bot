const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

const activities_list = [
    "7/24 Aktif", 
    "2019'un Tadını Çıkartın",
    "https://discord.gg/HN5PPDN", 
    "?yardım | Yardım Al",
	"Yeni Komutlar Eklendi"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 3000); // Runs this every 10 seconds.
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Botumuz Daha Yapımdadır.', 
            type: "STREAMING",
            url: "https://www.twitch.tv/keremtwitch"
        }
    });
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 's.a') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 's.a.') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleykum') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleykum') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Aleyküm Selam Hoşgeldin :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mrb') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Merhaba :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mrhb') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Merhaba :heart:  **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500); 
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bb') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'by') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bye') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bye bye') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart: **');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'görüşürüz') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'grşrz') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Görüşürüz :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aeo') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Eyvallah Sende :heart: ** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'allaha emanet') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Eyvallah Sende :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'allaha emanet olun') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('**Eyvallah Sende :heart:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'afk') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('AFK Oldu');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ben afk') {
        setTimeout(() => {
      msg.react('');
    }, 1000);
            setTimeout(() => {
      msg.react('');
    }, 1500);
    msg.reply('AFK Oldu');
  }
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'orospu') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === '0r0spu') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'piç') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'pıç') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'pic') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'pıc') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'p1c') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'p1ç') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'sikim') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'sik') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'sikeyim') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'sikem') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'sikerim') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'göt') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'got') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'yarrak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'yarak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'taşak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'taşşak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'daşak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'daşşak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'pezevenk') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'orospu çocuğu') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'orospu cocugu') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'gavat') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'amk') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'aq') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'amq') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'am') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'oç') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'oc') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'öç') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'öc') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'salak') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'aptal') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'beyinsiz') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'gerizekalı') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'anskm') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'lan') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'kes') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'ağla') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'mal') { 
msg.delete(30) 
msg.reply('Argo Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'yarram') { 
msg.delete(30) 
msg.reply('küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'yarak') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on('message', msg => { 
if (msg.content.toLowerCase() === 'yaram') { 
msg.delete(30) 
msg.reply('Küfür Engellendi :rage: '); 
} 
});

client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("523912113094131723");
  
  let general = guild.channels.find('mod-log', 'general');
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Bot Bir Sunucuya Eklendi')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Bir Sunucuya Katıldım QnQ')
      .addField('Sunucu Bilgileri', `İsim: **${guild.name}** \nID: **${guild.id}**`)
      
    guildCreateChannel.send(joinEmbed);
  });
}); 

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("523912113094131723");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Bot Bir Sunucudan Ayrıldı')
    .setThumbnail(guild.iconURL)
    .addField('Sunucu Bilgileri', `İsim: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const { Client } = require('discord.js');
const YouTube = require('simple-youtube-api');
const yt = require('ytdl-core');
const ayarlar = require('./ayarlar.json');
const client = new Client();

const youtube = new YouTube(ayarlar.api);



let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`${ayarlar.prefix}add <url> ile birkaç müzik ekle`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Zaten Çalınan var');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Sıra boş').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Çalınan: **${song.title}** talep eden: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : ayarlar.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(ayarlar.prefix + 'pause')) {
					msg.channel.sendMessage('**durduruldu**').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(ayarlar.prefix + 'resume')){
					msg.channel.sendMessage('**devam ediyor**').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(ayarlar.prefix + 'skip')){
					msg.channel.sendMessage('**geçildi**').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Şiddet: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(ayarlar.prefix + 'time')){
					msg.channel.sendMessage(`Süre: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('Hata: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Bir kanala katıl.');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'leave': (msg) => {
					const voiceChannel = msg.member.voiceChannel;

			voiceChannel.leave()
		
	},
	'add': async (msg) => {
		const args = msg.content.split(' ');
		const searchString = args.slice(1).join(' ');
		const url2 = args[1].replace(/<.+>/g, '1');
		
		try {
			var video = await youtube.getVideo(url2)
		} catch (error) {
			try {
				var videos = await youtube.searchVideos(searchString, 1)
				var video = await youtube.getVideoByID(videos[0].id)
			} catch (err) {
				console.log(err)
				message.channel.send('Bir hata oluştu: ' + err)
			};
		};
		
		var url = `https://www.youtube.com/watch?v=${video.id}`
		
		if (url == '' || url === undefined) return msg.channel.sendMessage(`Bir YouTube linki eklemek için ${ayarlar.prefix}add <url> yazınız`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Geçersiz YouTube Bağlantısı: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`sıraya **${info.title}** eklendi`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Sıraya ilk önce bazı şarkıları ekle : ${ayarlar.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Talep eden: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Müzik Kuyruğu:**__ Şu anda **${tosend.length}** şarkı sırada ${(tosend.length > 15 ? '*[Sadece 15 tanesi gösteriliyor]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	}
};

client.on('ready', () => {
	console.log('ready!');
});

client.on('message', msg => {
	if (!msg.content.startsWith(ayarlar.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(ayarlar.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(ayarlar.prefix.length).split(' ')[0]](msg);
});

client.login(process.env.BOT_TOKEN);
