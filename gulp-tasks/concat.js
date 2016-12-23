/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var concat      = require('gulp-concat');
var order       = require('gulp-order');
var cssnano     = require('gulp-cssnano');
var sync        = require('browser-sync');

// Export our tasks.
module.exports = {

  // Concat all CSS into a master bundle.
  css: function() {
    return gulp.src([
      './dist/css/*.css',
      './src/components/**/*.css'
    ])
      // Reorder the files so global and btn are first.
      .pipe(order([
        'dist/css/global.css',
        'src/components/**/*.css',
        'dist/css/btn.css',
        'dist/css/form-item.css',
        'dist/css/form-float-label.css',
        'dist/css/*.css'
      ], { base: './' }))
      .pipe(concat('all.css'))
      .pipe(cssnano({
        autoprefixer: false,
        colormin: false
      }))
      .pipe(gulp.dest('./dist/all'))
      .pipe(sync.stream());
  }
};
