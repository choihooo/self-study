const modal = document.querySelector(".modal-wrapper");
const open = document.querySelector("#open-btn");
const close = document.querySelector("#close-btn");

open.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};
