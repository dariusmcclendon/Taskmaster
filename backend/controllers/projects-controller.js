/* PROJECTS CONTROLLER

ROUTES
| Projects | Post | projects/ | creates new project |
| Projects | Put | projects/:id | updates project |
| Projects | Get | projects/ | fetches list of projects |
| Projects | Get | projects/:id/tasks | fetches list of tasks for specific project |
| Projects | Delete | projects/:id | deletes specific project |
| Projects | Get | projects/:id/group | fetches list of group members |
| Projects | Post | projects/:id/group | creates new group member |
| Projects | Delete | projects/:id/group/:id | deletes group member |

*/
// DEPENDENCIES
let express = require('express')
let projects = express()

// GET route for fetching list of projects. Should only be authorized for admin use.
projects.get('/',(req,res)=>{
    res.send("List of projects")
})

// GET route for fetching list of tasks for specific project
projects.get('/:id/tasks',(req,res)=>{
    res.send("List of tasks for specific project")
})

// GET route for fetching list of collaborators
projects.get('/collaborators',(req,res)=>{
    res.send("List of collaborators for project.")
})

// POST route for creating a new project
projects.post('/',(req,res)=>{
    res.send("Creates new project")
})

// PUT route for updating a project
projects.put('/:id',(req,res)=>{
    res.send("Updates project")
})

//  DELETE route for deleting specific project
projects.delete('/:id',(req,res)=>{
    res.send("Delete project")
})

// POST route for collaborator
projects.post('/:id/group/',(req,res)=>{
    res.send("Adds project collaborator")
})
// GET route for list of collaborators
projects.get('/:id/group',(req,res)=>{
    res.send("List of group members")
})
// DELETE route for collaborator
projects.delete('/:id/group/:id',(req,res)=>{
    res.send("Removes specific project collaborator")
})

// EXPORT
module.exports = projects