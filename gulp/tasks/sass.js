'use strict';

module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('./source/sass/main.scss')
      .pipe($.gp.plumber())
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({
        title: 'Style'
      }))
      .pipe($.gp.autoprefixer({
        browsers: [
          'last 3 version',
          '> 1%'
        ]
      }))
      // .pipe($.gp.cssUnit({
      //   type: 'px-to-rem',
      //   rootSize: 16
      // }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('./build/css'))
      .pipe($.gulp.dest('./css'));
  });
};
