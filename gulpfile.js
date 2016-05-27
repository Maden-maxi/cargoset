"use strict";
var gulp = require('gulp');

//jade
var jade = require('jade'),
    katex = require('katex'),
    gulpJade = require('gulp-jade');
jade.filters.katex = katex.renderToString;
jade.filters.shoutFilter = function (str) {
  return str + '!!!!';
}
gulp.task('jade', function() {
    return gulp.src('./app/index.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./app'))
});
gulp.task('watch:jade', function () {
    gulp.watch('./app/**/*.jade', ['jade']);
});
//stylus
var postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
    rucksack = require('rucksack-css'),
    lost = require('lost'),
    stylus = require('gulp-stylus'),
    nib = require('nib');
gulp.task('stylus',function () {
    var processors = [
        cssnext({}),
        rucksack,
        lost,
    ];
    return gulp.src('./app/styl/style.styl')
        .pipe(stylus({use:[nib()]}))
        //.pipe(stylus())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./app/css'));
});
gulp.task('watch:stylus', function () {
    gulp.watch('./app/**/*.styl', ['stylus']);
});

//bower
var wiredep = require('gulp-wiredep');
gulp.task('bower', function () {
  gulp.src('app/index.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});
gulp.task('watch:bower', function () {
  gulp.watch('bower.json', ['bower']);
});
//image 
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function () {
    gulp.src('app/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'API_KEY',
            log: true
        }))
        .pipe(gulp.dest('dist/images'));
});
//fonts
var cssfont64 = require('gulp-cssfont64');
 
gulp.task('fonts', function () {
    gulp.src('app/fonts/*.ttf')
        .pipe(cssfont64())
        .pipe(gulp.dest('dist/fonts'));
});
//deploy
var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css');
 
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
   gulp.watch('./app/**/*.jade', ['jade']); 
   gulp.watch('./app/**/*.styl', ['stylus']);
   gulp.watch('bower.json', ['bower']);
});