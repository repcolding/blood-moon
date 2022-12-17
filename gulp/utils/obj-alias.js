import { join, resolve } from 'path'
import { readFileSync } from 'fs'
import { cwd } from './cwd.js'

const compilerOptions = JSON.parse(
  readFileSync(join(
    cwd, 'tsconfig.json')
  ).toString()
)

function getAlias() {
  const { paths, baseUrl } = compilerOptions.compilerOptions
  const resolveBaseUrl = resolve(baseUrl)
  const aliases = {}

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '')
    const path = paths[item][0].replace('/*', '').replace('*', '')

    aliases[key] = join(resolveBaseUrl, path)
  })

  return aliases
}

export const objAlias = getAlias()
