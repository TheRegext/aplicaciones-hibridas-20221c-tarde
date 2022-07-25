import express from 'express'
import { createServer } from 'http'
import ProjectRoute from './routes/projects.route.js'
import UserRoute from './routes/auth.route.js'
import cors from 'cors'
import * as SocketIO from 'socket.io'

const app = express() // crea el objeto de la aplicacion
const server = createServer(app) // crea el servidor
const serverSocket = new SocketIO.Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  },
  transports: ['websocket']
})

const socketClient = serverSocket.on('connection', (socket) => {
  socket.emit('welcome', 'Hola que hace, soy el servidor web.')

  socket.on('disconnect', () => {
  })
})

app.use(cors()) // permite que se puedan hacer peticiones desde cualquier origen
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false })) // ParseBody urlencoded
app.use(express.json())
app.all('*', (req, res, next) => {
  console.log('Ejecutop')
  const url = req.url
  const method = req.method
  const message = `${method} ${url}`
  if (socketClient) {
    socketClient.emit('action', message)
    req.socketClient = socketClient
  }
  next()
})

app.use('/', ProjectRoute)
app.use('/', UserRoute)

app.get('/hola', (req, res) => {
  if (socketClient) {
    socketClient.emit('welcome', 'Estoy entrado a la web /holas.')
  }
  res.send('Hola Mundo')
})

// Escucha el puerto y si funcioa, ejecuta la funcion
server.listen(2022, function () {
  console.log('Me conecte al puerto! http://localhost:2022 ')
})
