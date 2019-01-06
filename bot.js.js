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

client.login(process.env.BOT_TOKEN);
