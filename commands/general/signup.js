const commando = require('discord.js-commando');

/**
 * Represents a sum.
 */
class SignupCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'signup',
      group: 'general',
      memberName: 'signup',
      description: ' Sign up to track your online time on the server',
    });

  }



  // TODO refactor code, introduce in class functions
  /**
  * @param {id} id Id of the user
  * @param {information} information Object to parse into JSON string
  */
  //  static writeFile(id, information) {
  //   console.log('Start of WriteFile');
  //   fs.writeFile('./Users/' + id + '.json', JSON.stringify(information), (err) => {
  //     if(err) {
  //       console.log('ERRO colega');
  //       throw err;
  //     } else {
  //       message.reply('estás agora a concorrer pa ser o maior nerd deste channel.');
  //     }
  //   });
  // }


  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
    let fs = require('fs'),
        userJSON = {
          id: message.author.id,
          username: message.author.username,
          servers:
          [
            {id: message.channel.id, timeOnline: 0},
          ]
        },
        obj,
        serverFlag = false;

    fs.exists('./Users/' + message.author.id + '.json', (exists) => {
      if(exists) {
        fs.readFile('./Users/' + message.author.id + '.json', function (err, data) {
          if (err) throw err;
          // Parse JSON file
          obj = JSON.parse(data);

          // Check if the user has signed up on the server
          obj.servers.forEach(function(server) {
            // If the serverID is the same than the current channel
            if(server.id === message.channel.id) {
              message.reply('já estás a ser seguido boi.');
              serverFlag = true;
            }
          });

          // If the server isn't saved on the user's info, write on the file
          if(serverFlag === false) {
            // Add new server to the object of servers
            // Mandatory because the file is already created, just need to edit the servers Array
            userJSON.servers = obj.servers;
            console.log(obj.servers);
            userJSON.servers.push({id: message.channel.id, timeOnline:0});
            console.log(userJSON);

            fs.writeFile('./Users/' + message.author.id + '.json', JSON.stringify(userJSON), (err) => {
              if(err) {
                throw err;
              } else {
                message.reply('estás agora a concorrer pa ser o maior nerd deste channel.');
              }
            });
          }
        });
      // In case the user file doesn't exist yet
      } else {
        fs.writeFile('./Users/' + message.author.id + '.json', JSON.stringify(userJSON), (err) => {
          if(err) {
            throw err;
          } else {
            message.reply('estás agora a concorrer pa ser o maior nerd deste channel.');
          }
        });
      }
    });

  }


}


module.exports = SignupCommand;
