module.exports = {
  thankYouFunction: function(bot) {
    bot.on('message', (message) =>{
      if(message.content === 'obrigado bot' ||
         message.content === 'po caralho bot' ||
         message.content === 'tij bot') {
           message.channel.sendMessage(':ok_hand:');
       }
    });
  },
};
