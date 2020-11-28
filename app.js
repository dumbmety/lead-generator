const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')
const expressLayout = require('express-ejs-layouts')
const logger = require('morgan')
const mongoose = require('mongoose')

const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')

const app = express()
const port = process.env.PORT || 3000

// Datebase Connection
mongoose.connect('mongodb://localhost/lead-generator', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log("We're connected!"))

// Middlewares
if (process.env.NODE_ENV === 'development') app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Template Engine
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
app.use(apiRoutes)
app.use(webRoutes)

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
