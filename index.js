const todoInput = document.getElementById("todo-input");
const todoInputButton = document.getElementById("todo-input-btn");
const todoList = document.getElementById("todo-list");

const todos = [];

const renderTodoListItem = (todoListItem) => `<li class="todo-item-container">
            <div class="todo-item">
              <input type="checkbox" name="todo-item" />
              <label for="todo-item">${todoListItem}</label>
            </div>
            <div class="todo-item-actions">
              <button class="todo-item-action-btn edit-btn">
                <img src="./assets/icons/edit.svg" alt="edit" />
              </button>
              <button class="todo-item-action-btn delete-btn">
                <img src="./assets/icons/delete.svg" alt="edit" />
              </button>
            </div>
          </li>`;

const renderTodoList = () => {
  todoList.innerHTML = "";
  todos.map((todo) => {
    todoList.innerHTML += renderTodoListItem(todo.value);
  });

  // For those more comfortable with for loops
  //   for (let i = 0; i < todos.length; i++) {
  //     todoList.innerHTML += renderTodoListItem(todos[i].value);
  //   }
};

const addTodoItem = () => {
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

renderTodoList();
