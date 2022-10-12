const checkItem = document.getElementById("check");
const deleteItem = document.getElementById("delete");
const editItem = document.getElementById("edit");

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
 * Helper Function for adding Attributes
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

/**
 * Add ToDo Add Functionality
 */
const toDoTopContainer = document.querySelector(".toDoTop");
const submit = document.querySelector("#submit");
const inputHeadline = document.querySelector("input#todoTitle");
let toDoHeadline = "";
let toDoArray = [];
let i;

function createToDo(headlineContent = "Platzhalter") {
  //iteration for each element in Array so every Element can have a unique Id
  for (i = 0; i <= toDoArray.length; i++) {}
  const toDoOuter = document.createElement("div");
  const toDoOuterAttributes = { class: "listItem", id: `toDo${i}` };
  setAttributes(toDoOuter, toDoOuterAttributes);
  toDoOuter.setAttribute("class", `listItem`);

  //Create done Checkbox
  const doneOuter = document.createElement("div");

  const doneInput = document.createElement("button");
  const inputAttributes = { id: "class" };
  setAttributes(doneInput, inputAttributes);
  doneOuter.append(doneInput);

  //Create ToDo Headline
  const headlineOuter = document.createElement("div");
  const headline = document.createElement("h2");
  headline.innerText = headlineContent;
  headlineOuter.appendChild(headline);

  //Create Edit Button
  const editBtnOuter = document.createElement("div");
  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "edit");
  editBtnOuter.appendChild(editBtn);

  //Create Delete Button
  const delBtnOuter = document.createElement("div");
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delete");
  delBtnOuter.appendChild(delBtn);

  //Append completed ToDo
  toDoOuter.append(doneOuter, headlineOuter, editBtnOuter, delBtnOuter);
  toDoTopContainer.appendChild(toDoOuter);

  //Add ToDo to Array
  toDoArray.push(toDoOuter);
  console.log(toDoArray);
}

/**
 * EventListener für Add Funktion
 */
function handleChange(event) {
  toDoHeadline = event.target.value;
}
inputHeadline.addEventListener("change", handleChange);

submit.addEventListener("click", () => {
  inputHeadline.value = "";
  createToDo(toDoHeadline);
});
