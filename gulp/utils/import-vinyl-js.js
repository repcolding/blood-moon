import tempWrite from 'temp-write'

const importVinylJs = async (file) => {
  let filePath = await tempWrite(file.contents, 'module.mjs')

  try {
    return (await import(filePath)).default
  }
  catch (error) {
    console.log(error)
  }

  return undefined
}

export {
  importVinylJs
}
