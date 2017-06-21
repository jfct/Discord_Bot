const commando = require('discord.js-commando');

//const jokes = require('../../resources/jokes.js')

/**
 * Represents a sum.
 */
class JokeCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'joke',
      group: 'ttsmessage',
      memberName: 'joke',
      description: ' Super Mantij tells a joke',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
     //var joke = Math.floor(Math.random()*jokes.length) + 1;
     // message.channel.sendMessage(jokes[joke], {'tts': true});
  }


}

module.exports = JokeCommand;
