const commando = require('discord.js-commando');

/**
 * Represents a sum.
 */
class UptimeCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'uptime',
      group: 'general',
      memberName: 'uptime',
      description: ' Check the amount of time you have been signed up',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
    let fs = require('fs'),
        serverFlag = false,
        builder =
        [
          ' minuto',
          ' minutos',
          ' hora',
          ' horas',
        ],
        term, term2,
        seconds, minutes, hours, parseMinutes;

    fs.exists('./Users/' + message.author.id + '.json', (exists) => {
      if(exists) {
        fs.readFile('./Users/' + message.author.id + '.json', 'utf8', function (err, data) {
          if (err) throw err;

          let obj = JSON.parse(data);

          obj.servers.forEach(function(server) {
            seconds = (server.timeOnline / 1000) % 60 ;
            minutes = ((server.timeOnline / (1000*60)) % 60);
            hours   = ((server.timeOnline / (1000*60*60)) % 24);

            if(server.id === message.channel.id) {
              // If it's less than an Hour
              if(hours < 1 ) {
                term = (minutes === 1)? builder[0] : builder[1];
                message.reply('que nérd, andas aqui por volta de ' + minutes + term);

              } else {
                // Calculate the number os minutes
                parseMinutes = (((server.timeOnline - (Math.floor(hours) * 3600000)) / (1000*60)) % 60);

                // If the number of hours is not flat
                if( Math.floor(hours) !== hours) {
                  // Get terms to build string
                  term = (hours === 1)? builder[2] : builder[3];
                  term2 = (parseMinutes === 1)? builder[0] : builder[1];

                  message.reply('que nérd, andas aqui por volta de ' + Math.floor(hours) + term + ' e ' + parseMinutes + term2);

                } else {
                  // Get term to build string
                  term = (hours === 1)? builder[2] : builder[3];

                  message.reply('que nérd, andas aqui por volta de ' + Math.floor(hours) + term);
                }
              }

              // In case the user is signed up
              serverFlag = true;
            }
          });

          if(serverFlag === false){
            message.reply('Não estás inscrito, faz !signup para controlares o tempo colega.');
          }

        });
      }
    });

  }


}


module.exports = UptimeCommand;
