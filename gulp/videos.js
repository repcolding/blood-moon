import gulp from 'gulp'
import rename from 'gulp-rename'
import cached from 'gulp-cached'
import { renameMedia } from './utils/reneme-media.js'
import { options } from './config/options.js'

const {
  src,
  dest
} = gulp

const globalVideos = 'assets/videos/**/*.{mp4,webm,ogg}'
const modulesVideos = 'modules/*/assets/**/*.{mp4,webm,ogg}'

const glob = [
  globalVideos,
  modulesVideos
]

const videos = () => {
  return src(glob, { ...options.src })
    .pipe(cached())
    .pipe(rename(renameMedia(modulesVideos, 'assets/videos')))
    .pipe(dest('.', { ...options.dest }))
}

export {
  videos
}
