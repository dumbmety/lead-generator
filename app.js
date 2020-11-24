const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')
const expressLayout = require('express-ejs-layouts')
const logger = require('morgan')

const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 3000

// Middlewares
if (process.env.NODE_ENV === 'development') app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Template Engine
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes
app.use(webRoutes)

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
