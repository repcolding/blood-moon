import { objAlias } from './obj-alias.js'

const arrAlias = Object.entries(objAlias)
  .map(([alias, value]) => [
    alias + '/',
    value + '/'
  ])

const include = (string, sub) => {
  return string.indexOf(sub) !== -1
}

const fixPath = (string, val) => {
  return string.slice(string.indexOf(val))
}

const getAlias = path => {
  const arr = arrAlias.filter(([alias]) => include(path, alias))[0]
  const [alias, outAlias] = arr ?? []

  return {
    alias,
    outAlias
  }
}

const scssAlias = (path) => {
  const { alias, outAlias } = getAlias(path)

  if (alias === undefined) {
    return path
  }

  return fixPath(path, alias).replace(alias, outAlias)
}

export {
  scssAlias
}
