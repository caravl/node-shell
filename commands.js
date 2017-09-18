const fs = require('fs');
const request = require('request');

module.exports = {
  /* REVIEW VIDEO: could also define the functions outside of
   * modules.export and then in modules.export
   * do pwd: pwd, date: date, etc...
   */

  pwd: (stdin, file, done) => done(process.argv[1]),
    //REVIEW VIDEO: or process.cwd();

  date: (stdin, file, done) => done(Date().toString()),
    //REVIEW VIDEO: just Date()

  ls: function(stdin, file, done) {
    let output = '';
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        output += file.toString() + '\n';
      });
      done(output);
  });
  },

  // REVIEW VIDEO: they made updates to deal with $ and paths
  // We're not doing that
  echo: (stdin, args, done) => {
      const input = args.length > 0 ? args.join(' ') : stdin;
      done(input);
  },

  //  REVIEW VIDEO: they created cat, head and tail to deal with
  //  multiple file names
  //  REVIEW VIDEO: added encoding: utf8 in cat which tells readFile
  //  how to decode the file
      // using utf8 makes it return a string instead of a buffer
      // it's equivalent to leaving it out and then doing .toString()
  cat: function(stdin, filename, done) {
    if (filename[0]){
      fs.readFile(filename[0], {encoding: 'utf8'}, function(err, files) {
        if (err) throw err;
        done(files);
      });
    } else {
      done(stdin);
    }
  },

  head: function(stdin, filename, done) {
    if (filename[0]){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        const temp = files.toString().split('\n');
        const firstFive = temp.slice(0, 5).join('\n');
        done(firstFive);
      });
    } else {
      const temp = stdin.toString().split('\n');
      const firstFive = temp.slice(0, 5).join('\n');
      done(firstFive);
    }
  },

  tail: function(stdin, filename, done) {
    if (filename[0]){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        const temp = files.toString().split('\n');
        const lastFive = temp.slice(temp.length - 5, temp.length).join('\n');
        done(lastFive);
      });
    } else {
      const temp = stdin.toString().split('\n');
      const lastFive = temp.slice(temp.length - 5, temp.length).join('\n');
      done(lastFive);
    }
  }, // skipped implementing sort and uniq

  wc: function(stdin, filename, done) {
    if (filename[0]){
      fs.readFile(filename[0], function(err, files) {
        if (err) throw err;
        const temp = files.toString().split('\n');
        const length = temp.length.toString();
        done(length);
      });
    } else {
      const temp = stdin.toString().split('\n');
      const length = temp.length.toString();
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
