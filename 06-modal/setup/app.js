// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modal = document.querySelector(".modal-btn");
const overmodal = document.querySelector(".modal-overlay");
const closemodal = document.querySelector(".close-btn");

modal.addEventListener("click", function () {
    overmodal.classList.add("open-modal");
});

closemodal.addEventListener("click", function () {
    overmodal.classList.remove("open-modal");
});