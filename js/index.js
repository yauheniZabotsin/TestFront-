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

const reg1 = /[A-Za-zА-Яа-яЁё]/;

const inpName = document.getElementById("name");
const validatorName = document.querySelector(".validator-name");
const btnName = document.querySelector(".btn-name");

inpName.addEventListener("change", (e) => {
  if (!validate(reg1, e.target.value)) {
    validatorName.textContent = "Введите имя";
    btnName.classList.add("notValid");
    btnName.classList.remove("isValid");
  } else {
    validatorName.textContent = "";
    btnName.classList.add("isValid");
    btnName.classList.remove("notValid");
  }
});

function validate(regex, inp) {
  return regex.test(inp);
}

const inpMess = document.getElementById("mess");
const message = document.querySelector(".message");

setInterval(() => {
  if (message.value) {
    inpMess.disabled = false;
    if (!inpMess.classList.contains("wrap__btn-next-active")) {
      inpMess.classList.add("wrap__btn-next-active");
    }
  } else {
    inpMess.disabled = true;
    if (inpMess.classList.contains("wrap__btn-next-active")) {
      inpMess.classList.remove("wrap__btn-next-active");
    }
  }
}, 0);
