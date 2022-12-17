import { getEnv } from './gulp/utils/get-env.js'

export const env = {
  IS_DEV: !!getEnv('dev'),
  IS_PROD: !!getEnv('prod'),
  IS_WATCH: !!getEnv('watch'),
  SCOPE: getEnv('scope'),
  CDN: getEnv('cdn')
}
