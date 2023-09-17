const checkbox = document.querySelector("input[type='checkbox']");
const sendBtn = document.querySelector(".popup-link");

checkbox.onchange = function () {
  const [...inputVal] = document.querySelectorAll(".item__input-btn");
  const validInp = inputVal
    .map((element) => element.classList.contains("isValid"))
    .every((e) => e === true);

  if (validInp && !checkbox.checked) {
    sendBtn.disabled = false;
    sendBtn.classList.add("wrap__btn-next-active");
  } else {
    sendBtn.disabled = true;
    sendBtn.classList.remove("wrap__btn-next-active");
  }
};
