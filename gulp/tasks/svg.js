"use strict";

module.exports = function() {
  $.gulp.task("svg", function() {
    return $.gulp.src("./source/img/svg/*.svg")
    // minify svg
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      // remove all fill, style and stroke declarations in out shapes
      .pipe($.gp.cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true }
      }))
      // cheerio plugin create unnecessary string "&gt;", so replace it.
      .pipe($.gp.replace("&gt;", ">"))
      // build svg sprite.svg
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg",
            render: {
              scss: {
                dest:"../../../../sass/_sprite.scss",
                template: "./source/sass/templates/_sprite_template.scss"
              }
            }
          }
        }
      }))
      .pipe($.gulp.dest('./source/img/svg/sprite/'));
  })
};

// gulp.task('svgSpriteBuild', function () {
//   return gulp.src(assetsDir + 'i/icons/*.svg')
//   // minify svg
//     .pipe(svgmin({
//       js2svg: {
//         pretty: true
//       }
//     }))
//     // remove all fill, style and stroke declarations in out shapes
//     .pipe(cheerio({
//       run: function ($) {
//         $('[fill]').removeAttr('fill');
//         $('[stroke]').removeAttr('stroke');
//         $('[style]').removeAttr('style');
//       },
//       parserOptions: {xmlMode: true}
//     }))
//     // cheerio plugin create unnecessary string '&gt;', so replace it.
//     .pipe(replace('&gt;', '>'))
//     // build svg sprite
//     .pipe(svgSprite({
//       mode: {
//         symbol: {
//           sprite: "../sprite.svg",
//           render: {
//             scss: {
//               dest:'../../../sass/_sprite.scss',
//               template: assetsDir + "sass/templates/_sprite_template.scss"
//             }
//           }
//         }
//       }
//     }))
//     .pipe(gulp.dest(assetsDir + 'i/sprite/'));
// });
