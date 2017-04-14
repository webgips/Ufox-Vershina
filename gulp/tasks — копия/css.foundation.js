'use strict';

module.exports = function() {
  $.gulp.task('css:foundation', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('foundation.css'))
      .pipe($.gp.csso())
      .pipe($.gp.rev())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.gp.rev.manifest({			
			merge: true // merge with the existing manifest if one exists
		}))
	  .pipe($.gulp.dest($.config.root + '/assets/manifest'))
	})
};
