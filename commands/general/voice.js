const commando = require('discord.js-commando');
const Discord = require('discord.js');

const fs = require('fs');
const path = require( 'path' );

/**
 * Represents a sum.
 */
class VoiceCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'voice',
      group: 'general',
      memberName: 'voice',
      description: ' Send voice snippets',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
    // Get voice channel id from member who sends the message
    let voiceChannelID = message.member.voiceChannelID,
        dispatcher,
        embed = new Discord.RichEmbed({
          title: 'Lista de comandos de som do Super Mantij',
          description: '**Utilizar p.ex: "!voice zorlak 5cm"**',
          timestamp: new Date(),
          footer: {
            text: 'Best Sounds 2017',
            icon_url: 'https://google.com/favicon.ico'
          },
          // fields:[
          // ],
          // thumbnail: {
          //   url: ''
          // },
        }),
        fromPath,
        mp3array,
        folderRead = 0,
        totalFolders = 0;

    if(args.toLowerCase() === 'list'){
      fs.readdir( '././resources/mp3', function(err, files) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        }
        // Determine the total number os folders to a variable to help with the async operations
        totalFolders = files.length;

        // Reading folders
        files.forEach( function( file, index ) {
          fromPath = path.join( '././resources/mp3', file );

          fs.stat( fromPath, function( error, stat ) {
            // Checking directories, true
            if(stat.isDirectory()){
              // Reading files inside directories
              fs.readdir( '././resources/mp3/'+ file +'/', function (err, files) {
                mp3array = [];
                files.forEach( function(file,index) {
                  mp3array.push(file.replace(/.mp3/g, ''));
                })

                embed.addField(file, mp3array, true);

                folderRead++;

                if(folderRead == totalFolders){
                  message.channel.sendEmbed(embed);
                }
              });
            }
          });
        });
      });

    } else {
      for (var channel of message.channel.guild.channels) {
        if(channel[1] instanceof Discord.VoiceChannel && channel[1].id === voiceChannelID){
          let helper = args.split(' ');
          if(args.length > 1) {
              channel[1].join()
                .then(connection => {
                  if(!connection.speaking){
                    if(helper.length > 2){
                      message.reply("Bad Request - 41689821");
                    } else if(helper.length != 0){
                      if(helper.length == 2) {
                        dispatcher = connection.playFile('././resources/mp3/' + helper[0] + '/' + helper[1] + '.mp3');
                      }
                      else {
                        dispatcher = connection.playFile('././resources/mp3/' + helper + '.mp3');
                      }
                      dispatcher.on("end", end => {
                        console.log('dispatcher end');
                      });
                    }
                  // In case the bot is already "speaking"
                  // Queue system
                  } else {
                    message.reply("Já estou a bombar colega...");
                  }
                })
                .catch(
                  console.log('Apanhou!')
                );
            }
        }
      }
    }
  }

}

module.exports = VoiceCommand;
