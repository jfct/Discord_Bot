const commando = require('discord.js-commando');

/**
 * Represents a sum.
 */
class Par7Command extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'par7',
      group: 'ttsmessage',
      memberName: 'par7',
      description: ' Colega, par 7',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
     message.channel.sendMessage('pahr sete', {'tts': true});

  }


}

module.exports = Par7Command;
