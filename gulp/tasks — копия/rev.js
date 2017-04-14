// gulp.task('default', () =>
// 	// by default, gulp would pick `assets/css` as the base,
// 	// so we need to set it explicitly:
// 	gulp.src(['assets/css/*.css', 'assets/js/*.js'], {base: 'assets'})
// 		.pipe(gulp.dest('build/assets'))  // copy original assets to build dir
// 		.pipe(rev())
// 		.pipe(gulp.dest('build/assets'))  // write rev'd assets to build dir
// 		.pipe(rev.manifest())
// 		.pipe(gulp.dest('build/assets'))  // write manifest to build dir
// );

module.exports = function() {
  $.gulp.task('rev', function() {
    return $.gulp.src(['./dist/assets/css/*.css', './dist/assets/js/*.js'])
    	.pipe($.gulp.dest($.config.root + '/assets/'))  // copy original assets to build dir
		.pipe($.gp.rev())
		.pipe($.gulp.dest($.config.root + '/assets/'))  // write rev'd assets to build dir
		.pipe($.gp.rev.manifest())
		.pipe($.gulp.dest($.config.root + '/assets/manifest'))  // write manifest to build dir
  })
};
