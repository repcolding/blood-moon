import server from 'browser-sync'

const browserSync = server.has('server')
  ? server.get('server')
  : server.create('server')

export { browserSync }
