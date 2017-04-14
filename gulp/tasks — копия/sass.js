'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./src/style/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      // .pipe($.gp.cssunit({
      //     type     :    'px-to-rem',
      //     rootSize :    16
      // }))      
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rev())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.gp.rev.manifest({     
        merge: true // merge with the existing manifest if one exists
      }))
      .pipe($.gulp.dest($.config.root + '/assets/manifest'))
      // .pipe($.browserSync.stream());      
  })
};
