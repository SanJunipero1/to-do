/**
 * Toggle Modal
 */
const addButton = document.querySelector("#open-dialog");
const modal = document.querySelector(".addTodo dialog");

function toggleModal() {
  modal.show();
}
addButton.addEventListener("click", toggleModal);
