 var gulp = require('gulp'),
     nodemon = require('gulp-nodemon'),
     mocha = require('gulp-mocha'),
     uglify = require('gulp-uglify'),
     minifyHTML = require('gulp-minify-html'),
     minifyCSS = require('gulp-minify-css'),
     imagemin = require('gulp-imagemin'),
     pngquant = require('imagemin-pngquant');

 gulp.task('nodemon', function() {
  nodemon({
   script: 'app.js',
   ext: 'js'
  })
  .on('stop', function() {
   console.log('Stop Event Fired')
  })
  .on('start', ['compress'], ['minify-html'], ['minify-css'], ['minify-img'], ['test'], function() {
   console.log('Start Event Fired')
  })
  .on('restart', function() {
   console.log('Restart Event Fired')
  });
 });

 gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
   .pipe(mocha());
 });

 gulp.task('compress', function() {
  return gulp.src('../js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('../public/dist'))
 });

 gulp.task('minify-html', function() {
  var opts = {
   conditionals: true,
   spare: true
  };

  return gulp.src('../html/*.html')
   .pipe(minifyHTML(opts))
   .pipe(gulp.dest('../public/dist'))
 });

 gulp.task('minify-css', function() {
  return gulp.src('../css/*.css')
   .pipe(minifyCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('../public/dist'));
 });

 gulp.task('minify-img', function() {
  return gulp.src('../images/*')
   .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
   }))
   .pipe(gulp.dest('../public/dist/images'));
 });

 gulp.task('default', ['nodemon']);