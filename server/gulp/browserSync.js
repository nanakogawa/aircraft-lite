 var gulp = require('gulp'),
     browserSync = require('browser-sync').create();

 gulp.task('browser-sync', function(){
  browserSync.init({
   proxy: 'localhost:1337'
  });
 });