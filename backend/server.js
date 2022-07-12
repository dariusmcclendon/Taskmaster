
// DEPENDENCIES
let express = require('express')
let app = express()
let cookieSession = require('cookie-session')
let usersController = require('./controllers/users-controller')
let projectsController = require('./controllers/projects-controller')
let tasksController = require('./controllers/tasks-controller')
let authController = require('./controllers/authentication')
let cors = require('cors')
// let { Sequelize } = require('sequelize')

// CONFIG
require('dotenv').config()
app.use(cors({
    origin:'http://localhost:3001',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieSession({
    name:'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000
}))


// ROOT
app.get('/api',(req,res)=>{
    res.status(200).send("Taskmaster here, what do you want?")
})

app.listen(process.env.PORT,()=>{
    console.log(`Taskmaster is live and listening on port ${process.env.PORT}`)
})


// CONTROLLERS
app.use('/api/users', usersController)
app.use('/api/projects', projectsController)
app.use('/api/tasks', tasksController)
app.use('/api/auth',authController)