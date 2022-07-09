/* USERS CONTROLLER

*/

// DEPENDENCIES
let users = require('express').Router()
let db = require('../models')
let { User, Projects, Groups, Tasks } = db
let { Op } = require('sequelize')



// GET route for fetching list of users. Should only be authorized for admin use.
users.get('/', async (req,res)=>{ 
    // ensure all db queries are wrapped in try and catch statements.
    try {
        let foundUsers = await User.findAll() // query for the entire User table. No arguments are passed
        res.status(200).json(foundUsers) // return the table as a json with status 200
    } catch (err) {
        res.status(500).json(err) // return status 500 if there is an error.
        console.log(`Error at GET users/ : ${err}`)
    }
})

// GET route for fetching specific user. 
users.get('/:id', async (req,res)=>{
    try {
        let foundOneUser = await User.findOne({ // query for a single user.
            where: {user_id: req.params.id}     // argument for using parameters
        })
        res.status(200).json(foundOneUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET route for searching for users by display_name.
users.get('/:name', async (req,res)=>{
    try {
        let foundUsers = await User.findAll({
            where: {display_name: req.params.name}
        })
        res.status(200).json(foundUsers)
    } catch (err) {
        res.status(500).json(err)
    }
})
// POST route for creating new user.
users.post('/', async (req,res)=>{
    try {
        let newUser = await User.create(req.body) // create helper method for the User model.
        res.status(200).json({
            message: "user created",
            data: newUser
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// PUT route for updating a user.
users.put('/:id', async (req,res)=>{
   try {
    let updatedUser = await User.update(req.body, {
        where: { user_id: req.params.id}
    })
    res.status(200).json({
        message: `User updated.`
    })
   } catch (err) {
    res.status(500).json(err)
   }
})

// DELETE route for deleting a user
users.delete('/:id',async (req,res)=>{
    try {
        let deletedUser = await User.destroy({
            where: { user_id: req.params.id }
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


// GET route for fetching list of projects owned by user
users.get('/:id/projects', async (req,res)=>{
    try { 
        let foundProjects = await Projects.findAll({
            where : { owner_id : req.params.id}
        })
        res.status(200).json(foundProjects)
    } catch (err) {
        res.status(500).json(err)
    }
})


// GET route for finding tasks by assigned user.
users.get('tasks/assigned/:id', async (req,res)=>{
    try {
        let foundTasks = await Tasks.findAll({
            where : { assigned: req.params.id }
        })
        res.status(200).json(foundTasks)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET route for finding tasks by creator.
users.get('tasks/created/:id', async (req,res)=>{
    try {
        let foundTasks = await Tasks.findAll({
            where : { creator: req.params.id }
        })
        res.status(200).json(foundTasks)
    } catch (err) {
        res.status(500).json(err)
    }
})
// GET route for fetching list of projects a user is part of via group
users.get('/:id/groups', async (req,res)=>{
    res.status(200).send("GET route for fetching list of projects a user is part of via group")
})

// DELETE route for user leaving a group. This should only be utilized by the user
users.delete('/:id/groups/:group_id', async (req,res)=>{
    res.status(200).send("DELETE route for removing self from a project.")
})
// EXPORT

module.exports = users

