import { deleteAsync } from 'del'
import { options } from './config/options.js'

const cleanup = cb => deleteAsync(options.dest.cwd).then(() => cb())

export {
  cleanup
}
