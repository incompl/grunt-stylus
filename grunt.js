// Example grunt.js using stylus task.

module.exports = function(grunt) {

  grunt.loadTasks("grunt-stylus");

  // Project configuration.
  grunt.initConfig({
    stylus: {
      "exampleOutput": ["exampleInput/*"]
    }
  });

  // Default task.
  grunt.registerTask("default", "stylus");

};