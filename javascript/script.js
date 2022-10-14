const topDiv = document.getElementById("topDiv");
const bottomDiv = document.getElementById("bottomDiv");

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

const inputSubmit = document.getElementById("inputform");

/**
 * Toggle Modal
 */
const addButton = document.querySelector("#open-dialog");
const modal = document.querySelector(".addTodo dialog");
function toggleModal() {
  modal.show();
}
addButton.addEventListener("click", toggleModal);

/**
 * Handle ToDo's
 */
const inputField = document.getElementById("todoTitle");
const listContainer = document.getElementById("listContainer");

let inputList = JSON.parse(localStorage.getItem("toDo"));

if (!inputList) {
  inputList = [];
  const info = document.createElement("h2");
  info.classList.add("h2style");
  info.innerText = "Momentan nichts zu tun";
  topDiv.appendChild(info);
} else {
  createList(inputList);
}

console.log(inputList);

function handleInput(event) {
  event.preventDefault();
  const newInput = event.target.value;
  inputList.push({ newInput });
  pushInput(inputList);
  inputField.value = "";
  createList(inputList);
  console.log(inputList);
}

function pushInput(inputList) {
  const jsontoDoList = JSON.stringify(inputList);
  localStorage.setItem("toDo", jsontoDoList);
}

inputField.addEventListener("change", handleInput);

function createList(liste) {
  topDiv.innerHTML = "";
  liste.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("listItemButton");
    const h2div = document.createElement("div");
    h2div.classList.add("h2div");
    const h2 = document.createElement("h2");
    h2.classList.add("h2style");
    h2.innerText = item.newInput;
    h2.setAttribute("id", `element${index}`);
    const checkButton = document.createElement("button");
    checkButton.classList.add("button2");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button1");
    const editButton = document.createElement("button");
    editButton.classList.add("button3");
    topDiv.appendChild(div);
    div.appendChild(checkButton);
    div.appendChild(h2div);
    h2div.appendChild(h2);
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    //handle check
    checkButton.addEventListener("click", () => {
      bottomDiv.appendChild(h2div);
      div.innerHTML = "";
    });

    //handle edit
    editButton.addEventListener("click", () => {
      let neuerText = prompt("Änderungen");
      h2.innerText = neuerText;
    });

    //handle delete
    deleteButton.addEventListener("click", () => {
      deleteItem(index);
    });
  });
}

function deleteItem(index) {
  inputList.splice(index, 1);

  localStorage.removeItem("toDo", "newInput");
  createList(inputList);
  pushInput(inputList);
}
