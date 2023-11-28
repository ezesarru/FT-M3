const process = require('process');
const commands = require('./commands/index.js');
const { Z_ASCII } = require('zlib');

const print = (output) => {
   process.stdout.write(output)
   process.stdout.write('\nprompt > ')
}

const bash = () => {
   process.stdout.write('prompt > ')
   process.stdin.on('data', (data) => {
      const args = data.toString().trim().split(' ')
      let cmd = args.shift()
      if(commands.hasOwnProperty(cmd)) {
         commands[cmd](print, args.join(' '))
      } else {
         print(`command not found: ${cmd}`)
      } 
   })
}

bash();
module.exports = {
   print,
   bash,
};
