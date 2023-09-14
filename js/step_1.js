const ageCurrent = document.querySelector(".age__current span");
const ageBtn = document.querySelector(".age__btn-range");

ageBtn.addEventListener("mouseover", () => {
  setInterval(() => (ageCurrent.textContent = ageBtn.value), 0);
});
