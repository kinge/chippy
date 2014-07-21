module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
          dist: {
            src: [
            'js/*.js', // All JS in the libs folder
           
            ],
            dest: 'dist/js/chippy.js',
          }
        },
        uglify: {
          build: {
            src: 'js/chippy.js',
            dest: 'dist/js/chippy.min.js'
          }
        },

        sass: {
         
          dev: {
            options: {
              style: 'expanded'
            },
            files: {
              'dist/css/chippy.css': 'scss/chippy.scss',
            }
          },
          dist: {                            
            options: {                       
              style: 'compressed'
            },
            files: {                        
              'dist/css/normalize.css': 'scss/normalize.scss',      
             } 
          }
        },

        watch: {
         
          sass: {
           files: '**/*.scss',
            tasks: ['sass']
          }
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-responsive-images');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
      grunt.registerTask('build', ['sass', 'concat', 'uglify']);
      grunt.registerTask('default', ['watch']);
};