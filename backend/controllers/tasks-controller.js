/* TASKS CONTROLLER
ROUTES
| Tasks | Post | tasks/ | creates new task |
| Tasks | Put | tasks/:id | updates task |
| Tasks | Get | tasks/ | fetches list of tasks |
| Tasks | Delete | tasks/:id | deletes specific task |
*/

// DEPENDENCIES

let tasks = require('express').Router()
let db = require('../models')
let { Tasks } = db

// GET route for fetching list of tasks. Should be authorized for admin use only
tasks.get('/', async (req,res)=>{
    try {
        let foundTasks = await Tasks.findAll()
        res.status(200).json(foundTasks)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET route for fetching a specific task.
tasks.get('/:id', async (req,res)=>{
    try {
        let foundTask = await Tasks.findOne({
            where : {task_id : req.params.id}
        })
        res.status(200).json(foundTask)
    } catch (err) {
        res.status(500).json(err)
    }
})

// POST route for creating a new task
tasks.post('/', async (req,res)=>{
    try {
        let newTask =  await Tasks.create(req.body)
        res.status(200).json(newTask)
    } catch (err) {
        res.status(500).json(err)
    }
})

// PUT route for updating a task
tasks.put('/:id', async (req,res)=>{
    try {
        let updatedTask = await Tasks.update(req.body,{
            where: { task_id: req.params.id}
        })
        res.status(200).json({
            message: `Task updated`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE route for deleting a task
tasks.delete('/:id', async (req,res)=>{
    try {
        let deletedTask = await Tasks.destroy({
            where: {task_id: req.params.id}
        })
        res.status(200).json({
            message:`Task deleted`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// EXPORT

module.exports = tasks