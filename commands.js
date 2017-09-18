var fs = require('fs');
var request = require('request');

module.exports = {

  pwd: function(stdin, file, done) {
    done(process.argv[1]);
  },

  date: function(stdin, file, done) {
    done(Date().toString());
  },

  ls: function(stdin, file, done) {
    var output = '';
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        output += file.toString() + '\n';
      });
      done(output);
  });
  },

  echo: function(stdin, args, done) {
      var input = args ? args.join(' ') : stdin;
      done(input);
  },

  cat: function(stdin, filename, done) {
    if (filename){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        done(files);
      });
    } else {
      done(stdin);
    }
  },

  head: function(stdin, filename, done) {
    if (filename){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        var temp = files.toString().split('\n');
        var firstFive = temp.slice(0, 5).join('\n');
        done(firstFive);
      });
    } else {
      var temp = stdin.toString().split('\n');
      var firstFive = temp.slice(0, 5).join('\n');
      done(firstFive);
    }
  },

  tail: function(stdin, filename, done) {
    if (filename){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        var temp = files.toString().split('\n');
        var lastFive = temp.slice(temp.length - 5, temp.length).join('\n');
        done(lastFive);
      });
    } else {
      var temp = stdin.toString().split('\n');
      var lastFive = temp.slice(temp.length - 5, temp.length).join('\n');
      done(lastFive);
    }
  }, // skipped implementing sort and uniq

  wc: function(stdin, filename, done) {
    if (filename){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        var temp = files.toString().split('\n');
        var length = temp.length.toString();
        done(length);
      });
    } else {
      var temp = stdin.toString().split('\n');
      var length = temp.length.toString();
      done(length);
    }
  },

  curl: function(stdin, urlNameArray, done){
    request(urlNameArray[0], function(err, response, body){
      if (err){ throw err; }
      if (body){ done(body);}
    });
  },


};
