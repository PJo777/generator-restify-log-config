var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var cleanDest = require('del');
var runSequence = require('run-sequence');
var env = require('yargs').argv;
var configEnv = 'development'; //default to development build. copy development properties.



if (env) {
  switch (env) {

    case "dev" :
    case "development" :
       configEnv = 'development';
       break;
    case "prod" :
    case "production" :
       configEnv = 'production';
       break;
    case "qa" :
       configEnv = 'qa';
       break;
    case "uat" :
       configEnv = 'uat';
       break;
    default:
         configEnv = 'development';
  }
}

var appFiles = ['./**/*.js','!gulpfile.js','!./node_modules'];

gulp.task('build-scripts', function () {
  
      return gulp.src(appFiles)
        //jshint(),
        //uglify(),
        //jshint.reporter('default'),
        //jshint.reporter('fail'),
        .pipe(gulp.dest('dist'));
});


gulp.task('copy:assets', function () {
    return gulp.src([ 'node_modules/**','config/environments/common.json', 'config/environments/'+configEnv+'.json' ],
        { base: './' })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return cleanDest.sync(['dist/**', '!dist']);
});


gulp.task('build', function(callback){
  runSequence('clean', ['build-scripts', 'copy:assets'], callback);
});


//watch task
gulp.task('default', function () {
  var options = {
    script: 'index.js',
    delayTime: 1,
    env: {
      'PORT': process.env.PORT || '8444'
    },
    ext: 'js'
  };
  return nodemon(options)
  .on('restart', function () {
    console.log('Restarting.....');
  });
  
});