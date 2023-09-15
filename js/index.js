const ageCurrent = document.querySelector(".age__current span");
const ageBtn = document.querySelector(".age__btn-range");

ageBtn.addEventListener("mouseover", () => {
  setInterval(() => (ageCurrent.textContent = ageBtn.value), 0);
});

const nextBtn = document.querySelectorAll(".wrap__btn-next");
const breakBtn = document.querySelectorAll(".wrap__btn-break");
const pages = document.querySelectorAll(".container");

nextBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    let page = e.target.closest(".wrap__btn").id;
    pages[page].classList.add("hidden");
    page++;
    pages[page].classList.remove("hidden");
  })
);

breakBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    let page = e.target.closest(".wrap__btn").id;
    pages[page].classList.add("hidden");
    page--;
    pages[page].classList.remove("hidden");
  })
);
