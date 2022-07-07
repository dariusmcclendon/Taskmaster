/* TASKS CONTROLLER
ROUTES
| Tasks | Post | tasks/ | creates new task |
| Tasks | Put | tasks/:id | updates task |
| Tasks | Get | tasks/ | fetches list of tasks |
| Tasks | Delete | tasks/:id | deletes specific task |
*/

// DEPENDENCIES

let express = require('express')
let tasks = express()

// GET route for fetching list of tasks. Should be authorized for admin use only
tasks.get('/', (req,res)=>{
    res.send("fetches list of tasks")
})

// POST route for creating a new task
tasks.post('/',(req,res)=>{
    res.send("creates new task")
})

// PUT route for updating a task
tasks.put('/:id',(req,res)=>{
    res.send("updates task")
})

// DELETE route for deleting a task
tasks.delete('/:id',(req,res)=>{
    res.send("deletes task")
})

// EXPORT

module.exports = tasks