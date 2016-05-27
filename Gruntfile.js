module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 8001,
                    keepalive: true,
                    //base: ['./app']  //注意根目录的配置
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);
}