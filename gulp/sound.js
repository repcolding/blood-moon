import gulp from 'gulp'
import rename from 'gulp-rename'
import cached from 'gulp-cached'
import { renameMedia } from './utils/reneme-media.js'
import { options } from './config/options.js'

const { src, dest } = gulp

const globalSound = 'assets/sound/**/*.{mp3,wav,ogg}'
const modulesSound = 'modules/*/assets/**/*.{mp3,wav,ogg}'

const glob = [globalSound, modulesSound]

const sound = () => {
  return src(glob, { ...options.src })
    .pipe(cached())
    .pipe(rename(renameMedia(modulesSound, 'assets/sound')))
    .pipe(dest('.', { ...options.dest }))
}

export { sound }
