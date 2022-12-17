import micromatch from 'micromatch'
import { sep, join } from 'path'

const clearDirModule = dirname => {
  return dirname.replace(`${sep}assets`, '')
}

const getPathGlob = ({path, cwd}) => {
  const cwdFolder = join(cwd, sep)

  return path.slice(
    path.indexOf(cwdFolder) + cwdFolder.length
  )
}

const renameMedia = (glob, folder) => {
  return function (parsedPath, file) {
    const pathFormatGlob = getPathGlob(file)

    if (micromatch.isMatch(pathFormatGlob, glob)) {
      parsedPath.dirname = join('modules', clearDirModule(parsedPath.dirname))
    } else {
      parsedPath.dirname = join(folder, parsedPath.dirname)
    }
  }
}

export {
  renameMedia
}
