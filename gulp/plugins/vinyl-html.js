import Vinyl from 'vinyl'
import { obj as through2 } from 'through2'
import { importVinylJs } from '../utils/import-vinyl-js.js'

const vinylHtml = () => through2(async function (file, enc, callback) {
  if (file.basename !== 'routing.js') {
    return callback()
  }

  const renderRouting = await importVinylJs(file)

  for (const key in renderRouting) {
    this.push(new Vinyl({
      path: `${key}.html`,
      contents: Buffer.from(renderRouting[key])
    }))
  }

  callback()
})

export {
  vinylHtml
}
