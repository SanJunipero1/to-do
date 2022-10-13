const checkItemx = document.getElementById("check");
const deleteItemX = document.getElementById("delete");
const editItemx = document.getElementById("edit");
const topDiv = document.getElementById("topDiv")
const bottomDiv = document.getElementById("bottomDiv")


 const addButton = document.querySelector("#open-dialog");
 const modal = document.querySelector(".addTodo dialog");
 
 function toggleModal() {
   modal.show();
 }
 addButton.addEventListener("click", toggleModal);
 

 function setAttributes(element, attributes) {
   Object.keys(attributes).forEach((attr) => {
     element.setAttribute(attr, attributes[attr]);
   });
 }

 
 const inputField = document.getElementById("todoTitle");
const listContainer = document.getElementById("listContainer")

let inputList = [];

function handleInput(event){
  const newInput = event.target.value
  inputList.push({newInput})
  inputField.value = "";
  createList(inputList);
  console.log(inputList)
}
inputField.addEventListener("change", handleInput);

  

function createList(liste){
  topDiv.innerHTML ="";
  liste.forEach((item, index)=>{
          const div = document.createElement("div")
          div.style.width = "690px";
          div.style.height = "40px";
          div.style.display = "flex";
          div.style.margin = "10px";
          div.style.justifyContent = "center";
          const ul = document.createElement("ul")
          const li = document.createElement("li");
          li.innerText = item.newInput;
          li.setAttribute("id", `element${index}`)
          const checkButton = document.createElement("button");
          checkButton.style.width = "40px";
          checkButton.style.height = "40px";
          checkButton.style.backgroundImage = "url(istockphoto-1129153620-170667a.jpg)";
          checkButton.style.backgroundSize = "40px";
          checkButton.style.border = "0px";
          checkButton.style.cursor = "pointer";
          checkButton.style.margin = "5px 10px";
          checkButton.innerText = "";
          const deleteButton = document.createElement("button");
          deleteButton.style.width = "30px";
          deleteButton.style.height = "30px";
          deleteButton.style.backgroundImage = "url(download.png)";
          deleteButton.style.backgroundSize = "30px";
          deleteButton.style.border = "0px";
          deleteButton.style.cursor = "pointer";
          deleteButton.style.margin = "5px 10px";
          deleteButton.innerText = "";
          const editButton = document.createElement("button");
          editButton.style.width = "30px";
          editButton.style.height = "30px";
          editButton.style.backgroundImage = "url(download-1.png)";
          editButton.style.backgroundSize = "30px";
          editButton.style.border = "0px";
          editButton.style.cursor = "pointer";
          editButton.style.margin = "5px 10px";
          editButton.innerText = "";
          
          topDiv.appendChild(div);
          div.appendChild(checkButton);
          div.appendChild(ul)
          ul.appendChild(li);
          div.appendChild(editButton);
          div.appendChild(deleteButton);
         
          
          //handle check
          checkButton.addEventListener("click",()=>{
            bottomDiv .appendChild(ul);
            div.innerHTML =""
          })
          
          //handle edit
          editButton.addEventListener("click",()=>{
            let neuerText = prompt("");
            li.innerText = neuerText
          })

          //handle delete
          deleteButton.addEventListener("click", ()=>{
            deleteItem(index);
          } )

          
      })
      

}




function deleteItem(index){
  inputList.splice(index, 1);
  createList(inputList)

}
