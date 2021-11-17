import express from 'express'
import path from 'path'

import {requestTime, logger} from './middlewares.js'
import serverRoutes from './routes/servers.js'


const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000 // Config, if in ENV has port, we set it or default 3000
const app = express() // Init app


app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
console.log(app.get('views'))


// Add Middleware, for example 'static'
app.use(express.static(path.resolve(__dirname, 'static')))


app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Registration requestTime and logger from Middleware
app.use(requestTime)
app.use(logger)

app.use(serverRoutes)


// Method GET on url '/'
app.get('/', (request, response) => {
	response.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/features', (request, response) => {
	response.render('features', {title: 'Features page', active: 'features'})
})


// __dirname - current core directory/static/index.js
// app.get('/features', (request, response) => {
// 	response.sendFile(path.resolve(__dirname, 'static', 'features.html'))
// })

// app.get('/download', (request, response) => {
// 	response.download(path.resolve(__dirname, 'static', 'index.html'))
// })


// Set 3000 port, localhost:3000
app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`)
})