const todoInputContainer = document.getElementById("todo-input-container");
const todoInput = document.getElementById("todo-input");
const todoInputButton = document.getElementById("todo-input-btn");
const todoList = document.getElementById("todo-list");
const todoListActions = document.querySelectorAll(".todo-list-action");

const todos = [
  {
    value: "Todo 1",
    completed: false,
  },
];

const renderTodoListItem = (
  todoListItem,
  index
) => `<li class="todo-item-container" data-index=${index}>
            <div class="todo-item">
              <input type="checkbox" name="todo-item-${index}" ${
  todoListItem.completed && "checked"
} />
              <span class="${todoListItem.completed && "completed"}">${
  todoListItem.value
}</span>
            </div>
            <div class="todo-item-actions">
              <button class="todo-item-action-btn edit-btn" data-index=${index}>
                <img src="./assets/icons/edit.svg" alt="edit" />
              </button>
              <button class="todo-item-action-btn delete-btn data-index=${index}">
                <img src="./assets/icons/delete.svg" alt="edit" />
              </button>
            </div>
          </li>`;

const renderTodoList = (status = "all") => {
  let filteredTodos = [];

  if (status === "completed")
    filteredTodos = todos.filter((todo) => todo.completed);

  if (status === "pending")
    filteredTodos = todos.filter((todo) => !todo.completed);

  if (status === "all") filteredTodos = todos;

  todoList.innerHTML = "";
  filteredTodos.map((todo, index) => {
    todoList.innerHTML += renderTodoListItem(todo, index);
  });

  //For those more comfortable with for loops
  //   for (let i = 0; i < todos.length; i++) {
  //     todoList.innerHTML += renderTodoListItem(todos[i].value, i);
  //   }
};

const addTodoItem = (e) => {
  const inputValue = todoInput.value;

  if (inputValue !== "") {
    todos.push({
      value: inputValue,
      completed: false,
    });
    renderTodoList();
  }
  todoInput.value = "";
};

todoInputButton.addEventListener("click", addTodoItem);

todoList.addEventListener("click", (e) => {
  const index = e.target.closest(".todo-item-container").dataset.index;
  if (e.target.closest("input[type='checkbox']")) {
    todos[index].completed = !todos[index].completed;
  }
  if (e.target.closest(".edit-btn")) {
    const newValue = prompt("Edit your todo item", todos[index].value);
    todos[index].value = newValue;
  }
  if (e.target.closest(".delete-btn")) {
    todos.splice(index, 1);
  }
  renderTodoList();
});

Array.from(todoListActions).map((todoListAction) => {
  todoListAction.addEventListener("click", (e) => {
    Array.from(todoListActions).map((todoListAction) => {
      todoListAction.classList.remove("todo-list-action-active");
    });
    todoListAction.classList.add("todo-list-action-active");
    const filter = e.target.dataset.filter;
    renderTodoList(filter);
  });
});

renderTodoList();
