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
The root for the API is /api. For example, the route for fetching a list of users would be /api/users/.

#### USER Controller

| Method | Route | Description |
| ------ | ----- | ----------- |
| GET | /users | Fetches list of ALL users. Should only be authorized for use by admin account. |
| GET | users/:id | Fetches specific user by user_id. |
| GET | users/:name | Fetches list of users by display_name. Used to query users to add to groups. |
| POST | /users | Creates a new user. |
| PUT | /users/:id | Updates a user. | 
| DELETE | /users/:id | Deletes a user. |
| GET | /users/:id/projects | Fetches a user's projects. | 
| GET | /users/tasks/assigned/:id | Fetches a user's assigned projects. | 
| GET | /users/tasks/created/:id | Fetches a user's created tasks. |
| GET | /users/:id/groups | Fetches projects a user is involved in via group. |
| DELETE | users/:id/groups/:group_id | Allows a user to remove SELF from project. |

#### PROJECTS Controller

| Method | Route | Description |
| ------ | ----- | ----------- |
| GET | /projects | Fetches list of ALL projects. Should only be authorized for use by admin account. | 
| GET | /projects/:id | Fetches specific project. | 
| POST | /projects | Creates a new project. |
| DELETE | /projects/:id | Deletes a project. | 
| GET | /projects/:id/tasks | Fetches list of tasks by project id. | 
| GET | /projects/:id/group | Fetches group members of project by project id. | 
| POST | /projects/:id/group/:member_id | Adds a group member. | 
| DELETE | /projects/:id/group:member_id | Removes a member from a group. |  

Although common practice while learning our CRUD routes was to assign a controller to every model, I personally find it easier to add certain routes to certain controllers based on the use-case of their access. For example, projects will only ever be queried and accessed by the user directly. There will never be a public query for ALL projects on the site. So it makes sense to have the route to find a project by user in the user controller instead of the project one.

This is seen in the relation between projects and tasks, users and groups, and projects and groups. I don't want to create a route for fetching tasks via user_id that looks like "api/tasks/user/:id". I like "api/users/tasks" instead.



## FrontEnd Documentation

### Populating a user's tasks and projects

A user should have a dashboard after logging in. The dashboard will have a list of their currently assigned tasks in ascending order of due date proximity. Post-MVP goals will have the tasks higher on the list marked red as a warning that they're urgent.

Projects will follow the same pattern.

### Collaborators

Collaborators will be able to assign themselves tasks in a project they are authorized for. Collaborators should not see or have access to the project control panel, including the delete and edit buttons for the tasks they are assigned. This is why in the task table, createdBy and assignedTo are separate cells.

## Planned Changes
- BONUS : Group functionality



## Changelog

### Planned Changes
 -- Refactoring components to include CRUD functions to debloat projectviewer code.
 -- Fetch routes rewritten to include user_id in order to eliminate wholesale fetching of database.

### Known Issues
 -- ProjectViewer resets to first project passed in fetch request when creating a new task. 
    -- Resolved by adding e.preventDefault() to createTask function (projectviewer, line 125)

### 7/05/22
Project created. Repo created on GitHub. Express App skeleton made. Controllers, etc.

### 7/07/22
Link to PostgreSQL database established. Models and migrations completed. 

### 7/09/22
Seeders generated. Routes reorganized. Routes confirmed to function properly. README updated to include route documentation and discussion.

### 7/10/22
 - Frontend began. User Dashboard created. Login and Signup pages and simple bcrypt authentication. Contexts added. 
 - Changes to tasks table in backend : split Date Due into three rows (Day, Month, Year). Additional route added solely for login logic.
 - Fixed Errors regarding React imports, incorrect Hook usage, models missing rows.

 ### 7/11/22
 - ProjectCard factored into component.
 - Added ProjectCarousel component.
 - Added TaskList component.
 - Added GroupModule component.
 - Added ProjectModule component.
 - Added ProjectViewer page.
 - Task CRUD functionality.
 - Project CRUD functionality.
 - Some styling.
 - Login / Signup logic move to backend. Authentication branch begins here.

 ## 7/12/22
 - Login / Signup successfully moved to backend. Session authentication and user persistence on the browser.

## 7/13/22
 - Dashboard populates Tasks due today. Refactored code to push certain CRUD functions to the components that use them in different pages.

## 7/14/22
 - Layout changes. Upcoming Tasks added to Dashboard. (note: unable to edit tasks from dashboard.)
 - Group functionality moved to different branch
 - Styling.





