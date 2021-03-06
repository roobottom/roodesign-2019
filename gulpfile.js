const { src, dest, watch, series } = require('gulp')
const less = require('gulp-less')

const compile_css = () => {
  return src('./_source/_less/roodesign.less')
  .pipe(less())
  .pipe(dest('./_site/assets'))
}
exports.default = (callback) => {
  watch('./_source/_less/**/*.less', { ignoreInitial: false }, compile_css)
  callback()
}
exports.build = series(compile_css)