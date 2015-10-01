 var gulp = require('gulp'),
     nodemon = require('gulp-nodemon'),
     mocha = require('gulp-mocha');

 gulp.task('nodemon', function() {
  nodemon({
   script: 'app.js',
   ext: 'js'
  })
  .on('stop', function() {
   console.log('Stop Event Fired')
  })
  .on('start', function() {
   console.log('Start Event Fired')
  })
  .on('restart', function() {
   console.log('Restart Event Fired');
  });
 });

 gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
   .pipe(mocha());
 });

 gulp.task('default', ['nodemon', 'test']);