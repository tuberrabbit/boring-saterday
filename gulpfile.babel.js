"use strict";
import gulp from 'gulp';
import connect from 'gulp-connect';
import sass from 'gulp-sass';
import del from 'del';
import babel from 'gulp-babel';
import runSequence from 'run-sequence';
import watch from 'gulp-watch';

gulp.task('connect', ()=> {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('sass', ()=> {
    return gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', ()=> {
    return gulp.src('./app/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ()=> {
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/**/*.js', ['js']);
    gulp.watch('./app/sass/**/*.scss', ['sass']);
    gulp.src('./app/**/*.html')
        .pipe(watch('./dist/**'))
        .pipe(connect.reload());
});

gulp.task('html', ()=> {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', ()=> {
    return del('dist/**');
});

gulp.task('default', ()=> {
    runSequence('clean',
        ['sass', 'js'],
        'html',
        'connect',
        'watch');
});