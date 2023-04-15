import tempWrite from 'temp-write'
import { pathToFileURL } from 'url'
import { isAbsolute } from 'path'

const importVinylJs = async (file) => {
  let filePath = await tempWrite(file.contents, 'module.mjs')

  try {
    if (isAbsolute(filePath)) {
      return (await import(pathToFileURL(filePath).toString())).default
    } else {
      return (await import(filePath)).default
    }
  } catch (error) {
    console.log(error)
  }

  return undefined
}

export { importVinylJs }
