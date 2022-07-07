# Taskmaster

 Project by Darius McClendon

## GitHub [here](https://github.com/dariusmcclendon/Taskmaster)

### Description

Taskmaster is a web application for collaborative task management. Users will be able to create tasks or projects to file tasks into. Projects can have members who can take tasks for themselves and mark them completed. A project manager will be able to create and assign tasks. Tasks will have due dates.

### Knowledge Requirements

Node.js, Express, React, SQL, Authentication, SCSS


## Backend Documentation
### Database Structure

The Database is built using PostgreSQL and Sequelize-CLI. The DB includes four tables : Users, Projects, Tasks, Groups. 

#### User Table Columns and Datatypes
A User Table's rows should look like this :
| user_id : integer | display_name : string | username : string | password : string |

#### Project Table Columns and Datatypes
A Project Table's rows should look like this :
| project_id : integer | title : string | desc : text | owner_id : integer | 

#### Group Table Columns and Datatypes
A Collaborator Table's rows should look like this : 
| project_id : integer | user_id : integer |

#### Task Table Columns and Datatypes
A Task Table's rows should look like this :
| task_id : integer | title : string | desc : text | frequency : enum('once', 'daily','weekly','monthly') | dueDate : date | project_id : integer | assigned : integer | createdBy : integer |

### Routes, Fetch Request Explanations

CRUD Routes and Queries will be documented here.



| Controller | Method | Route | Description |
| ---------- | ------ | ----- | ----------- |
| Users | Post | users/ | creates new user |
| Users | Put | users/:id | updates user |
| Users | Get | users/ | fetches list of users |
| Users | Get | users/:id | fetches specific user |
| Users | Delete | users/:id | deletes specific user |
| Users | Get | users/:id/projects | fetches list of projects owned by user |
| Users | Get | users/:id/groups | fetches list of groups user is in | 
| ----- | ------ | --------- | --------------------- |
| Projects | Post | projects/ | creates new project |
| Projects | Put | projects/:id | updates project |
| Projects | Get | projects/ | fetches list of projects |
| Projects | Get | projects/:id/tasks | fetches list of tasks for specific project |
| Projects | Delete | projects/:id | deletes specific project |
| Projects | Get | projects/:id/group | fetches list of group members |
| Projects | Post | projects/:id/group | creates new group member |
| Projects | Delete | projects/:id/group/:id | deletes group member |
| -- | -- | -- | -- |
| Tasks | Post | tasks/ | creates new task |
| Tasks | Put | tasks/:id | updates task |
| Tasks | Get | tasks/ | fetches list of tasks |
| Tasks | Delete | tasks/:id | deletes specific task |


## FrontEnd Documentation

### Populating a user's tasks and projects

A user should have a dashboard after logging in. The dashboard will have a list of their currently assigned tasks in ascending order of due date proximity. Post-MVP goals will have the tasks higher on the list marked red as a warning that they're urgent.

Projects will follow the same pattern.

### Collaborators

Collaborators will be able to assign themselves tasks in a project they are authorized for. Collaborators should not see or have access to the project control panel, including the delete and edit buttons for the tasks they are assigned. This is why in the task table, createdBy and assignedTo are separate cells.

## Schedule

Ironically enough, this is the part where this project would come in handy. 

7/05/22 - Complete General README.md documentation. Include routes and tables required. Create frontend and backend folders locally and prepare github repositories.

7/07/22 - Skeleton of backend routes. Pseudo-code acceptable. Migrations began and/or complete by the end of the class session. 






