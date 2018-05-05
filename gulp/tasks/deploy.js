'use strict';

module.exports = function () {
   var options = {
        remoteUrl: "https://github.com/Leon78ak/Leon78ak.github.io",
        branch: "master"
    };

  $.gulp.task('deploy', function () {
    return $.gulp.src('./build/**/*')
      .pipe($.gp.ghPages(options));
  });
};
