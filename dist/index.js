"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector('#idTodoForm');
const list = document.getElementById("todoList");
const readTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const createTodo = (todo) => {
    const newLI = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
};
const todos = readTodos();
todos.forEach(createTodo);
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
// S18047: btn is possibly null, so we need to use null check
// btn?.addEventListener("click", () => {
//     alert(input.value);
//     input.value = "";
// });
