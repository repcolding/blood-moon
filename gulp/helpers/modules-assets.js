import { sep, join } from 'path'

const regHtmlUrl = /\.\/_\.\._\/modules\/(.*?)(\.(png|svg|jpg|jpeg|webp|mp4|webm|ogg|mp3|wav))/g
const regCssUrl = /\.\/assets\/(.*?)(\.(png|svg|jpg|jpeg|webp))/g

const getElPath = (splitPath) => {
  const innerFolder = splitPath.slice(splitPath.indexOf('assets') + 1, splitPath.length - 1)

  return {
    moduleName: splitPath[splitPath.indexOf('modules') + 1],
    fileName: splitPath[splitPath.length - 1],
    innerFolder: innerFolder.join(sep)
  }
}

const replaceAssetsUrl = (source, replacePathList) => {
  let updateSource = source

  for (const url of replacePathList) {
    updateSource = updateSource.replaceAll(url.prev, url.next)
  }

  return updateSource
}

const getNewAssets = (listPath, getNames) => listPath.map(path => {
  const splitPath = path.split(sep)
  const { fileName, moduleName, innerFolder = '' } = getNames(splitPath)

  return {
    prev: path,
    next: join(sep, 'modules', moduleName, innerFolder, fileName)
  }
})

export {
  regHtmlUrl,
  regCssUrl,
  replaceAssetsUrl,
  getNewAssets,
  getElPath
}
