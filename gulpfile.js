var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var jsSources = [
  'components/lib/jquery/jquery.js',
  'components/scripts/*.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch('*.html', function(e) {
    server.changed(e.path);
  });
  gulp.watch(jsSources,['js']);
})

gulp.task('default', ['js', 'watch']);