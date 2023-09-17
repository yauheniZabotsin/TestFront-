const regName = /[A-Za-zА-Яа-яЁё]/;

const inpName = document.getElementById("name");
const validatorName = document.querySelector(".validator-name");
const btnName = document.querySelector(".btn-name");

inpName.addEventListener("change", (e) => {
  if (!validate(regName, e.target.value)) {
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
