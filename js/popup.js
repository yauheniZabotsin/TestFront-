const container = document.querySelectorAll(".container");
const popupLink = document.querySelector(".popup-link");
const popup = document.querySelector(".popup");
const popupBody = document.querySelector(".popup-body");
const popupBtn = document.querySelector(".popup-close");
const preloader = document.querySelector(".preloader");
const body = document.body;

popupLink.addEventListener("click", (event) => {
  preloader.classList.remove("hidden");
  popupLink.disabled = true;
  popupLink.classList.remove("wrap__btn-next-active");
  popupLink.style = "padding-left: 45px;";

  setTimeout(() => {
    popup.classList.add("open");
    body.classList.add("fixed");
    preloader.classList.add("hidden");
    popupLink.style = "";
  }, 3000);
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
  container.forEach((el, i) => {
    if (i === 0) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}
