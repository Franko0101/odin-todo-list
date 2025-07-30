export const projects = [];
export function createNewProject(projectName) {
    projects.push(new Project(projectName))
}


class Project  {
    constructor(name) {
        this.name = name
        this.todos = [];
    }

    addTodo = (title, description, dueDate, priority) => { 
        this.todos.push(
            new TodoItem(
            title, 
            description, 
            dueDate, 
            priority
        ))
    }
}

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }

    changeCheck = () => this.checked = !this.checked;
}

projects.push(new Project("All Tasks"));