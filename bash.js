// Output a prompt
var command = require('./commands.js');

process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmds = data.toString().trim().split(' ');// remove the newline
  var cmd = cmds[0];
    // 
    // cmd === 'pwd' || cmd === 'date' || cmd === 'ls' || cmd === 'echo' || cmd === 'cat'){
    command[cmd](cmds.slice(1));

    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');




});

// console.log(process);

//pwd is process.argv[1]
//console.log(Date());


// date line should look like Mon Aug 01 2015 05:50:13 GMT-0400 (EDT)
//getDate gets us 18
//getHours
