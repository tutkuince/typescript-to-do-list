"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector('#idTodoForm');
const list = document.getElementById("todoList");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
// S18047: btn is possibly null, so we need to use null check
// btn?.addEventListener("click", () => {
//     alert(input.value);
//     input.value = "";
// });
