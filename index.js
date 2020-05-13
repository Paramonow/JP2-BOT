const discord = require ("discord.js");
const client = new discord.Client(); 

const token = "Njg4MzkzMTA2NzAxMjg3NDM1.XrkvVA.3XzAOR1gWCF9TZDf1xTxDKLp3CU";
client.on ("ready", () => {
    console.log ("Gotowy");
    console.log (`${client.user.tag} wbija na discord`) 
    client.user.setPresence ("Witam");
    client.user.setActivity('elo', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
})

const prefix = "!jp2 ";
client.on ("message", async message => { 

  if (!message.guild) return;
if (message.content === 'Dość') {
if (message.member.voice.channel) {
const connection = await message.member.voice.channel.join();
const dispatcher = connection.play('D:\JP2BOT\mp3\Dość.mp3');
dispatcher.pause();
dispatcher.resume();

dispatcher.setVolume(0.5); 

dispatcher.on('finish', () => {
  console.log('Finished playing!');
});

dispatcher.destroy(); 
} else {
  message.reply('XYZ');
}}

    if (message.content.startsWith ("Witaj Karolu")) {
        message.reply ('Cześć');
    }
    if (message.content === 'Karol pokaż moją morde') {
      message.channel.send("Na kremówki Wadowickie, jaka brzydka")
      message.channel.send(message.author.displayAvatarURL());
    }
    if(message.content.startsWith("Jaki to jest ten herb ?")){
        return message.channel.send ("To jest herb Watykanu", {files: ["./images/herbWatykanu.jpg"]});
    }
    if (message.content.startsWith ("Karol dasz link do Okrutnika ?")) {
        message.channel.send ("Można jak najbardziej, https://www.youtube.com/watch?v=IjJ_H5s_jok&list=PLkHfHt307_sUbPcah40NtzDmId5wZDMa2&index=6");
    }
    if (message.content.startsWith ("A jak pan Jezus powiedział ?")) {
        message.channel.send ('Tak jak pan jezus powiedział');
    }
    if (message.content.startsWith ("A kto tu jest okrutnikiem ?")) {
        message.reply ();
    }
//for (let i=0; i<100; i++) {
    if (message.content.startsWith ("Karol wymyśl liczbe do 2137")) {
        number = 2137;
        KarolMatematyk = Math.floor (Math.random() * (number -1 + 1 )) +1;
        message.channel.send (KarolMatematyk);
    }
    client.on("guildMemberAdd", member =>{
      emitter.setMaxListeners(100)
      member.send("Witam na serwerze i nie zapominaj o nie informowaniu innych osób o tym  co się tu dzieje bo wylądujesz w Watykańskich piwnicach, pozdrawiam :heart:");
    });

    if (message.content.startsWith ("Karol zagrajmy w Rosyjską Ruletkę")) { 
    message.channel.send ("Ok ale pistoletem automatycznym")
    }
   
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(` Witaj w moim haremie "heart" ${member}`);
});

    if (message.content.startsWith ("Karol wyślij gipha")) {
        number = 26; 
        imageNumber = Math.floor (Math.random() * (number -1 + 1)) +1;
        message.channel.send ( {files: ["./giphs/" + imageNumber + ".gif"]} )
    }

    if (message.content.startsWith ("Karol wyślij cenzo")) {
    number = 149;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
    message.channel.send ( {files: ["./images/" + imageNumber + ".jpg"]} ) 
    }
  
    if (message.content.startsWith ("Karol która godzina ?")) {
        message.channel.send({embed: {
           color: 336600,
           author: {
             icon_url: client.user.avatarURL
           },
           timestamp: new Date(),
           footer: {
             icon_url: client.user.avatarURL,
             text: ""
           }
         }
        });
}
if (!message.guild) return;
  if (message.content.startsWith('Paszoł Won ')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.channel.send(`Wyjebałem ${user.tag}`);
          })
          .catch(err => {
            message.channel.send("Nie wyjebałem, gdyż przekupił mnie kremówkami");
            console.error(err);
          });
      } else {
        message.channel.send("Nie ma go tu");
      }
    } else {
      message.channel.send("Kogo mam wyjebać ?");
    }}

     if (message.content.startsWith ("Karol wyślij mi swoje mokre sny")) {
       number = 12; 
       imageNumber = Math.floor (Math.random() * (number -1 + 1)) +1;
         message.channel.send ("okej :heart:", {files: ["./dzieci/" + imageNumber + ".jpg"]}); 
     }

     if (message.content.startsWith('Do piwnicy z ')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {

          member
            .ban({
              reason: '',
            })
            .then(() => {
              message.channel.send(`${user.tag} znajduje się w mojej piwnicy`);
            })
            .catch(err => {
              message.channel.send('Nie wyjebałem, gdyż przekupił mnie kremówkami');
              console.error(err);
            });
        } else {
          message.channel.send("Nie ma go w naszej wspólnocie");
        }
      } else {
        message.channel.send("Co?");
      }
    }
     if (message.content.startsWith (prefix + "help")) {
        message.channel.send({embed: {
           color: 336600,
           author: {
             name: client.user.username,
             icon_url: client.user.avatarURL
             
           },
           title: "Komendy",
           description: "O to komendy.",
           fields: [{
               name: "Losowe cenzopapy:",
               value: "Karol wyślij cenzo"
             },  
             {
               name: "Losowe gify:",
               value: "Karol wyślij gipha"
             },
             {
               name: "HOT +18:",
               value: "Karol wyślij mi swoje mokre sny"
             },
             {
                name: "Fajna piosenka:",
                value: "Karol dasz link do Okrutnika ?"
            },
             {
              name: "Pytanie o godzine:",
              value: "Karol która godzina ?"
           },
             {
             name: "Liczenie do 2137",
             value: "Karol policz do 2137"
            },
            {
              name: "Losowa liczba",
              value: "Karol wymyśl liczbe do 2137"
             },
             {
              name: "Informacje o bocie",
              value: "Karol co wiesz o bocie ?"
             },
             {
              name: "Pytanie o okrutnika",
              value: "A kto tu jest okrutnikiem ?"
             },
             {
              name: "Prośba o zdjęcie swojego avatara",
              value: "Karol pokaż moją morde"
             },
          
          
           ],
           footer: {
             icon_url: client.user.avatarURL,
             text: "© Jan Paweł II"
           }
         }
        });
    }
     if (message.content.startsWith ("Karol co wiesz o bocie ?")) {
     message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Zarząd bota",
        description: "Bot zawdzięcz swoje istnienie tej osobie.",
        fields: [{
            name: "Twórca: ",
            value: "**_Paramonow__**."
         
         
            
        }
        ],
        
        footer: {
          icon_url: client.user.avatarURL,
          text: "Jan Paweł II ©"
        }
      }
     });
}},
)
client.login (process.env.BOT_TOKEN);
