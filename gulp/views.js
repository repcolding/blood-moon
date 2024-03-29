import gulp from 'gulp'
import { options } from './config/options.js'
import { createGulpEsbuild } from 'gulp-esbuild'
import { join } from 'path'
import { vinylHtml } from './plugins/vinyl-html.js'
import { cwd } from './utils/cwd.js'
import { plumber } from './plugins/plumber.js'
import { env } from '../environment.js'
import { assetsManager } from './plugins/assets-manager.js'
import { convertObjValues } from "./utils/convert-obj-values.js";

const { src, dest } = gulp

const esbuild = createGulpEsbuild({
  incremental: env.IS_WATCH
})

const views = () => {
  return src('views/routing.tsx', { ...options.src })
    .pipe(plumber())
    .pipe(
      esbuild({
        bundle: true,
        sourcemap: 'inline',
        sourceRoot: join(cwd, '/'),
        platform: 'node',
        format: 'esm',
        loader: {
          '.png': 'file',
          '.svg': 'file',
          '.jpg': 'file',
          '.jpeg': 'file',
          '.webp': 'file',
          '.mp4': 'file',
          '.ogg': 'file',
          '.mp3': 'file',
          '.wav': 'file'
        },
        define: convertObjValues(env),
        assetNames: '[dir]/[name]'
      })
    )
    .pipe(vinylHtml())
    .pipe(assetsManager())
    .pipe(dest('.', { ...options.dest }))
}

export { views }
