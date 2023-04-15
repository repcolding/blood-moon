import * as dotenv from 'dotenv'
import log from 'fancy-log'

const accountData =
  dotenv.config({
    path: '.env'
  }).parsed ?? {}

const ftpConfig = {
  host: accountData.HOST,
  user: accountData.USER,
  password: accountData.PASSWORD,
  parallel: 5,
  log
}

export { ftpConfig }
