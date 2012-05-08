/*
 * stylus task for grunt
 * Copyright (c) 2012 Greg Smith
 * This work is public domain.
 */

module.exports = function(grunt) {

  var stylus = require("stylus");

  grunt.registerTask("stylus", "Compile Stylus files.", function(data, outputPath) {
    var files = file.expand(data);
    files.forEach(function(fileName) {
      var str = file.read(fileName);
      var newFileName = fileName.match(/(\w+).styl/)[1] + ".css";
      var newFilePath = outputPath + "/" + newFileName;
      stylus.render(str, {filename: newFileName}, function(err, css){
        if (err) {
          fail.warn(err.message);
        }
        else {
          file.write(newFilePath, css);
          log.writeln("File \"" + newFilePath + "\" created.");
        }
      });
    });
  });

};