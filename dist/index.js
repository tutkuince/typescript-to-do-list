"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
// S18047: btn is possibly null, so we need to use null check
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    alert(input.value);
    input.value = "";
});
