const { src, dest, watch } = require('gulp')
const less = require('gulp-less')

const compile_css = () => {
  return src('./_source/less/roodesign.less')
  .pipe(less())
  .pipe(dest('./_site/assets'))
}
exports.default = (callback) => {
  watch('./_source/less/**/*.less', { ignoreInitial: false }, compile_css)
  callback()
}