import gulp from 'gulp'
const { src, dest, watch, series } = gulp
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import prefix from 'gulp-autoprefixer'
import rename from 'gulp-rename'

var paths = {
    styles: {
        srcWatched: './styles/sass/**/**/*.scss',
        src: './styles/sass/style.scss',
        dest: './styles/css/'
    }
}

function styleCompiler() {
    return src('./styles/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(rename('style.css'))
        .pipe(dest(paths.styles.dest))
    // .pipe(sass().on('error', sass.logError))
    // .pipe(prefix('last 2 versions'))
    // .pipe(minify())
    // .pipe(dest(paths.styles.dest));
}

function watchTask() {
    watch(paths.styles.srcWatched, styleCompiler)
}

export default series(styleCompiler, watchTask)