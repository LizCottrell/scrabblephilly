var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task('sass', function(){
	gulp.src('stylesheets/scss/main.scss')
		.pipe(sass({
			includePaths: ['stylesheets/scss']
		}))
		.pipe(gulp.dest("stylesheets/."))
});

gulp.task('serve', function(){
	
	browserSync.init(['stylesheets/main.css','*.html', 'js/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['stylesheets/scss/*.scss'], ['sass']);
})


// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.

