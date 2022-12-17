import gulpPlumber from 'gulp-plumber'
import notifier from 'node-notifier'
import chalk from 'chalk'
import log from 'fancy-log'
import { cwd } from '../utils/cwd.js'
import { join } from 'path'
import { projectName } from '../utils/project-name.js'

const iconError = join(cwd, 'gulp/icons/moon.png')

function plumber () {
  return gulpPlumber({
    errorHandler (error) {
      const { name, plugin, message } = error
      const title = `${chalk.red(name)} in ${chalk.cyan(plugin)}`

      log.error(title)
      console.log(chalk.red(message))

      notifier.notify({
        title: `Ошибка компиляции в ${projectName}`,
        message: 'Информация в консоле',
        icon: iconError,
        contentImage: iconError,
        sound: 'Glass'
      })

      this.emit('end')
    }
  })
}

export {
  plumber
}
