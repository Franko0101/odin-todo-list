/*
Implement a way to create projects.
Write a function to display all projects in the sidebar;
Adding a way to choose in which project you want to add your new todo.
Adding a way to edit a todo.
Adding a way to delete a todo.
*/

import "./styles.css";
import { projects, createNewProject } from "./logic.js";
import { displayTodos } from "./dom.js";
//import image from "./image.png";

const addTodoBtn = document.querySelector(".add-todo-btn");
const newProjectBtn = document.querySelector(".new-project-btn");
const form = document.querySelector("form");

newProjectBtn.addEventListener("click", () => {
    const newProjectName = prompt("Enter the name of the new project", "New Project");
    createNewProject(newProjectName);
    console.log(projects);
});

addTodoBtn.addEventListener("click", () => {
    const hiddenDiv = document.querySelector(".form-container").toggleAttribute("hidden");
    if (hiddenDiv === false)
        addTodoBtn.textContent = "Close";
    else
        addTodoBtn.textContent = "Add a todo"
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    projects[0].addTodo(data.title, data.description, data.deadline, data.priority);
    console.log(projects[0].todos);
    displayTodos(projects[0].todos);
})