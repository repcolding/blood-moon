import gulp from 'gulp'
import { options } from './config/options.js'
import { createGulpEsbuild } from 'gulp-esbuild'
import { plumber } from './plugins/plumber.js'
import { env } from '../environment.js'

const { src, dest } = gulp

dest.from = ''

const esbuild = createGulpEsbuild({
  incremental: env.IS_WATCH
})

const scripts = () => {
  return src('scripts/main.js', { ...options.src })
    .pipe(plumber())
    .pipe(
      esbuild({
        minify: env.IS_PROD,
        bundle: true,
        format: 'esm',
        sourcemap: env.IS_DEV,
        splitting: true,
        chunkNames: '[hash]',
        define: {
          ...env
        }
      })
    )
    .pipe(dest('js', { ...options.dest }))
}

export { scripts }
