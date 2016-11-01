var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    rename = require("gulp-rename"),
    connect = require('gulp-connect');

//CSS
gulp.task('css', function () {
    var processors = [
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
		livereload: true
	});
});

//Watch
gulp.task('watch', function() {
	gulp.watch(['./src/_*.css'], ['css']);
});

gulp.task('default', ['css', 'connect', 'watch'], function() {});
