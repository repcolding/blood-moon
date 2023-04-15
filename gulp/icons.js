import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import { options } from './config/options.js'
import { plumber } from './plugins/plumber.js'

const { src, dest } = gulp

const sprite = {
  shape: {
    id: {
      separator: '-'
    }
  },
  mode: {
    symbol: {
      sprite: '../icons.svg'
    }
  }
}

function icons() {
  return src('assets/icons/**/*.svg', { ...options.src })
    .pipe(plumber())
    .pipe(svgSprite(sprite))
    .pipe(dest('assets/icons', { ...options.dest }))
}

export { icons }
