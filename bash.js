// Output a prompt
const command = require('./commands.js');
const chalk = require('chalk');
// REVIEW VIDEO: could leave off .js
const prompt = chalk.cyan('\nprompt > ');
process.stdout.write(prompt);


//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let commandNum = 0;
  const cmdString = data.toString().trim();
  const cmdList = cmdString.split(/\s*\|\s*/g); // any amount of whitespace, pipe, any amount of whitespace
  let singleCommand = cmdList[commandNum].split(' ');


  const done = function(output){
    if (commandNum === cmdList.length - 1) {
      process.stdout.write(output);
      process.stdout.write(prompt);
    } else {
      commandNum++;
      singleCommand = cmdList[commandNum].split(' ');
      command[singleCommand[0]](output, singleCommand.slice(1), done);
    }
  };


  command[singleCommand[0]](null, singleCommand.slice(1), done);
});

