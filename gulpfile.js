const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');

const jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('inject', function() {
    const wiredep = require('gulp-wiredep');
    const inject = require('gulp-inject');

    const injectSrc = gulp.src(['./public/css/*.css',
        './public/js/*.js'], {read: false});

    const injectOptions = {
        ignorePath: '/public'
    };

    const options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    }
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});
