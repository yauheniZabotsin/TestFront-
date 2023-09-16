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
    if (page != 2) {
      pages[page].classList.add("hidden");
      page++;
      pages[page].classList.remove("hidden");
    }
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

const popupLink = document.querySelector(".popup-link");
const popup = document.querySelector(".popup");
const popupBody = document.querySelector(".popup-body");
const popupBtn = document.querySelector(".popup-close");
const body = document.body;

console.log(popupBody);

popupLink.addEventListener("click", (event) => {
  popup.classList.add("open");
  body.classList.add("fixed");
  // if(event.target.closest(".testimonials-card")){}
});
popupBtn.addEventListener("click", () => {
  popup.classList.remove("open");
  body.classList.remove("fixed");
});
popupBody.addEventListener("click", popupClose);

function popupClose(e) {
  if (!e.target.closest(".popup-content")) {
    body.classList.remove("fixed");
    popup.classList.toggle("open");
  }
  pages.forEach((el, i) => {
    if (i === 0) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}
