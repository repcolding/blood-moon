import gulp from 'gulp'
import { options } from './config/options.js'
import { createGulpEsbuild } from 'gulp-esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'
import { scssPostcss } from './utils/scss-postcss.js'
import { scssAlias } from './utils/scss-alias.js'
import { plumber } from './plugins/plumber.js'
import { env } from '../environment.js'
import { scssPrecompile } from './utils/scss-precompile.js'

const {
  src,
  dest
} = gulp

const esbuild = createGulpEsbuild({
  incremental: env.IS_WATCH
})

const styles = () => {
  return src('styles/styles.scss', { ...options.src })
    .pipe(plumber())
    .pipe(esbuild({
      outfile: 'styles.css',
      sourcemap: env.IS_DEV,
      minify: env.IS_PROD,
      loader: {
        '.png': 'file'
      },
      plugins: [
        sassPlugin({
          transform: scssPostcss,
          importMapper: scssAlias,
          precompile: scssPrecompile
        })
      ],
      assetNames: '[dir]/[name]-[hash]',
    }))
    .pipe(dest('css', { ...options.dest }))
}

export {
  styles
}
