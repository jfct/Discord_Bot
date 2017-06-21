const commando = require('discord.js-commando');


/**
 * Represents a sum.
 */
class HelloCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'emoji',
      group: 'general',
      memberName: 'emoji',
      description: ' Send emote!',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
     message.channel.sendMessage(":ok_hand:");
  }


}

module.exports = HelloCommand;
