"use strict";
import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('connect', ()=> {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', ()=> {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', ()=> {
    gulp.watch(['./app/*.html'], ['html']);
})

gulp.task('default', ['connect', 'watch']);