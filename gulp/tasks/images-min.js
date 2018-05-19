'use strict';

module.exports = function () {
  $.gulp.task('images-min', function () {
    return gulp.src("build/img/**/*.{png,jpg}")
      .pipe($.gp.imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true})
      ]))
      .pipe($.gulp.dest("build/img"));
  });
};
