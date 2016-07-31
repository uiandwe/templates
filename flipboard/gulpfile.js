var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('gulp-babel');

gulp.task('server', ['babel', 'minifycss', 'html'], function () {
    return browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('minifycss', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('index.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({stream:true}));
});



gulp.task('babel', function() {
    return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js/'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['babel']) ;
    gulp.watch('src/css/*.css',['minifycss']);
    gulp.watch('*.html',['html']);

});


gulp.task('default', ['server', 'watch']);