
// DEPENDENCIES
let express = require('express')
let app = express()
let usersController = require('./controllers/users-controller')
let projectsController = require('./controllers/projects-controller')
let tasksController = require('./controllers/tasks-controller')
let cors = require('cors')
// let { Sequelize } = require('sequelize')

// CONFIG
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// ROOT
app.get('/api',(req,res)=>{
    res.status(200).send("Taskmaster here, what do you want?")
})

app.listen(process.env.PORT,()=>{
    console.log(`Taskmaster is live and listening on port ${process.env.PORT}`)
})

// CONTROLLERS
app.use('/users', usersController)
app.use('/projects', projectsController)
app.use('/tasks', tasksController)