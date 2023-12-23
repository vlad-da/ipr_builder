// разработка

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const fs = require('fs');
const sourceMaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

const webpack = require('webpack-stream');
const imagemin = require('gulp-imagemin');


gulp.task('js-dist', function() {
    return gulp
        .src('./local/templates/main/components/bitrix/news.detail/page.services/src/js/*.js')
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'JS',
                message: 'Error <%= error.message %>',
                sound: false
            })
         }))
        .pipe(webpack(require('./../webpack.config')))
        .pipe(gulp.dest('./local/templates/main/components/bitrix/news.detail/page.services/dist/js'));
});

gulp.task('sass-dist', function(){
    return gulp
     .src('./local/templates/main/components/bitrix/news.detail/page.services/src/*.scss')
     .pipe(plumber({
        errorHandler: notify.onError({
            title: 'Styles',
            message: 'Error <%= error.message %>',
            sound: false
        })
     }))
     .pipe(sourceMaps.init())
     .pipe(sass())
     .pipe(sourceMaps.write())
     .pipe(gulp.dest('./local/templates/main/components/bitrix/news.detail/page.services/dist'))
});
 
gulp.task('main-sass-dist', function(){
    return gulp.src('./local/templates/main/scss/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Main-styles',
                message: 'Error <%= error.message %>',
                sound: false
            })
        }))
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./local/templates/main/dist'))
});

gulp.task('copy-img-dist', function() {
    return gulp
        .src('./local/templates/main/components/bitrix/news.detail/page.services/src/assets/**/*')
        .pipe(imagemin({verbose : true}))
        .pipe(gulp.dest('./local/templates/main/components/bitrix/news.detail/page.services/dist/img/'))
});

gulp.task('clean-dist', function(done) {
    if(fs.existsSync('./local/templates/main/components/bitrix/news.detail/page.services/dist/')) {
        return gulp.src('./local/templates/main/components/bitrix/news.detail/page.services/dist/')
        .pipe(clean());
    }
    done();
});

gulp.task('main-clean-dist', function(done) {
    if(fs.existsSync('./local/templates/main/dist/')) {
        return gulp.src('./local/templates/main/dist/')
        .pipe(clean());
    }
    done();
});

gulp.task('watch', function() {
    gulp.watch('./local/templates/main/components/bitrix/news.detail/page.services/**/*.scss', gulp.parallel('sass-dist'));
    gulp.watch('./local/templates/main/scss/**/*.scss', gulp.parallel('main-sass-dist'));
    gulp.watch('./local/templates/main/components/bitrix/news.detail/page.services/**/assets/**/*', gulp.parallel('copy-img-dist'));
    gulp.watch('./local/templates/main/components/bitrix/news.detail/page.services/**/*.scss', gulp.parallel('js-dist'));

})

