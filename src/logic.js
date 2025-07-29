const projects = [];
export { allTasks };

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
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }
}

const allTasks = new Project("All Tasks");