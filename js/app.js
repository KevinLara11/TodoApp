const taskInput =  document.querySelector("#task-input input"); 
const navs = document.querySelectorAll("nav span"); 
const taskBox = document.querySelector(".task-box");
const addBtn = document.querySelector("#btn-add");
const btnDeleteAll = document.querySelector("#btn-delete-all");

let todos = JSON.parse(localStorage.getItem("todo-list")) || [];  /*  utiliza el método JSON.parse():::: a propiedad localStorage para obtener y analizar datos almacenados en el navegador.*/



const btnAll = document.getElementById("all");
btnAll.addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    taskInput.hidden = !taskInput.hidden;
});


const btnCompleted = document.getElementById("completed").onclick = function() {
    document.getElementById("task-input").hidden = true;
}



function showTodo(nav) {
    let li = "";
    if(todos) { 
        todos.forEach((todo, id) => {
            let isCompleted = todo.status === "completed" ? "checked" : "";
            if(nav === todo.status || nav === "all" || (nav === "active" && todo.status !== "completed")) {
                li += `<li class="task">
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}">${todo.name}</p>
                        </label>
                        <div id="delete">
                            <i onclick="deleteTask(${id})" class="fa-sharp fa-solid fa-trash"></i>
                        </div>
                    </li> `;
            }    
    
        });
    } 
    taskBox.innerHTML = li; 

}
showTodo("all"); 

navs.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
}); 




function deleteTask(deleteId){
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
}

btnDeleteAll.addEventListener("click", () => {
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
})


function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked){
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "incomplete";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));

} 

addBtn.addEventListener("click", e => {
        e.preventDefault();
        let userTask = taskInput.value;

        taskInput.value = "";
        let taskInfo = {name: userTask, status: "active"};
        todos.push(taskInfo); 
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
});  



/* function ocultar() {
    
} */






/* SECCION DE OCULTAR ELEMENTO */

/* function ocultar(elementId) {
    let element = document.getElementById(elementId);  // ESTE CODIGO ME OCULTA LAS TRES SECCIONES Y NO LA QUE QUIERO_::::: PARA MOSTRAR EL ELEMENTO ES EL SIGUIENTE//
    element.style.display = "none";
} */


/* SECCION DE MOSTRAR ELEMENTO */

/* function ocultar(elementId) {
    let element = document.getElementById(elementId);
    element.style.display = "none";
} */



/* function Click(event) {
    event.preventDefault();
    if (event.button === 2) {
        alert('RESTRINGIDO');
    }
}
    document.onmousedown = Click;  */






