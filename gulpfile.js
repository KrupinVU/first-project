const gulp = require("gulp");
const styles = require("./tasks/styles");
const imageMinify = require("./tasks/imageMinify");

module.exports.build = gulp.parallel(styles, imageMinify);
