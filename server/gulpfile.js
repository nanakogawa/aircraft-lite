 var gulp = require('gulp'),
     mocha = require('gulp-mocha'),
     requireDir = require('require-dir'),
     dir = requireDir('gulp');

 gulp.task('test', function() {
  return gulp.src('test.js')
   .pipe(mocha());
 });

 gulp.task('default', ['nodemon']);