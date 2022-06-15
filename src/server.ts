import app from './app'
import CliController from './controllers/CliController'

const port = process.env.SERVER_PORT || 8888

//CLI
CliController.execute()

//SERVER
const server = app.listen(port)

export default server
