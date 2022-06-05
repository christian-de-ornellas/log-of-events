import bodyParser from 'body-parser'
import { errors } from 'celebrate'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'

import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })
    this.express = express()
    this.middlewares()
    this.routes()
    this.parser()
    this.celebrate()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(routes)
  }

  private parser(): void {
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
  }

  private celebrate(): void {
    this.express.use(errors())
  }
}

export default new App().express
