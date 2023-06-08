const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const router = require('./routes/index')
const io = new Server(server)
const swaggerDocUI = require('swagger-ui-express')
const swaggerDoc = require('./swagger-helper/documentations')
const port = process.env.port || 3000
const createError = require('http-errors')
const morgan = require('morgan')


app.use(express.static('public'))
app.use(morgan('dev'))
app.use(router)
app.use('/documentation', swaggerDocUI.serve)
app.use('/documentation', swaggerDocUI.setup(swaggerDoc))
app.set('view engine', 'ejs')


server.listen(port, () => {
    console.log(`Listening at ${port}`)
})

io.on('connection', socket => {
    console.log(`A user connected with id: ${socket.id}`)
    // listen for text typing event emitted by firstpage.
    socket.on('text-typing-event', (data) => {
        // emit the event to all subscribers except original emitter
        socket.broadcast.emit('text-typing-event', data)
    })
    // listen for change in checklist event emitted by firstpage
    socket.on('checklist-change', (data) => {
        socket.broadcast.emit('checklist-change', data)
    })

    socket.on('disconnect', () => console.log(`User with id: ${socket.id} disconnected`))
})





app.use(async (req, res, next) => {
    next(createError.NotFound())
})


app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        success: "false",
        message: err.message,
        status: err.status || 500
    })
})