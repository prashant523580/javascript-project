var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var concat = require("gulp-concat");
gulp_sass.compiler = require("node-sass");


gulp.task("sass", function() {
    gulp.src("./src/sass/*.scss")
        .pipe(gulp_sass())
        .pipe(gulp.dest("./dist/css/"));
    gulp.watch("./src/sass/*.scss", gulp.series("sass"));
});


gulp.task("scripts", function() {
    return gulp.src("./src/js/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./dist/js"));

});

gulp.task("default", gulp.parallel("sass"));