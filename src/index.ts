const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;

// S18047: btn is possibly null, so we need to use null check
btn?.addEventListener("click", () => {
    alert(input.value);
    input.value = "";
});