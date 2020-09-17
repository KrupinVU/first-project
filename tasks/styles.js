const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const shorthand = require("gulp-shorthand");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

module.exports = function styles() {
  return (
    gulp
      .src("styles/test.css")
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(shorthand())
      /*.pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: "*",
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )*/
      .pipe(rename({ suffix: ".final" }))
      .pipe(gulp.dest("build/styles"))
  );
};
