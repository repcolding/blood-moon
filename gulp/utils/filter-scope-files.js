import { env } from '../../environment.js'

const filterScope =
  env.SCOPE === false
    ? '!robots.txt'
    : false

export {
  filterScope
}
