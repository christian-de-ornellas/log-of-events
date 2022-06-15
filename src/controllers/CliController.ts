import { createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'

import dateNow from '../util/dateNow'
import terminal from '../util/terminal'
import StreamController from './StreamController'

class CliController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected pipelineAsync: any

  constructor() {
    this.pipelineAsync = promisify(pipeline)
  }
  execute() {
    try {
      terminal.write('Qual a url do arquivo minha cdn? 🌍 ')
      terminal.input((inputLabelBaseUrlMyCdn: unknown) => {
        return this.pipelineAsync(
          StreamController.readableStream(inputLabelBaseUrlMyCdn.toString().trim()),
          StreamController.writableToMapTxt(),
          createWriteStream(`./logs/${dateNow.day}${dateNow.month}${dateNow.year}.txt`, 'utf8')
        )
      })
    } catch (error) {
      return console.error(error)
    }
  }
}

export default new CliController()
