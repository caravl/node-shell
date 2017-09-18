// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd'){
    process.stdout.write(process.argv[1]);
  } else if (cmd === 'date'){
    process.stdout.write(Date().toString());
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');

});

// console.log(process);

//pwd is process.argv[1]
//console.log(Date());


// date line should look like Mon Aug 01 2015 05:50:13 GMT-0400 (EDT)
//getDate gets us 18
//getHours
