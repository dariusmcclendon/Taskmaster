# Taskmaster

 Project by Darius McClendon

## GitHub [here](https://github.com/dariusmcclendon/Taskmaster)

### Description

Taskmaster is a web application for collaborative task management. Users will be able to create tasks or projects to file tasks into. Projects can have members who can take tasks for themselves and mark them completed. A project manager will be able to create and assign tasks. Tasks will have due dates.

### Knowledge Requirements

Node.js, Express, React, SQL, Authentication, SCSS


## Backend Documentation
### Database Notes

The Database will be made using SQL.

There should be four Tables : Users, Projects, Collaborators and Tasks. A User can have many projects and tasks. Projects can have many tasks. Tasks can only belong to one project and one user, but should be able to be managed by the owner of the project it belongs to. 

A User Table's rows should look like this :
| column name | data type |
| ----------- | --------- |
| id | integer |
| displayName | string |
| userName | string |
| password | string |

Users will be able to change their displayName. Their userName will be used to log into their account. Additional goals beyond the MVP may include an email field in order to facilitate authorization and password resets.


A Project Table's rows should look like this :
| column name | data type |
| ----------- | --------- |
| id | integer |
| title | string |
| desc | string |
| ownerId | integer |

Projects should have a title and brief description of their purpose.

A Collaborator Table's rows should look like this : 
| column name | data type |
| ----------- | --------- |
| projectId | integer |
| collabId | integer | 


A Task Table's rows should look like this :
| column name | data type |
| ----------- | --------- |
| id | integer |
| title | string |
| desc | string |
| frequency | enum |
| dueDate | string |
| projectId | integer |
| assignedTo | integer |
| createdBy | integer |

frequency enum will have the options "one time", "daily", "weekly", "monthly".

### Route Notes

CRUD Routes and Queries will be documented here.


| Controller | Method | Route | Description |
| ---------- | ------ | ----- | ----------- |
| Users | Post | users/ | creates new user |
| Users | Put | users/:id | updates user |
| Users | Get | users/ | fetches list of users |
| Users | Get | users/:id | fetches specific user |
| Users | Delete | users/:id | deletes specific user |
| Users | Get | users/:id/projects | fetches list of projects owned by user | 
| ----- | ------ | --------- | --------------------- |
| Projects | Post | projects/ | creates new project |
| Projects | Put | projects/:id | updates project |
| Projects | Get | projects/ | fetches list of projects |
| Projects | Get | projects/:id/tasks | fetches list of tasks for specific project |
| Projects | Get | projects/collaborators | fetches list of collaborators |
| Projects | Delete | projects/:id | deletes specific project |
| Projects | Delete | projects/collaborators/:id | deletes specific project collaborator |
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






