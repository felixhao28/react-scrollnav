module.exports = (grunt) ->
  require("load-grunt-tasks")(grunt)
  grunt.registerTask "build", "to build", ["clean", "cjsx", "dist"]
  grunt.registerTask "dist", "to make distribution version", ["uglify"]
  grunt.registerTask "default", "to watch & compile", ["build", "watch"]
  pkg = grunt.file.readJSON "package.json"
  grunt.initConfig
    pkg: pkg

    clean:
      build:
        src: ["dist"]

    cjsx:
      build:
        options:
          bare: true
        files: [
            expand: true
            cwd: "scripts"
            src: ["**/*.coffee"]
            dest: "scripts"
            ext: ".js"
          ,
            expand: true
            cwd: "src"
            src: ["**/*.coffee"]
            dest: "lib"
            ext: ".js"
        ]

    uglify:
      dist:
        files:
          "dist/react-scrollnav.min.js": "lib/react-scrollnav.js"

    watch:
      cjsx:
        files: ["scripts/**/*.coffee", "src/**/*.coffee"]
        tasks: ["newer:cjsx"]