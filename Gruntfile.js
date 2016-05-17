module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmllint: {
      all: ["*.html"]
    },

    jshint: {
      all: ['assets/js/main.js']
    },

    uglify: {
      my_target: {
        files: {
          'assets/js/main.min.js': ['assets/js/main.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['jshint', 'uglify']);

};
