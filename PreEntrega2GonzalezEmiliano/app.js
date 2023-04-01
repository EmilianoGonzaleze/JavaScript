const btnAgregar = document.getElementById("btnAgregar");
const nuevaTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", function() {

  const task = nuevaTarea.value; // Asigno el valor en el campo "nuevaTarea" a tarea
  const newTask = document.createElement("li"); //Creo nuevo elemento "li" con la nueva tarea
  newTask.innerText = task; //asigno el valor

  // Boton eliminar
  const bntEliminar = document.createElement("button");
  bntEliminar.innerText = "Eliminar";
  bntEliminar.addEventListener("click", function() {
    listaTareas.removeChild(newTask);
  });

  newTask.appendChild(bntEliminar);
  
  // Boton completar
  const btnCompletar = document.createElement("button");
  btnCompletar.innerText = "Completado";
  btnCompletar.addEventListener("click", function() {
    newTask.classList.toggle("completado");
  });

  newTask.appendChild(btnCompletar);
  
  listaTareas.appendChild(newTask);

  nuevaTarea.value = "";//reseteo el valor
});