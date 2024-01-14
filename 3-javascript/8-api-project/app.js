const BaseUrlApi  = 'https://jsonplaceholder.typicode.com/posts';
const tbody = document.querySelector("#todos-listing")
const CreatePostPopup = document.querySelector("#create-post-form")
const TitleInput = document.querySelector("#post_title");
const BodyInput = document.querySelector("#post_body");

CreatePostPopup.addEventListener("submit",(event) => {
  event.preventDefault();
  const titleValue = TitleInput?.value;
  const bodyValue = BodyInput?.value;
  const btnSubmit = document.querySelector("#create-post-form button");

  if( TitleInput?.value == ""|| BodyInput?.value =="" ){
    alert("OOPSY!")
    TitleInput.value = "";
    BodyInput.value = "" ;
    return;
  }

  const body = {
    title : titleValue,
    body : bodyValue,
  }

  btnSubmit.setAttribute("disabled","disabled");

  fetch(BaseUrlApi,{
    method : "POST",
    headers:{
      "Content-Type" : "application/json" ,
    },
    body : JSON.stringify(body),
  }).then(async (reponse) => {
    const jsonData = await reponse.json();
    console.log(jsonData,"jsonData");
    TitleInput.value = "";
    BodyInput.value = "" ;
    $("#create-post").modal("hide");
    btnSubmit.removeAttribute("disabled");
  }).catch((error) =>{
    alert(" something went wrong.")
    btnSubmit.removeAttribute("disabled");
    console.error(error,"error")
  });
});

const EditWork = (postId) => {
  return fetch(`${BaseUrlApi}/${postId}`)
  .then((data)=> data.json())
  .then((data) =>{
    console.log(data,"data")
    return data;
  })
  .catch((error)=>console.error)
}

const getPost = () => {
  return(fetch(BaseUrlApi)
.then((Response) => Response.json()).then((data) =>{
    console.log(data,"data");
    let output = ""
    data?.forEach((singleRow) => {
        output += `<tr>
        <td>${singleRow?.id}</td>
        <td>${singleRow?.userId}</td>
        <td>${singleRow?.title}</td>
        <td><a class="btn btn-primary edit-btn"  href="#edit-post" data-post-id="${singleRow?.id}" >Edit</a></td>
        <td><a href="#" class="btn btn-danger delete-btn" data-post-id="${singleRow.id}">Delete</a></td>
      </tr>`;
      tbody.innerHTML = output;
    });
})
.catch((error) => console.error));
}
getPost();

tbody.addEventListener("click", async (event) =>{
  event.preventDefault();
  const CurrentElement = event.target;
  console.log(CurrentElement,"CurrentElement")
  if(CurrentElement.classList.contains("delete-btn") && confirm("Are You Syre")){
    const SelectDeleteAtt = CurrentElement.getAttribute("data-post-id");
    console.warn("deleted!")
    fetch(`${BaseUrlApi}/${SelectDeleteAtt}`,{
      method : "DELETE",
    }).then( async(data) =>{
      const DataJson = await data.json();
      console.log(DataJson,"DataJson");
      getPost()
    }).catch((error) => console.error(alert("oopsy")))
  }

  if(CurrentElement.classList.contains("edit-btn")){
    const postId = CurrentElement.getAttribute("data-post-id");
    const singleWork = await EditWork(postId);
    $("#edit-post").modal("show")
    console.log(singleWork,"singleWork")
  }
});



/*  
Rest Api Pattern

Request Methods

GET	    /posts              (get all posts)
GET	    /posts/1            (get post by id)
GET	    /comments?postId=1  (get post comments by postId)
POST	  /posts              (create post)
PUT	    /posts/1            (update specific post with all data like title,body)
PATCH	  /posts/1            (update specific post partially with some data like only title or body)
DELETE  /posts/1            (delete post by id)

*/