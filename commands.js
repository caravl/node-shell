var fs = require('fs');

module.exports = {

  pwd: function() {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt > ');
  },
  date: function() {
    process.stdout.write(Date().toString());
    process.stdout.write('\nprompt > ');
  },
  ls: function() {fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
  });
      process.stdout.write('\nprompt > ');
  })
  },
  echo: function(args) {
    process.stdout.write(args.join(' '));
    process.stdout.write('\nprompt > ');
  },
  cat: function(filename) {
    // process.stdout.write(filename[0]);
    fs.readFile(filename[0], function(err, files) {
      if (err) throw err;
      process.stdout.write(files + '\nprompt > ');
    })
  },
  head: function(filename) {
    fs.readFile(filename[0], function(err, files) {
      if (err) throw err;
      var temp = files.toString().split('\n');
      process.stdout.write(temp.slice(0,5).join('\n') + '\nprompt > ');
    })
  },
  tail: function(filename) {
    fs.readFile(filename[0], function(err, files) {
      if (err) throw err;
      var temp = files.toString().split('\n');
      process.stdout.write(temp.slice(temp.length-5, temp.length).join('\n') + '\nprompt > ');
    })
  }, // skipped implementing sort and uniq 
  wc: function(filename) {
    fs.readFile(filename[0], function(err, files) {
      if (err) throw err;
      var temp = files.toString().split('\n');
      process.stdout.write(temp.length + '\nprompt > ');
    })
  },

}
