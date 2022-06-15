import { Request, Response } from 'express'
import { createReadStream } from 'fs'

class LogController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const readableStream = createReadStream(`logs/${req.params.file}`)

      readableStream.on('error', (error): void => {
        res.json({ message: error.message })
      })

      readableStream.on('data', (chunk) => {
        res.send(chunk)
      })
    } catch (e) {
      return res.status(400).send({ error: e.message })
    }
  }
}

export default new LogController()
