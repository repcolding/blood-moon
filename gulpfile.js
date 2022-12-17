import gulp from 'gulp'

import { views } from './gulp/views.js'
import { scripts } from './gulp/scripts.js'
import { styles } from './gulp/styles.js'
import { cleanup } from './gulp/cleanup.js'
import { files } from './gulp/files.js'
import { icons } from './gulp/icons.js'
import { images } from './gulp/images.js'
import { videos } from './gulp/videos.js'
import { sound } from './gulp/sound.js'
import { fonts } from './gulp/fonts.js'
import { serve } from './gulp/serve.js'
import { archive } from './gulp/archive.js'
import { deploy } from './gulp/deploy.js'

const {
  parallel,
  series
} = gulp

const build = series(cleanup, parallel(
  views, scripts, styles, icons, images, videos, fonts, files
))

const start = series(build, serve)

export {
  views,
  scripts,
  styles,
  icons,
  images,
  videos,
  sound,
  fonts,
  files,
  cleanup,
  archive,
  deploy,
  build,
  start
}
