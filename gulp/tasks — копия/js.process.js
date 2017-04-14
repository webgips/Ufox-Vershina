'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())      
      .pipe($.gp.concat({path: 'app.min.js', cwd: ''}))
      .pipe($.gp.uglify()).on('error', $.gp.notify.onError({ title: 'JavaScript' }))
      .pipe($.gp.uglify())      
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rev())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
      .pipe($.gp.rev.manifest({     
        merge: true // merge with the existing manifest if one exists
      }))
      .pipe($.gulp.dest($.config.root + '/assets/manifest'))
  })
};
