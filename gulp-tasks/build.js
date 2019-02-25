var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require('path');

var paths = {
    tmp: './tmp',
    root: './',
    dist: './dist/',
    src: './src/'
};

gulp.task('js:vanilla', function () {
    return gulp.src(path.join(paths.src + 'Toastly.js'))
        .pipe(webpack({
            output: {
                library: 'Toastly',
                libraryTarget: 'umd',
                filename: 'toastly.js'
            }
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default',gulp.series(gulp.parallel('js:vanilla')));