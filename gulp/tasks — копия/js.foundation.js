'use strict';

module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('foundation.js'))
      .pipe($.gp.rev())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
      .pipe($.gp.rev.manifest({			
	  	merge: true // merge with the existing manifest if one exists
	  }))
	  .pipe($.gulp.dest($.config.root + '/assets/manifest'))
  })
};
