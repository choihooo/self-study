const num = document.querySelector(".num");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

increase.addEventListener("click", () => {
  console.log("click increase");
  let number = parseInt(num.innerHTML);
  num.innerHTML = number + 1;
});

decrease.addEventListener("click", () => {
  console.log("click decrease");
  let number = parseInt(num.innerHTML);
  num.innerHTML = number - 1;
});
