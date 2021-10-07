document.getElementById("add-task").addEventListener("click", function() {
    var taskInput = document.getElementById("task-value");
    if (taskInput.value !== "") {
        addTask(taskInput.value);
    }
    taskInput.value = "";
});

function addTask(taskValue) {
    var task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("fill")
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
    let taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;


    var trash = document.createElement("div");
    trash.classList.add("trash");
    trash.classList.add("hidden-div");
    trash.innerHTML = "&times;";
    trash.addEventListener("click", removeTask);

    var edit = document.createElement("div");
    edit.classList.add("edit");
    edit.classList.add("hidden-div");
    edit.innerHTML = `<i class='fa fa-edit'></i>`;
    edit.addEventListener("click", editTask);

    task.appendChild(taskContent);
    task.appendChild(trash);
    task.appendChild(edit);

    task.addEventListener("mouseenter", toggleButtons);
    task.addEventListener("mouseleave", toggleButtons);

    var tasks = document.getElementById("tasks-added");
    tasks.insertBefore(task, tasks.childNodes[0]);
}

function toggleButtons(event) {
    const edit = event.target.getElementsByClassName("edit")[0];
    const trash = event.target.getElementsByClassName("trash")[0];
    edit.classList.toggle("hidden-div");
    trash.classList.toggle("hidden-div");
}

function removeTask(event) {
    let tasks = event.target.parentNode.parentNode;
    let task = event.target.parentNode;
    tasks.removeChild(task);
}

function editTask(event) {
    let task = event.target.parentNode.parentNode;
    let taskContent = task.getElementsByClassName("task-content")[0];
    let taskValue = taskContent.innerHTML;
    var input = document.createElement("input");
    input.setAttribute("value", taskValue);
    input.classList.add("task-input");
    taskContent.replaceWith(input);

    input.addEventListener("keypress", function(e) {
        if (e.key === 'Enter' && e.target.value) {
            let inputValue = e.target.value;
            let newTaskContent = document.createElement("div");
            newTaskContent.classList.add("task-content");
            newTaskContent.innerText = inputValue;

            input.replaceWith(newTaskContent);
        }
    })
}

var task;

function dragStart(event) {
    event.target.classList.add("hold");
    task = event.target;
    setTimeout(() => {
        event.target.classList.add("invisible");
    }, 0);

}

function dragEnd(event) {
    event.target.classList.remove("invisible");
}

function dragEnter(event) {
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.add("hovered");
    }
}

function dragOver(event) {
    event.preventDefault();
}

function dragLeave(event) {
    event.target.classList.remove("hovered");
}

function dragDrop(event) {
    event.target.classList.remove("hovered");
    event.target.childNodes[3].append(task);
}

var dropzones = document.getElementsByClassName("dropzone");

for (var index = 0; index < dropzones.length; index++) {
    const dropzone = dropzones[index];
    dropzone.addEventListener("dragenter", dragEnter);
    dropzone.addEventListener("dragover", dragOver);
    dropzone.addEventListener("dragleave", dragLeave);
    dropzone.addEventListener("drop", dragDrop);
}

const taskInput = document.getElementById("task-value");
taskInput.onkeyup = function(e) {
    if (e.keyCode === 13 && taskInput.value !== "") {
        addTask(taskInput.value);
        taskInput.value = "";
    }
}