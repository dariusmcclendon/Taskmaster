/* PROJECTS CONTROLLER

ROUTES
| Projects | Post | projects/ | creates new project |
| Projects | Post | projects/collaborators | creates new collaborator | 
| Projects | Put | projects/:id | updates project |
| Projects | Get | projects/ | fetches list of projects |
| Projects | Get | projects/:id/tasks | fetches list of tasks for specific project |
| Projects | Get | projects/collaborators | fetches list of collaborators |
| Projects | Delete | projects/:id | deletes specific project |
| Projects | Delete | projects/collaborators/:id | deletes specific project collaborator |

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
projects.delete('/collaborators/:id',(req,res)=>{
    res.send("Adds project collaborator")
})
// DELETE route for collaborator
projects.delete('/collaborators/:id',(req,res)=>{
    res.send("Removes specific project collaborator")
})

// EXPORT
module.exports = projects