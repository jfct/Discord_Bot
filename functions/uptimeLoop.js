class UptimeLoop {
  /**
   * @param {client} client On loading, pass the client.
   */
  constructor() {
  }

  async run(client) {
    let fs = require('fs'),
        id = client.id,
        obj,
        arrayServer;

    setInterval(function() {
      arrayServer = [];

      // Loop the "guilds" where the bot is
      client.guilds.forEach(function(value, key) {
        // Loop each member that is online
        client.guilds.get(key).presences.forEach(function(presence, userID) {
          // If the user is not a bot
          if(!client.guilds.get(key).member(userID).user.bot) {
            // Checking the file
            fs.exists('./Users/' + userID + '.json', (exists) => {
              if(exists) {
                fs.readFile('./Users/' + userID + '.json', function (err, data) {
                  if (err) throw err;

                  // Modificar escrita, servidor correto*
                  obj = JSON.parse(data);

                  obj.servers.forEach(function(server) {
                    // If the serverID is the same than the key
                    if(server.id === key) {
                      server.timeOnline = server.timeOnline + 60000;

                      fs.writeFile('./Users/' + userID + '.json', JSON.stringify(obj), (err) => {
                        if(err) throw err;
                        //console.log('Writing - uptimeLoop - ' + new Date());
                      });
                      
                    }
                    // arrayServer.push(server);
                  });
                });
              }
            });
          }
        });
      })}, 60000);

    // botClient.guilds.forEach(function(value, key) {
    //   console.log(key);
    //   botClient.guilds.get('124341886877040640').presences.forEach(function(value, key) {
    //     if(!bot.guilds.get('124341886877040640').member(key).user.bot) {
    //       new UptimeLoop(bot.guilds.get('124341886877040640').member(key).user).run();
    //     }
    //   });
    // });

  }


}

module.exports = UptimeLoop;
