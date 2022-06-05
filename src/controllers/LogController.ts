import { Request, Response } from 'express'

class LogController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      return res.send({ status: true })
    } catch (e) {
      return res.status(400).send({ error: e.message })
    }
  }
}

export default new LogController()
