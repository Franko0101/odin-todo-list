import "./styles.css";
import { allTasks } from "./logic.js";
//import image from "./image.png";

const addTodoBtn = document.querySelector(".add-todo-btn");

addTodoBtn.addEventListener("click", () => {
    const hiddenDiv = document.querySelector(".form-container").toggleAttribute("hidden");
    if (hiddenDiv === false)
        addTodoBtn.textContent = "Close";
    else
        addTodoBtn.textContent = "Add a todo"
})

