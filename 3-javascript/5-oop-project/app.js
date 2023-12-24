const bookForm = document.querySelector("#book-form");
const bookList = document.querySelector("#book-list");
console.log({bookForm,title,author,isbn,bookList});

function Ui(){}
Ui.prototype.addBook = function(ADDER){

const CreateDiv = document.createElement("tr");
CreateDiv.innerHTML = ` <td>${ADDER.title}</td>
<td>${ADDER.author}</td>
<td>${ADDER.isbn}</td>
<td><a href="#" class="delete">X<a></td>`

bookList.append(CreateDiv);

};

function Booker(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

bookForm.addEventListener("submit",function(event){
    event.preventDefault();
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");

if(!title.value || !author.value || !isbn.value){
    alert("plzz Fill This")
    return;
}

const CreateObject = new Booker(
    title.value,
    author.value,
    isbn.value
)


const uiVariable =  new Ui()
uiVariable.addBook(CreateObject)

// const CreateDiv = document.createElement("tr");
// CreateDiv.innerHTML = ` <td>${title.value}</td>
// <td>${author.value}</td>
// <td>${isbn.value}</td>
// <td><a href="#" class="delete">X<a></td>`

// bookList.append(CreateDiv)
title.value = ""
author.value = ""
isbn.value = ""


 
bookList.addEventListener("click",function(e){
    e.preventDefault();
    const TargetValue = e.target;
    if(TargetValue.className == "delete" && confirm("OOPS")){
        TargetValue.parentElement.parentElement.remove()
    }
})
});

