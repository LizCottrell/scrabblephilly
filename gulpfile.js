
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

// gulp.task('sass', function(){
// 	return gulp.src('styles/scss/main.scss')
// 		.pipe(watch('styles/scss/main.scss'))
// 		.pipe(sass())
// 		.pipe(gulp.dest("styles/."))
// });

// gulp.task('serve', function(){
// 	browserSync({
// 		server: {
// 			baseDir: './'
// 		}
// 	});

// 	gulp.watch(['*.html', 'styles/main.css', 'js/*.js'], {cwd:'./'}, reload);

// });

gulp.task('sass', function(){
	gulp.src('styles/scss/main.scss')
		.pipe(sass({
			includePaths: ['styles/scss']
		}))
		.pipe(gulp.dest("styles/."))
});

gulp.task('serve', function(){
	
	browserSync.init(['styles/main.css','*.html', 'js/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['styles/scss/*.scss'], ['sass']);
})


// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.

