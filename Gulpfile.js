var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();

//define the default task and add the watch task to it
gulp.task('default', ['build-styles', 'es6'], function(gulpCallback){

  browserSync.init({
    server: './',
    open: true
  }, function callback(){
    gulp.watch(['index.html', 'access-control.html', 'documents.html', 'stats.html', 'home-results'],  browserSync.reload);
    gulp.watch('source/scss/**/*.scss', ['build-styles']);
    gulp.watch('source/javascript/**/*.js', ['es6'])
    gulpCallback();
  });
});

gulp.task('es6', function(){
  return gulp.src('source/javascript/**/*.js')
         .pipe(babel({presets: ['es2015']}))
         .pipe(gulp.dest('public/assets/javascript'))
});


gulp.task('build-styles', function(){
  return gulp.src('source/scss/**/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'))
    .pipe(browserSync.stream());
});
