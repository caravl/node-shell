// Output a prompt
var command = require('./commands.js');

var done = function(output){
  //show the output
  process.stdout.write(output);
  //show the prompt
  process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  // var cmds = data.toString().trim().split(' ');// remove the newline
  // var cmd = cmds[0];
  var cmdString = data.toString().trim();
  var cmdList = cmdString.split(/\s*\|\s*/g) // any amount of whitespace, pipe, any amount of whitespace
  // process.stdout.write(cmdList.toString());
  // process.stdout.write('prompt > ');
  var firstCommand = cmdList[0].split(' ');
  command[firstCommand[0]](null, firstCommand.slice(1), done);
});
