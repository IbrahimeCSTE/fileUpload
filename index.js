const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

// --------------------------------------------------------------------
// APP CONFIG
// --------------------------------------------------------------------
app.use(cors())
app.use(express.json())

// --------------------------------------------------------------------
// MONGODB/MONGOOSE
// --------------------------------------------------------------------

const connectDB = require('./config/db')
connectDB()

// --------------------------------------------------------------------
// ROUTES
// --------------------------------------------------------------------

const router = require('./router/avatarRouter')
app.use("/upload",router);

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------
app.listen(5000, () => console.log('Server listening on port 5000!'));