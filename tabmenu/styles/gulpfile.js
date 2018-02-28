var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var jsPath = 'js';
var sassPath = 'sass';
var cssPath = 'css';
var root = '..';

// js圧縮
gulp.task('jsmin', function () {
    gulp.src(jsPath + '/base.js')
          .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(jsPath));
});

// compass
gulp.task('compass', function () {
  gulp.src(sassPath + '/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      comments: false,
      css: 'css/',
      sass: 'sass/'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(cssPath));
});

// browserSync
gulp.task('browser-sync', function () {
    browserSync({
       server: {
           baseDir: "../",
           index: "index.html",
       }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// watch
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(jsPath + '/**/*.js', ['jsmin', 'bs-reload']);
    gulp.watch(sassPath + '/**/*.scss', ['compass']);
    gulp.watch(cssPath + '/*.css', ['bs-reload']);
    gulp.watch(root + '/**/*.html', ['bs-reload']);
});

//デフォルトタスクとしてwatch実行
gulp.task('default', ['watch','browser-sync']);
