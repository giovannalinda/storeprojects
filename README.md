<h1 align = "center">Store Projects</h1>

<h4 align = "center">Application to store projects and their tasks from scratch using Express. 🙃</h4>

### Routs

Post/projects - Must receive an id and title in the body and register a new project within the array: { id: "3", title: 'New project', tasks: [ "Go to the supermarket", "Washing dirty clothes" ] },

Get/projects - Route lists all projects and their tasks,

Put/projects/:id - The route only changes the project title with the id in the parameters,

Delete/projects/:id - The route deletes the project with the id present in the parameter,

Post/projects/:id/tasks - The route receives a title field and stores a new task in the task array of a project chosen through the id in the route parameters.

