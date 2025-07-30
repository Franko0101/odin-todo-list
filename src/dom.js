export { displayTodos };

const list = document.querySelector(".main ul");

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createTodoElement(todoItem) {

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
    checkbox.addEventListener("change", todoItem.changeCheck);

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
    card.appendChild(cardText);
    card.appendChild(cardDeadline);

    li.appendChild(card);
    list.appendChild(li);
}

function displayTodos(todos) {
    removeAllChild(list);

    for (let todo of todos) {
        createTodoElement(todo);
    }
}