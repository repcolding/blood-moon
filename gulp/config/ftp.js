import * as dotenv from 'dotenv'
import log from 'fancy-log'

const accountData = dotenv.config({
  path: '.env'
}).parsed ?? {}

const ftpConfig = {
  host: accountData.host,
  user: accountData.user,
  password: accountData.password,
  parallel: 5,
  log
}

export {
  ftpConfig
}
