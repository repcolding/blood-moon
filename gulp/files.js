import gulp from 'gulp'
import cached from 'gulp-cached'
import { options } from './config/options.js'

const { src, dest } = gulp

const files = () => {
  return src('public/**/*', { dot: true, ...options.src })
    .pipe(cached())
    .pipe(dest('.', { ...options.dest }))
}

export { files }
