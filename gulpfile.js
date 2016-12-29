'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('scss', function() {
  return gulp.src('src/stylesheets/structure.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(plugins.size({
      title: 'scss'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('scss:lint', function() {
  return gulp.src('src/stylesheets/**/*.scss')
    .pipe(plugins.sassLint({
      configFile: 'sass-lint.yml'
    }))
    .pipe(plugins.sassLint.format())
    .pipe(plugins.sassLint.failOnError());
});

gulp.task('watch', function() {
  gulp.watch('src/stylesheets/**/*.scss', gulp.series('scss:lint', 'scss'));
});
