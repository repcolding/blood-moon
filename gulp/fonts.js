import gulp from 'gulp'
import cached from 'gulp-cached'
import { options } from './config/options.js'

const {
  src,
  dest
} = gulp

function fonts () {
  return src('assets/fonts/**/*', { ...options.src })
    .pipe(cached())
    .pipe(dest('assets/fonts', { ...options.dest }))
}

export {
  fonts
}
