//Add Task
//Remove Task
//Search Tasks
//Clear Task
//Select Form


let TaskForms = document.querySelector("#task-form");

TaskForms.addEventListener("submit" , function(event){
    event.preventDefault();
    console.info(event,"submited");

let TaskSelect = document.getElementById("task");
const SelectTask = TaskSelect.value; 
console.info(SelectTask);
if(!SelectTask){
    alert("please Fill the Form & Submit it.");
    console.info(SelectTask);
    return;
}
console.log("It is Working");

let collectionSelect = document.querySelector(".collection");
// console.log(collectionSelect,"collectionSelect");
// let createH2Element = document.createElement("h2");
// createH2Element.innerText = "Hafiz Azan";
// console.log(createH2Element,"createH2Element");
// collectionSelect.append(createH2Element)
/*
<li class="collection-item">
List Item
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
</li>
*/

const liElementSelect = document.createElement("li")
liElementSelect.innerHTML = `${SelectTask}
<a href="#" class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>`
collectionSelect.append(liElementSelect);
TaskSelect.value ="";
console.log(liElementSelect,"liElementSelect");

});

const selectCollectionBubling = document.querySelector(".collection");
selectCollectionBubling.addEventListener ("click" ,function (singlelement){
  singlelement.preventDefault();
  if(singlelement.target.className === "fa fa-remove"){
    console.log("delete btn clicked!")
  }
  console.log(selectCollectionBubling,"selectCollectionBubling");

const deletekrna = document.querySelectorAll(".fa-remove");
deletekrna.forEach(function (singleElement){
  singleElement.addEventListener("click" ,function (event){
    event.preventDefault();
  const currentElement = event.target;
  if(confirm("Are U Sure ?")){
    currentElement.parentElement.parentElement.remove();
  }
  console.log(currentElement,"currentElement");  
  })
})
});

let saveCollection = document.querySelector(".collection");
let clearTask = document.querySelector(".clear-tasks");
clearTask.addEventListener("click", function (event){
  event.preventDefault();
  saveCollection.remove(clearTask);
  console.log("working");
});