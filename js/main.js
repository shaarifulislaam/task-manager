const addButton = document.getElementById("task-button");
const taskList = document.getElementById("task-list");

let doneTaskCount = 0;

addButton.addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");

 if(taskInput.value != ''){
  const div = document.createElement("div");
  const para = document.createElement("p");
  const button = document.createElement("button");

  para.innerText = taskInput.value;
  button.innerText = "Done";
  button.classList.add("btn", "btn-primary", "task-button");
  div.classList.add("card", "p-3", "border", "mt-2", "single-task");

  div.appendChild(para);
  div.appendChild(button);

  /*  <div class="single-tasl">
    <p>Code kormu</p>
    <button class="btn btn-primary">Done</button>
  </div> */
  taskList.appendChild(div);
  taskInput.value = "";
  buttonListener();
  upDateResult();
 }else{
   alert('Input Feild required!')
 }
});

function buttonListener() {
  const taskButtons = document.getElementsByClassName("task-button");
  for (taskButton of taskButtons) {
    taskButton.addEventListener("click", function (event) {
      event.target.parentNode.style.color = "red";
      event.target.parentNode.style.padding = "10px";
      event.target.parentNode.style.border = "1px solid green";
      event.target.parentNode.style.margin = "5px";

      if (event.target.innerText == "Done") {
        event.target.setAttribute("disabled", true);
        event.target.innerText = "Completed";
        doneTaskCount++;
        upDateResult();
      }
    });
  }
}

function upDateResult() {
  const totalTask = document.getElementById("total-task");
  const doneTask = document.getElementById("done-task");
  const undoneTask = document.getElementById("undone-task");

  /*  childElement হল কোন পেরেন্ট আন্ডারে তার কত টা চাইল্ড আছে তার সংখ্যা
    document.getElementById('tasklist').childElementCount;
    */
  var count = parseInt(taskList.childElementCount);
  totalTask.innerText = count;
  doneTask.innerHTML = doneTaskCount;
  undoneTask.innerHTML = count - doneTaskCount;
}

//html er search input e aita dita hobe oninput="inputChange(event)"
function inputChange(event) {
  const searchKey = event.target.value.toLowerCase();
  filterNotes(searchKey);
}
function filterNotes(searchKey) {
  const x = document.getElementsByClassName("single-task");

  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    
    if(element.innerText.toLowerCase().includes(searchKey) == true){

       element.style.display = 'block';
    }

    else{
        element.style.display = 'none';
    }
 
  }
}
