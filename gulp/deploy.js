import gulp from 'gulp'
import ftp from 'vinyl-ftp'
import { join } from 'path'
import { ftpConfig } from './config/ftp.js'
import { options } from './config/options.js'
import { filterScope } from './utils/filter-scope-files.js'

const { src, series } = gulp

const conn = ftp.create(ftpConfig)
const remoteFolder = join('')

const rmdir = (cb) => {
  return conn.rmdir(remoteFolder, cb)
}

const load = () => {
  return src(
    ['**/*', filterScope].filter((glob) => glob),
    { buffer: false, dot: true, cwd: options.dest.cwd }
  ).pipe(conn.dest(remoteFolder))
}

export const deploy = series(rmdir, load)
