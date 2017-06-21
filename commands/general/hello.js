const commando = require('discord.js-commando');

const Discord = require('discord.js');
const botclient = new Discord.Client();

/**
 * Represents a sum.
 */
class HelloCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'hello',
      group: 'general',
      memberName: 'hello',
      description: ' Say hi!',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
    message.reply("Olá, como estás colega?");

    // **bold**
    // _italic_
    // ~~crossed out~~
    // __underlined__

    let embed = new Discord.RichEmbed({
      title: 'Exp Embed',
      description: '**um teste**',
      timestamp: new Date(),
      footer: {
        text: 'Teste',
        icon_url: 'https://google.com/favicon.ico'
      },
      fields:[
        {name: 'Field1', value: 'test', inline: true},
        {name: 'Field1', value: 'test', inline: true},
        {name: 'Field1', value: 'test', inline: true}
      ],
      // thumbnail: {
      //   url: 'http://vignette1.wikia.nocookie.net/leagueoflegends/images/8/86/League_of_legends_logo_transparent.png/revision/latest?cb=20131023175853'
      // },
    });

    message.channel.sendEmbed(embed);

  }


}

module.exports = HelloCommand;
