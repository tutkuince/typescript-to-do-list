"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector('#idTodoForm');
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
};
form.addEventListener("submit", handleSubmit);
// S18047: btn is possibly null, so we need to use null check
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert(input.value);
    input.value = "";
});
