var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

var jsSources = [
    'components/scripts/scriptOne.js',
    'components/scripts/scriptTwo.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch('*.html', ['html']);
  gulp.watch(['js/script.js', '*.html']);
  gulp.watch(['*.html', '*.html']);
  livereload.listen();
});

gulp.task('default', ['js', 'html', 'watch']);
