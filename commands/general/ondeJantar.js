const commando = require('discord.js-commando');

const jokes = require('../../resources/rest.js')

/**
 * Represents a sum.
 */
class ondeJantarCommand extends commando.Command {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor(client) {
    super(client, {
      name: 'ondejantar',
      group: 'ttsmessage',
      memberName: 'ondejantar',
      description: ' Não te consegues decidir onde jantar? Pergunta ao bot',
    });
  }

  /**
   * @param {message} message Complete message from client
   * @param {args} args Arguments from the message
   * async
   */
  async run(message, args) {
     let joke = Math.floor(Math.random()*jokes.length),
         aux,
         first = [],
         second = [],
         third = [],
         choices = [];

     for(let a = 0; a < jokes.length; a++){
       choices.push(0);
     }

     if(args.length > 1){
       if(parseInt(args)){
         console.log('boas');
         for(let i = 0; i < args; i++){
           aux = Math.floor(Math.random()*jokes.length);
           choices[aux] = choices[aux] + 1;
         }

         first.push(jokes[choices.indexOf(Math.max.apply(Math, choices))]);
         first.push(Math.max.apply(Math, choices));
         choices.splice(choices.indexOf(Math.max.apply(Math, choices)), 1);
         second.push(jokes[choices.indexOf(Math.max.apply(Math, choices))]);
         second.push(Math.max.apply(Math, choices));
         choices.splice(choices.indexOf(Math.max.apply(Math, choices)), 1);
         third.push(jokes[choices.indexOf(Math.max.apply(Math, choices))]);
         third.push(Math.max.apply(Math, choices));

         message.channel.sendMessage('Resultados: \n1. ' + first[0] + ' com ' + first[1] + ' votos.' +
                                      '\n2. ' + second[0] + ' com ' + second[1] + ' votos.' +
                                      '\n3. ' + third[0] + ' com ' + third[1] + ' votos.' , {'tts': false});

       }
     } else {
       message.channel.sendMessage('Podes ir jantar -> ' + jokes[joke], {'tts': false});
     }

  }


}

module.exports = ondeJantarCommand;
