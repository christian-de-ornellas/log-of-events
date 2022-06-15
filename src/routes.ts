import LogController from '@controllers/LogController'
import { Router } from 'express'

const routes = Router()

routes.get('/log/:file', LogController.index)

export default routes
