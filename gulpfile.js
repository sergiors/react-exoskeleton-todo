var gulp = require("gulp"),
    gutil = require("gulp-util"),
    browserify = require("browserify"),
    reactify = require("reactify"),
    source = require("vinyl-source-stream");

gulp.task("scripts", function() {
  browserify({
    insertGlobals: true,
    entries: ["./scripts/bootstrap.jsx"],
    transform: ["reactify"],
    extensions: [".jsx"]
  })
  .bundle()
  .on("error", gutil.log)
  .pipe(source("bundle.js"))
  .pipe(gulp.dest("./scripts"));
});

gulp.task("watch", function() {
    gulp.watch([
      "./scripts/**/*.jsx",
      "./scripts/**/*.js"
    ], ["scripts"]);
});

gulp.task("default", ["watch"]);