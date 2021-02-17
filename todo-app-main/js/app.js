//Todo list inicial para pruebas
let registeredTodos = [
    {
        "description": "Comer tostadas",
        "completed": false
    },
    {
        "description": "Dormir",
        "completed": true
    }
];

let filter = 'all';

//To Do list rendering
//TODO!: Agregar solamente las tareas nuevas a la lista en lugar de borrar todo y volver a agregarlas.
let allTodos = document.querySelector(".toDos-container");

const filterTodos = () => {
    switch(filter) {
        case "complete":
            filteredList = registeredTodos.filter(todo => todo.completed == true);
            break;
        case "active":
            filteredList = registeredTodos.filter(todo => todo.completed == false);
            break;
        case "all":
        default:
            filteredList = registeredTodos;
    }
    console.log(filteredList)
    return filteredList;
}
filterTodos();

const renderTodos = () => {
    allTodos.innerHTML = "";
    filterTodos(filter);
    filteredList.map(
        (todo) =>
        (allTodos.innerHTML += `
                <div class="todo">
                    <div class="check-container">
                        <img class="check-icon ${todo.completed == true ? 'check-completed' : ''}" src="images/icon-check.svg" alt="check icon">
                    </div>
                    <span class="todo-description ${todo.completed == true ? 'description-completed' : ''}">
                        ${todo.description}
                    </span>
                    <img class="delete-icon" src="images/icon-cross.svg" alt="">
                </div>
            `)
    );
    addCompleteTodo();
    addDeleteTodo();
    addFilters()
    console.log(registeredTodos);
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
        "description" : newTodoInput.value,
        "completed" : false
    }
    registeredTodos.push(newTodo);
    console.log(registeredTodos);
    renderTodos();
  }
});

// Complete todo
const addCompleteTodo = () => {
    document.querySelectorAll(".check-container").forEach( item => {
        item.addEventListener("click", event => {
            item.firstElementChild.classList.toggle("check-completed")
            item.nextElementSibling.classList.toggle("description-completed")
            for (i=0; i<registeredTodos.length; i++) {
                registeredTodos[i].description === item.nextElementSibling.textContent ?
                registeredTodos[i].completed = !registeredTodos[i].completed : "";
                console.log(registeredTodos)
            }
        })
    })
}

// Delete todo
const addDeleteTodo = () => {
    document.querySelectorAll(".delete-icon").forEach( item => {
        item.addEventListener("click", event => {
            for (i=0; i<registeredTodos.length; i++) {
                registeredTodos[i].description === item.previousElementSibling.textContent ?
                registeredTodos.splice(i, 1) : "";
                console.log(registeredTodos)
            }
            renderTodos();
        })
    })
}

// Filters
const addFilters = () => {
    document.querySelector(".all").addEventListener("click", () => {
        filter = "all";
        renderTodos();
    })
    document.querySelector(".active").addEventListener("click", () => {
        filter = "active";
        renderTodos();
    })
    document.querySelector(".completed").addEventListener("click", () => {
        filter = "complete";
        renderTodos();
    })
}
