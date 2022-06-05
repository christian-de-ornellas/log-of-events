import LogController from '@controllers/LogController'
import { Router } from 'express'

const routes = Router()

routes.get('/logs', LogController.index)

export default routes
