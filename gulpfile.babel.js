
const { src, dest, series, watch} = require('gulp');
stylus = require('gulp-stylus'),
postcss = require('gulp-postcss'),
concat = require('gulp-concat'),
purgecss = require('gulp-purgecss'),
cleanCSS = require('gulp-clean-css'),
browserSync = require('browser-sync').create(),
options = require("./config"),


function stylusTaskDev(){
  let tailwindcss = require('tailwindcss');
  return src(options.paths.src.stylus)
  .pipe(stylus())
  .pipe(dest(options.paths.src.css))
  .pipe(postcss([
    tailwindcss(options.config.tailwindjs),
    require('autoprefixer'),
  ]))
  // .pipe(concat({ path: 'main.min.css'}))
  .pipe(dest(options.paths.src.css))
}

function stylusTaskProd(){
  return src(`${options.paths.src.css}/*.css`)
  .pipe(purgecss({
    content: ['src/**/*.{html,js}'],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    }
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(concat({ path: 'main.min.css'}))
  .pipe(dest(options.paths.dist.css));
}

// function watchTask() {
//   watch(options.paths.src.css,series(stylusTaskDev))
// }


exports.default = series(stylusTaskDev)

exports.prod = series(stylusTaskProd);