'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./source/sass/**/*.scss',
      $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug',
      $.gulp.series('pug'));
    $.gulp.watch('./source/img/svg/*.svg',
      $.gulp.series('svg'));
    $.gulp.watch('./source/js/*.js',
      $.gulp.series('js'));
  });
};
