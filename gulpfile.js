'use strict';

global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create()
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'svg',
    'js',
    'copy'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
