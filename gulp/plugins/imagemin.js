import min, { optipng, mozjpeg, svgo } from 'gulp-imagemin'
import { imageOptions } from '../config/images.js'

const plugins = [
  optipng({
    optimizationLevel: 3
  }),
  mozjpeg({
    progressive: true,
    quality: imageOptions.quantity
  }),
  svgo({
    plugins: [
      {
        name: 'preset-default'
      }
    ]
  })
]

function imagemin() {
  return min(plugins)
}

export { imagemin }
