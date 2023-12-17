interface Todo {
    text: string;
    completed: boolean;
}
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector('#idTodoForm') as HTMLFormElement;
const list = document.getElementById("todoList")!;

const readTodos = (): Array<Todo> => {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

const createTodo = (todo: Todo) => {
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
}

const todos: Array<Todo> = readTodos();
todos.forEach(createTodo);

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}



form.addEventListener("submit", handleSubmit);
// S18047: btn is possibly null, so we need to use null check
// btn?.addEventListener("click", () => {
//     alert(input.value);
//     input.value = "";
// });