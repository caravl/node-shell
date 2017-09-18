// Output a prompt
const command = require('./commands.js');
const chalk = require('chalk');
// REVIEW VIDEO: could leave off .js
const prompt = chalk.cyan('\nprompt > ');
process.stdout.write(prompt);


//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  //  REVIEW VIDEO: handles incorrect input with
  //  command not found error
  let commandNum = 0;
  const cmdString = data.toString().trim();
  const cmdList = cmdString.split(/\s*\|\s*/g); // any amount of whitespace, pipe, any amount of whitespace
  let singleCommand = cmdList[commandNum].split(' ')[0];
  let singleComArgs = cmdList[commandNum].split(' ').slice(1);


  //  REVIEW VIDEO: could pass arguments as string by doing .join(' ')
  const done = function(output){
    if (commandNum === cmdList.length - 1) {
      process.stdout.write(output);
      process.stdout.write(prompt);
    } else {
      commandNum++;
      singleCommand = cmdList[commandNum].split(' ')[0];
      singleComArgs = cmdList[commandNum].split(' ').slice(1);
      command[singleCommand](output, singleComArgs, done);
    }
  };


  command[singleCommand](null, singleComArgs, done);
});

