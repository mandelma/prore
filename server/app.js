const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.set('strictQuery', false)

//app.use(express.urlencoded({extended: true}));
//app.use(express.json());

const history = require('connect-history-api-fallback')
//const serveStatic = require('serve-static')

const userRouter = require('./routers/users')
const loginRouter = require('./routers/login')

// (node:26584) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)

const connected = mongoose.connect(keys.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
})

if (connected) {
    console.log('mongo database is connected')
}else {
    console.log('error: mongo database is not connected')
}

app.use(cors())




// kasutatakse kui on build production

// app.use(history({
//     // OPTIONAL: Includes more verbose logging
//     verbose: true
// }))




// Serve static assets from the build files (images, etc)
//app.use(serveStatic(path.join(__dirname, '/dist')))


//const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))


app.use(express.static('dist'))


//app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// changes

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.get('/api', (req, res) => {
    res.send("Hello, here is connected app!")
})


module.exports = app