var gulp = require(`gulp`)

gulp.task('copy', function (cb) {
    gulp.src('./index.html')
        .pipe(gulp.dest('./public/'));
    gulp.src('./main.js')
        .pipe(gulp.dest('./public/'));

    cb();
});
