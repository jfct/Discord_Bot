const commando = require('discord.js-commando');

/**
 * Represents a sum.
 */
class SeisGostaCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: '6gosta',
      group: 'ttsmessage',
      memberName: '6gosta',
      description: ' Colega, 6gosta?',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
     message.channel.sendMessage('sayeesh goshta?', {'tts': true});

  }


}

module.exports = SeisGostaCommand;
