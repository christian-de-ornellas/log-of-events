import axios from 'axios'
import { Readable, Transform } from 'stream'

import dateNow from '../util/dateNow'

class StreamController {
  readableStream(input: string) {
    try {
      return new Readable({
        async read() {
          const requestMyCdn = await axios.get(input)
          const data = JSON.stringify(requestMyCdn.data)
          this.push(data)
          // avisa que acabaram os dados
          this.push(null)
        },
      })
    } catch (error) {
      return console.error(error)
    }
  }

  writableToMapTxt() {
    try {
      return new Transform({
        transform(chunk: string, _enconding: unknown, callback: (defaultValue: null, fileContent: string) => void) {
          const data = JSON.parse(chunk)
          const dataCdn = data.replace(/(MISS)/gi, 'MISS "MINHA CDN"')

          const fileDate = `${dateNow.day}/${dateNow.month}/${dateNow.year} ${dateNow.hours}:${dateNow.minutes}:${dateNow.seconds}`
          const fileContent = `#Versão 1.0 #Data: ${fileDate} #Campos: provedor 
http-method status-code uri-path tempo de resposta tamanho do cache-status "MINHA CDN" ${dataCdn}REFRESH_HIT POSTAGEM "MINHA CDN"
            `
          callback(null, fileContent)
        },
      })
    } catch (error) {
      return console.error(error)
    }
  }
}
export default new StreamController()
