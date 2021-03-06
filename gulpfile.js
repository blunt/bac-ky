var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    rename = require("gulp-rename"),
    simpleGrid = require('postcss-simple-grid'),
    easyImport = require('postcss-easy-import'),
    connect = require('gulp-connect');

//CSS
gulp.task('css', function () {
    var processors = [
        easyImport,
        simpleGrid({separator: ['--']}),
        cssnext({browsers: ['last 1 version']})
    ];
    return gulp.src('./src/_*.css')
        .pipe(postcss(processors))
        .pipe(rename("./css/main.css"))
        .pipe(gulp.dest('./'));
});

//Rename

//Server
gulp.task('connect', function() {
	connect.server({
		root: './',
        port: 4000,
		livereload: true
	});
});

//Watch
gulp.task('watch', function() {
	gulp.watch(['./src/**/_*.css'], ['css']);
});

gulp.task('default', ['css', 'connect', 'watch'], function() {});
