module.exports = function (grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            options:{
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: false,
                    base: ['app']
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            dev: {
                singleRun: false,
                autoWatch: true
            },
            prod: {
                singleRun: true
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: "protractor.conf.js"
            },
            run: { // for a small amount of tests, concurrency doesn't pay off
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('test', ['karma:prod', 'protractor:run']);
    grunt.registerTask('serve', ['connect:livereload:keepalive']);
};