var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var coffeeSources = [
  'components/coffee/*.coffee'
];

var jsSources = [
  'components/lib/jquery/jquery.js',
  'components/scripts/*.js'
];

var sassSources = [
'components/sass/*.scss'
]

gulp.task('sass', function(){
    gulp.src(sassSources)
    .pipe(sass({ lineNumbers: true, style: 'expanded' }))
      .on('error', gutil.log)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('coffee', function() {
  gulp.src('components/coffee/*.coffee')
    .pipe(coffee({bare: true})
        .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function() {
  gulp.src('components/scripts/*.js')
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(['js/script.js', '*.html'], function(e) {
    server.changed(e.path);
  });
  gulp.watch(sassSources,['sass']);
  gulp.watch(coffeeSources,['coffee']);
  gulp.watch(jsSources,['js']);
})

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass', 'js', 'coffee','watch']);
