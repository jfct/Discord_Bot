/**
 * Queue System class
 * Manages the queue of the bot, stacks to a limited amount of requests
 * and plays them one by one
 */
class QueueSystem {
  /**
   * @param {empty} empty.
   */
  constructor() {
    let fs = require('fs');
    let template = {
          '_comment': 'template to use, 1st member is the request, 2nd member is the user that requested it',
          'queue': [{'empty': ''}],
        };

    fs.writeFile('./resources/queue.json', JSON.stringify(template), (err) => {
      if(err) throw err;
    });
  }

  checkQueue(){
    let fs = require('fs');
    fs.exists('./resources/queue.json', (exists) => {
      if(exists) {
        fs.readFile('./resources/queue.json', function (err, data) {
          if (err) throw err;

          // Modificar escrita, servidor correto*
          obj = JSON.parse(data);
          console.log(obj);
        });
      }
    });
  }

  addQueue(){
  }

  removeQueue(){
  }


}

module.exports = QueueSystem;
