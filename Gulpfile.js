var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var sassPaths = [
  'bower_components/foundation-sites/scss'
];

gulp.task('sass', function(){
  gulp.src('assets/scss/**/*.scss')
    .pipe(sass({includePaths: sassPaths}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task('watch', ['sass', 'browserSync'],function(){
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/javascript/**/*.js', browserSync.reload);
  gulp.watch('*.html', browserSync.reload); 
});
