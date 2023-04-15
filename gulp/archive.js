import gulp from 'gulp'
import zip from 'gulp-zip'
import { zipName } from './utils/zip-name.js'
import { options } from './config/options.js'
import { filterScope } from './utils/filter-scope-files.js'

const { src, dest } = gulp

const archive = () => {
  return src(
    ['**/*', filterScope].filter((glob) => glob),
    { dot: true, cwd: options.dest.cwd }
  )
    .pipe(zip(zipName))
    .pipe(dest('.', { ...options.dest }))
}

export { archive }
