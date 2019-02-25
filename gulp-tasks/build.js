var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require('path');
var webpackConfig = require("../webpack.config.js");

var paths = {
    tmp: './tmp',
    root: './',
    dist: './dist/',
    src: './src/'
};

gulp.task('js:vanilla', function () {
    return gulp.src(path.join(paths.src + 'Toastly.js'))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default',gulp.series(gulp.parallel('js:vanilla')));