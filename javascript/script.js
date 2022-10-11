
const checkItem = document.getElementById("check")
const deleteItem = document.getElementById("delete")
const editItem = document.getElementById("edit")


const addButton = document.querySelector("#open-dialog");
const modal = document.querySelector(".addTodo dialog");

function toggleModal() {
  modal.show();
}
addButton.addEventListener("click", toggleModal);

