/* USERS CONTROLLER
ROUTES : 
| Controller | Method | Route | Description |
| ---------- | ------ | ----- | ----------- |
| Users | Post | users/ | creates new user |
| Users | Put | users/:id | updates user |
| Users | Get | users/ | fetches list of users |
| Users | Get | users/:id | fetches specific user |
| Users | Delete | users/:id | deletes specific user |
| Users | Get | users/:id/projects | fetches list of projects owned by user |
| Users | Get | users/:id/groups | fetches list of groups user is in | 
*/

// DEPENDENCIES
let express = require('express')
let users = express()

// GET route for fetching list of users. Should only be authorized for admin use.
users.get('/',(req,res)=>{
    res.send("Fetches list of users")
})

// GET route for fetching specific user. 
users.get('/:id',(req,res)=>{
    res.send("Fetches specific user")
})

// POST route for creating new user.
users.post('/',(req,res)=>{
    res.send("Creates new user")
})

// PUT route for updating a user.
users.put('/:id',(req,res)=>{
    res.send("Updates user")
})

// DELETE route for deleting a user
users.delete('/:id',(req,res)=>{
    res.send("Deletes specific user.")
})

// GET route for users' projects

users.get('/:id/projects',(req,res)=>{
    res.send("List of users' projects.")
})

// GET route for users' groups
users.get('/:id/groups',(req,res)=>{
    res.send("List of users' groups.")
})

// EXPORT

module.exports = users

