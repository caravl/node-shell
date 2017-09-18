// Output a prompt
var command = require('./commands.js');
process.stdout.write('prompt > ');


//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var commandNum = 0;
  var cmdString = data.toString().trim();
  var cmdList = cmdString.split(/\s*\|\s*/g); // any amount of whitespace, pipe, any amount of whitespace
  var singleCommand = cmdList[commandNum].split(' ');


  var done = function(output){
    if (commandNum === cmdList.length - 1) {
      process.stdout.write(output);
      process.stdout.write('\nprompt > ');
    } else {
      commandNum++;
      singleCommand = cmdList[commandNum].split(' ');
      command[singleCommand[0]](output, singleCommand.slice(1), done);
    }
  };


  command[singleCommand[0]](null, singleCommand.slice(1), done);
});

