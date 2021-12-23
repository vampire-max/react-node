const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = 3002
const app = express()

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

const userRoutes = require('./routes/api.user')
const blogRoutes = require('./routes/api.blog')

app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log('connect to db'))
  .catch((err) => console.log(("couldn't connect to db, here is why:", err)))

app.listen(PORT, () => console.log(`listening port ${PORT}`))
