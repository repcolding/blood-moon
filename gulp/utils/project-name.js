import { basename } from 'path'
import { cwd } from './cwd.js'

export const projectName = basename(cwd)
