import app from './app'

const port = process.env.SERVER_PORT || 8888

const server = app.listen(port, () => {
  console.log('\x1b[33m%s\x1b[0m', `=> 🚀  Node | Server running on the port: ${port}`)
})

export default server
