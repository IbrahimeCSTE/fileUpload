const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const path = require('path')
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
app.get('/',(req,res)=>{
    res,send("hello world")
})

const router = require('./router/avatarRouter')
app.use("/upload",router);
 
//production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// --------------------------------------------------------------------
// SERVER LISTENER
// --------------------------------------------------------------------
const port=process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}!`));