export { displayTodos, displayProjects, createProjectSelection };

const todoList = document.querySelector(".main ul");
const projectList = document.querySelector(".sideboard ul");
const select = document.querySelector(".project");

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createTodoElement(todoItem, todos) {

    const li = document.createElement("li");

    const card = document.createElement("div");
    card.classList.add("card");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `${todoItem.id}`);
    checkbox.setAttribute("name", `${todoItem.id}`);
    if (todoItem.checked) {
        checkbox.setAttribute("checked", "checked");
    }
    checkbox.addEventListener("change", () => {
        todoItem.changeCheck();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&#10060";

    deleteBtn.addEventListener("click", () => {
        const index = todos.find(item => item.id == todoItem.id)
        todos.splice(index, 1);
        displayTodos(todos);
    })

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");

    const todoLabel = document.createElement("label");
    todoLabel.htmlFor = "todo";
    todoLabel.textContent = `${todoItem.title}`;

    const description = document.createElement("p");
    description.textContent = `${todoItem.description}`;

    const cardDeadline = document.createElement("div");
    cardDeadline.classList.add("card-deadline");

    const priority = document.createElement("p");
    priority.textContent = `Priorità: ${todoItem.priority}`;

    const deadline = document.createElement("p");
    deadline.textContent = `Scadenza: ${todoItem.dueDate}`;

    cardDeadline.appendChild(priority);
    cardDeadline.appendChild(deadline);

    cardText.appendChild(todoLabel);
    cardText.appendChild(description);

    card.appendChild(checkbox);
    card.appendChild(deleteBtn);
    card.appendChild(cardText);
    card.appendChild(cardDeadline);

    li.appendChild(card);
    todoList.appendChild(li);
}

function createProjectButton(project) {
    const li = document.createElement("li");

    const btn = document.createElement("button");
    btn.textContent = project.name;

    btn.addEventListener("click", () => {
        displayTodos(project.todos);
    })

    li.appendChild(btn);
    projectList.appendChild(li);
}

function createProjectOption(project, index) {
    const option = document.createElement("option");
    option.setAttribute("value", `${index}`);
    option.setAttribute("name", `${project.name}`);
    option.textContent = project.name;

    select.appendChild(option);
}

function displayTodos(todos) {
    removeAllChild(todoList);

    for (let todo of todos) {
        createTodoElement(todo, todos);
    }
}

function displayProjects(projects) {
    removeAllChild(projectList);

    for (let project of projects) {
        createProjectButton(project);
    }
}

function createProjectSelection(projects) {
    removeAllChild(select);

    for (let i = 0; i < projects.length; i++) {
        createProjectOption(projects[i], i);
    }
}