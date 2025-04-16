const todoInput = document.getElementById("todo-input");
const todoInputButton = document.getElementById("todo-input-btn");
const todoList = document.getElementById("todo-list");

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

todoInputButton.addEventListener("click", () => {
  const value = todoInput.value;

  todoList.innerHTML += renderTodoListItem(value);
  todoInput.value = "";
});
