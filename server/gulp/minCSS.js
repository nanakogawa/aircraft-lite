 var gulp = require('gulp'),
     minifyCSS = require('gulp-minify-css');

 gulp.task('minify-css', function() {
  return gulp.src('../public/css/*.css')
   .pipe(minifyCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('../public/dist'));
 });