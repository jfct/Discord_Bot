const commando = require('discord.js-commando');
const Discord = require('discord.js');

/**
 * Represents a sum.
 */
class LeaveCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'leave',
      group: 'general',
      memberName: 'leave',
      description: ' Tell the bot to leave the channel',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
    let voiceChannelID = message.member.voiceChannelID;

    for (var channel of message.channel.guild.channels) {
      if(message.member.id == 124341642160373760 && channel[1] instanceof Discord.VoiceChannel && channel[1].id === voiceChannelID){
          channel[1].leave()
            .catch(
              console.log('Bazou!')
            );
      }
    }
  }

}

module.exports = LeaveCommand;
