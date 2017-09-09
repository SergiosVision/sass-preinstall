var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return sass('process/sass/style.scss', {
      sourcemap: true,
      style: 'expanded' //expanded // Can be compressed
    })
    .on('error', (err) => {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/Theme/css'))
});

gulp.task('watch', () => {
  gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('webserver', () => {
    gulp.src('builds/Theme/')
        .pipe(webserver({
            livereload: true,
            port: 80
        }));
});

gulp.task('autoprefix', () => {
    return gulp.src('builds/Theme/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('builds/Theme/css/prefixedVersion'));
})

gulp.task('default', ['sass', 'watch', 'webserver', 'autoprefix']);
