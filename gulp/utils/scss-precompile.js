import { scssGlob } from './scss-glob.js'
import { scssVarsEnv } from './scss-vars-env.js'
import { sep } from 'path'
import {
  regCssUrl,
  replaceAssetsUrl,
  getNewAssets,
  getElPath
} from '../helpers/modules-assets.js'

const assetsManagerScss = (source, pathname) => {
  if (pathname.indexOf('src/modules') === -1) return source

  const splitPath = pathname.split(sep)
  const moduleName = getElPath(splitPath).moduleName
  const listPath = [...new Set(source.match(regCssUrl))]

  const replacePathList = getNewAssets(listPath, (splitPath) => {
    const { innerFolder, fileName } = getElPath(splitPath)

    return {
      moduleName,
      innerFolder,
      fileName
    }
  })

  return replaceAssetsUrl(source, replacePathList)
}

const addVarsEnv = (source, pathname) => {
  if (pathname.indexOf('_env.scss') === -1) return source

  return scssVarsEnv.join('\n') + '\n\n' + source
}

const scssPrecompile = (source, pathname, isRoot) => {
  let updateSource = source

  updateSource = scssGlob(updateSource, pathname)
  updateSource = assetsManagerScss(updateSource, pathname)
  updateSource = addVarsEnv(updateSource, pathname)

  return updateSource
}

export { scssPrecompile }
