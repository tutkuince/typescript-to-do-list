const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector('#idTodoForm') as HTMLFormElement;

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log("Submitted!");
}
form.addEventListener("submit", handleSubmit);
// S18047: btn is possibly null, so we need to use null check
btn?.addEventListener("click", () => {
    alert(input.value);
    input.value = "";
});