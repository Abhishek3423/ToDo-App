const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
  if(inputBox.value === ""){
    alert("Please enter a task");
}
else{
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = "\u00D7";
  li.appendChild(span);
}
// for call save data
inputBox.value = ""; 
saveData();
}
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
 
}, false);

// For save data in local storage
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
// For show store data list
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();