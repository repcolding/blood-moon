import min from 'gulp-imagemin'
import webp from 'imagemin-webp'
import { env } from '../../environment.js'
import { imageOptions } from '../config/images.js'

const plugins = [
  webp({
    quality: env.IS_PROD ? imageOptions.quantityWebp : 100
  })
]

function imagesWebp() {
  return min(plugins)
}

export { imagesWebp }
