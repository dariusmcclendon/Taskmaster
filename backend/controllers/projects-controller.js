/* PROJECTS CONTROLLER

*/
// DEPENDENCIES
let projects = require('express').Router()
let db = require('../models')
let { Projects } = db
let { Tasks } = db
let { Groups } = db
// GET route for fetching list of projects. Should only be authorized for admin use.
projects.get('/', async (req,res)=>{
    try {
        let foundProjects = await Projects.findAll()
        res.status(200).json(foundProjects)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }
})

// GET route for fetching specific project.
projects.get('/:id', async (req,res)=>{
    try {
        let foundSpecificProject = await Projects.findOne({
            where : { project_id : req.params.id }
        })
        res.status(200).json(foundSpecificProject)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// POST route for creating a new project
projects.post('/', async (req,res)=>{
    try {
        let newProject = await Projects.create(req.body)
        res.status(200).json({
            message: "project created",
            data: newProject
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// PUT route for updating a project
projects.put('/:id', async (req,res)=>{
    try {
        console.log(req.body)
        let updatedProject = await Projects.update(req.body, {
            where: { project_id: req.params.id }, returning:true, plain:true
        })
        res.status(200).json(updatedProject[1])
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//  DELETE route for deleting specific project
projects.delete('/:id', async (req,res)=>{
    try {
        let deletedProject = await Projects.destroy({
            where: { project_id: req.params.id }
        })
        let deletedTasks = await Tasks.destroy({
            where: {project_id: req.params.id }
        })
        res.status(200).json({message: "project deleted"})
        console.log(`project deleted : ${deletedProject}`)
        console.log(`Tasks deleted : ${deletedTasks}`)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// GET route for fetching list of tasks by project id
projects.get('/:id/tasks', async (req,res)=>{
    try {
        let foundTasks = await Tasks.findAll({
            where : {project_id : req.params.id}
        })
        res.status(200).json(foundTasks)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// GET route for fetching group members of project using the project id
projects.get('/:id/group', async (req,res)=>{
    try {
        let group = await Groups.findAll({
            where : { project_id : req.params.id}
        })
        res.status(200).json(group)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})
// POST route for adding group member to project
projects.post('/:id/group/:member_id', async (req,res)=>{
    try {
        res.status(200).send("POST route for adding group member.")
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// DELETE route for removing member from a group. This route should only work for the group leader
projects.delete('/:id/group/:member_id', async (req,res)=>{
    console.log(err)
    res.status(200).send("DELETE route for deleting a group member.")
})
// EXPORT
module.exports = projects