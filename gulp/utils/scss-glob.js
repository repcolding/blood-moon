import fg from 'fast-glob'

const regex = /@?use + ?((\w+) +from )?([\'\"])(.*?);?\3/gm
const importSass = /@use +([\'\"])(.*?)\1/gm

const replacer = (match, fromStatement, obj, quote, filename, pathname) => {
  let isScss = pathname.endsWith('.scss')

  if (!filename.match(/\*/)) {
    return match
  }

  const globRelativePath = filename.match(/!?([^!]*)$/)[1]
  const prefix = filename.replace(globRelativePath, '')
  const cwdPath = pathname.substring(0, pathname.lastIndexOf('/'))

  const result = fg
    .sync(globRelativePath, { cwd: cwdPath })
    .map((file) => {
      if (pathname.endsWith(file)) {
        return ''
      }

      const fileName = quote + prefix + file + quote

      if (match.match(importSass)) {
        return '@use ' + fileName
      } else {
        console.error('Unknown use: "' + match + '"')
        process.exit(1)
      }
    })
    .join(isScss ? '; ' : '\n')

  if (!result) {
    // console.error('Empty results for "' + match + '"')
  }

  return result
}

export const scssGlob = (content, pathname) => {
  return content.replace(regex, (match, fromStatement, obj, quote, filename) => {
      return replacer(match, fromStatement, obj, quote, filename, pathname)
  })
}
