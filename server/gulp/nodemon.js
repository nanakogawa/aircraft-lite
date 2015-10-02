 var gulp = require('gulp'),
     nodemon = require('gulp-nodemon');

 gulp.task('nodemon', function() {
  nodemon({
   script: 'app.js',
   ext: 'js'
  })
  .on('start', 'test', function() {
   console.log('Start Event Fired')
  })
  .on('change', function() {
   console.log('Change Event Fired')
  })
  .on('restart', function() {
   console.log('Restart Event Fired')
  });
 });