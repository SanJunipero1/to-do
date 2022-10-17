const topDiv = document.getElementById("topDiv");
const bottomDiv = document.getElementById("bottomDiv");
const inputField = document.getElementById("todoTitle");
const listContainer = document.getElementById("listContainer");

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
const modal = document.querySelector("dialog");
function toggleModal() {
  modal.showModal();
}
addButton.addEventListener("click", toggleModal);

/**
 * check if localStorage !empty and create Items if true
 */
let inputList = JSON.parse(localStorage.getItem("toDo"));
//check storage
let checkList = JSON.parse(localStorage.getItem("done"));

if (!checkList) {
  checkList = [];
} else {
  createListDone(checkList);
}

if (!inputList) {
  inputList = [];
  const info = document.createElement("toDo");
  info.classList.add("h2style");
  info.innerText = "Momentan nichts zu tun";
  topDiv.appendChild(info);
} else {
  createList(inputList);
}

/**
 * Handle new Input of the Input field
 */
let newInput;
function handleInput(event) {
  event.preventDefault();
  newInput = event.target.value;
}

const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");

function submitToDo(inputList) {
  inputField.value = "";
  inputList.push({ newInput });
  pushInput(inputList);
  createList(inputList);
}
submitButton.addEventListener("click", () => {
  submitToDo(inputList);
});
cancelButton.addEventListener("click", () => {
  inputField.value = "";
});

function pushInput(inputList) {
  const jsontoDoList = JSON.stringify(inputList);
  localStorage.setItem("toDo", jsontoDoList);
}

inputField.addEventListener("change", handleInput);

/**
 * Create List of ToDos
 */
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
      deleteItem(index)
      checkList.push(h2div.innerText);
      const jsoncheckList = JSON.stringify(checkList);
      localStorage.setItem("done", jsoncheckList);
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

//handle delete + recreate ToDos and LocalStorage
function deleteItem(index) {
  inputList.splice(index, 1);
  localStorage.removeItem("toDo", "newInput");
  createList(inputList);
  pushInput(inputList);
}

/**
 * Create List of Done ToDos
 */
function createListDone(checkList) {
  bottomDiv.innerHTML = "";
  checkList.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("listItemButton");
    const h2div = document.createElement("div");
    h2div.classList.add("h2div");
    const h2 = document.createElement("h2");
    h2.classList.add("h2style");
    h2.innerText = item;
    h2.setAttribute("id", `element${index}`);
    bottomDiv.appendChild(div);
    div.appendChild(h2div);
    h2div.appendChild(h2);
  });
}