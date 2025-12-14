const taskinp = document.getElementById("taskInput");
const btnAdd = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
btnAdd.addEventListener("click", taskhandler);
const Task=[];
function taskhandler() {
    if (taskinp.value === "") {
        alert("You have to add a task!!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskinp.value;

    // Ajouter dans la liste
    taskList.appendChild(li);

    // Réinitialiser l’input
    taskinp.value = "";
    
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
}
