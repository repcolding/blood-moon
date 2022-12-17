import { env } from '../../environment.js'

const scssVarsEnv =
  Object
    .entries(env)
    .map(([key, value]) => '$' + `${key}: ${value}` + ';')

export {
  scssVarsEnv
}
