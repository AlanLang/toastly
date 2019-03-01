var gulp = require('gulp');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var path = require('path');
var webpackConfig = require("../webpack.config.js");

var paths = {
    tmp: './tmp',
    root: './',
    dist: './dist/',
    src: './src/',
    docs:'./docs/'
};

gulp.task('clean', function(){
  return gulp.src(paths.dist, {read: false,allowEmpty: true})
    .pipe(clean());
})

gulp.task('js:vanilla', function () {
    return gulp.src(path.join(paths.src + 'Toastly.tsx'))
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest(paths.dist))
      .pipe(gulp.dest(paths.docs));
});

gulp.task('default',gulp.series(gulp.parallel('clean','js:vanilla')));