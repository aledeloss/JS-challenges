//Todo list inicial para pruebas
let registeredTodos = [
  {
    description: "Comer tostadas",
    completed: false,
    enabled: true
  },
  {
    description: "Dormir",
    completed: true,
    enabled: false
  },
  {
    description: "Leer",
    completed: true,
    enabled: true
  }
];


//To Do list rendering
//TODO!: Agregar solamente las tareas nuevas a la lista en lugar de borrar todo y volver a agregarlas.
let allTodos = document.querySelector(".todos-container");

let filter = "all";

const filterTodos = () => {
  let enabledList = registeredTodos.filter((todo) => todo.enabled == true)
  switch (filter) {
    case "complete":
      filteredList = enabledList.filter((todo) => todo.completed == true);
      break;
    case "active":
      filteredList = enabledList.filter((todo) => todo.completed == false);
      break;
    case "all":
    default:
      filteredList = enabledList;
  }
  return filteredList;
};
filterTodos();

const renderTodos = () => {
  allTodos.innerHTML = "";
  filterTodos(filter);
  filteredList.map(
    (todo) =>
      (allTodos.innerHTML += `
                <div class="todo">
                    <div class="check-container ${
                      todo.completed == true ? "check-completed" : ""
                    }">
                        <img class="check-icon" src="images/icon-check.svg" alt="check icon">
                    </div>
                    <span class="todo-description ${
                      todo.completed == true ? "description-completed" : ""
                    }">
                        ${todo.description}
                    </span>
                    <img class="delete-icon" src="images/icon-cross.svg" alt="">
                </div>
            `)
  );
  addCompleteTodo();
  addDeleteTodo();
  clearCompleted();
  addItemsLeft()
  addFilters();
};

// First Page Load
window.addEventListener("load", () => {
  renderTodos();
});

// Add a new Todo
let newTodoInput = document.querySelector("#newTodo");
const addTodo = newTodo.addEventListener("keypress", function () {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log(`Registered todo: ${newTodoInput.value}`);
    const newTodo = {
      description: newTodoInput.value,
      completed: false,
      enabled: true
    };
    registeredTodos.push(newTodo);
    console.log(registeredTodos);
    renderTodos();
  }
});

// Complete todo
const addCompleteTodo = () => {
  document.querySelectorAll(".check-container").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.classList.toggle("check-completed");
      item.nextElementSibling.classList.toggle("description-completed");
      for (i = 0; i < registeredTodos.length; i++) {
        registeredTodos[i].description == item.nextElementSibling.innerText
          ? (registeredTodos[i].completed = !registeredTodos[i].completed)
          : "";
        console.log(registeredTodos);
      }
    });
  });
};

// Delete todo
const addDeleteTodo = () => {
  document.querySelectorAll(".delete-icon").forEach((item) => {
    item.addEventListener("click", (event) => {
      for (i = 0; i < registeredTodos.length; i++) {
        registeredTodos[i].description == item.previousElementSibling.innerText
          ? registeredTodos[i].enabled = false 
          : "";
      }
      console.log(registeredTodos)
      renderTodos();
    });
  });
};

// Filters
const addFilters = () => {
  document.querySelector(".all").addEventListener("click", () => {
    filter = "all";
    renderTodos();
  });
  document.querySelector(".active").addEventListener("click", () => {
    filter = "active";
    renderTodos();
  });
  document.querySelector(".completed").addEventListener("click", () => {
    filter = "complete";
    renderTodos();
  });
};

// Data
const addItemsLeft = () => {
  function active(todo){
    return todo.completed == false && todo.enabled == true
  }
  let itemsLeft = registeredTodos.filter(todo => active(todo));
  document.querySelector(".prueba").innerText = itemsLeft.length;
};

const clearCompleted = () => {
  document.querySelector(".clear-completed").addEventListener("click", () => {
    for(i=0; i<=registeredTodos.length-1; i++) {
      if(registeredTodos[i].completed == true){
        registeredTodos[i].enabled = false;
      };
    };
    renderTodos();
  });
};