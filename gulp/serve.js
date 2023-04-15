import gulp from 'gulp'
import { options } from './config/options.js'
import { browserSync } from './utils/browse-sync.js'

import { styles } from './styles.js'
import { scripts } from './scripts.js'
import { views } from './views.js'
import { images } from './images.js'
import { videos } from './videos.js'
import { sound } from './sound.js'
import { files } from './files.js'
import { icons } from './icons.js'
import { fonts } from './fonts.js'

const { watch, series } = gulp

const readyReload = (cb) => {
  browserSync.reload()
  cb()
}

const serve = (cb) => {
  browserSync.init({
    server: {
      baseDir: options.dest.cwd,
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  })

  watch(['./src/**/*.scss'], series(styles, readyReload))
  watch(['./src/**/*.js', './src/**/*.js.*'], series(scripts, readyReload))
  watch(['./src/**/*.tsx', './src/**/*.ts'], series(views, readyReload))

  watch(['./src/**/*.{svg,png,jpeg,jpg}'], series(images, readyReload))
  watch(['./src/**/*.{mp4,webm,ogg}'], series(videos, readyReload))
  watch(['./src/**/*.{mp3,wav,ogg}'], series(sound, readyReload))

  watch(['./src/public/**/*'], series(files, readyReload))

  watch(['./src/assets/icons/**/*'], series(icons, readyReload))
  watch(['./src/assets/fonts/**/*'], series(fonts, readyReload))

  cb()
}

export { serve }
