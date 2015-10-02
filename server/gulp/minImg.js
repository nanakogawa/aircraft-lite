 var gulp = require('gulp'),
 imagemin = require('gulp-imagemin'),
 pngquant = require('imagemin-pngquant');

 gulp.task('minify-img', function() {
  return gulp.src('../public/images/*')
   .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
   }))
   .pipe(gulp.dest('../public/dist/images'));
 });