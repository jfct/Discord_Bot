'use strict';


// Login token
const token = 'MjgxODQzMzM0MjYyMjkyNDgw.C_EGoQ.072cki_ckYCINC873yrTT2O6LuU';

// Constants of the framework 'discord.js-commando'
const commando = require('discord.js-commando');
const bot = new commando.Client();

// Constants of the framework 'discord.js'
const Discord = require('discord.js');
const botClient = new Discord.Client();

// const botGuild = new Discord.Guild();

// fetching classes
const UptimeLoop = require('./functions/uptimeLoop.js');
const queueSystem = require('./functions/queueSystem.js');

// Includes
const checkText = require('./functions/checkText.js');

// Initiate functions
checkText.thankYouFunction(botClient);

//  Register a group of commands
//  Every command must be in a group
bot.registry.registerGroup('general', 'General');
bot.registry.registerGroup('ttsmessage', 'TTS Message');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


// Main modules login
botClient.login(token);
bot.login(token);

// Boot the queue System
let queue = new queueSystem();

// Event to signal the availability of the bot
botClient.on('ready', function() {
  new UptimeLoop().run(botClient);

  // Check queue
  // queue.cleanQueue();
  queue.addQueue();
});
