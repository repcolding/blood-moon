import gulp from 'gulp'
import rename from 'gulp-rename'
import _if from 'gulp-if'
import cached from 'gulp-cached'
import { options } from './config/options.js'
import { plumber } from './plugins/plumber.js'
import { renameMedia } from "./utils/reneme-media.js";
import { imagemin } from './plugins/imagemin.js'
import { env } from '../environment.js'
import { imageOptions } from './config/images.js'
import { imagesWebp } from './utils/images-webp.js'
import { imagesRenameWebp } from './utils/images-rename-webp.js'

const {
  src,
  dest
} = gulp

const globalImages = 'assets/images/**/*.{svg,png,jpeg,jpg}'
const modulesImages = 'modules/*/assets/**/*.{svg,png,jpeg,jpg}'

const glob = [
  globalImages,
  modulesImages
]

const images = () => {
  return src(glob, { ...options.src })
    .pipe(plumber())
    .pipe(cached())
    .pipe(rename(renameMedia(modulesImages, 'assets/images')))
    .pipe(_if(env.IS_PROD, imagemin()))
    .pipe(dest('.', { ...options.dest }))
    .pipe(_if(imageOptions.webp, imagesWebp()))
    .pipe(_if(imageOptions.webp, rename(imagesRenameWebp)))
    .pipe(_if(imageOptions.webp, dest('.', { ...options.dest })))
}

export {
  images
}
