import { obj as through2 } from 'through2'
import {
  regHtmlUrl,
  getNewAssets,
  replaceAssetsUrl,
  getElPath
} from '../helpers/modules-assets.js'

const assetsManager = () =>
  through2(async function (file, enc, callback) {
    const htmlFile = file.contents.toString()
    const listUrl = [...new Set(htmlFile.match(regHtmlUrl))]

    const replaceList = getNewAssets(listUrl, (splitPath) => {
      const { moduleName, fileName, innerFolder } = getElPath(splitPath)

      return {
        moduleName,
        fileName,
        innerFolder
      }
    })

    file.contents = new Buffer(replaceAssetsUrl(htmlFile, replaceList))

    return callback(null, file)
  })

export { assetsManager }
