var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['components/scripts/scriptOne.js',
            'components/scripts/scriptTwo.js'])
          .pipe(uglify())
          .pipe(concat('script.js'))
          .pipe(gulp.dest('js'));
});