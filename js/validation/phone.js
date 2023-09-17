const regExpBelarusPhone =
  "^\\+375-\\((17|29|33|44)\\)-[0-9]{3} -[0-9]{2} -[0-9]{2}$";
const regExpRussianPhone = "";

//add mask
const cssPhone = 'input[name="phone"]';
new phoneMask().init(cssPhone);

const phoneInput = document.querySelector("#phone-number");
const phoneLabel = document.querySelector("#phone-label");

const eventTypesInputPhone = ["focus", "keydown", "focusout"];

eventTypesInputPhone.forEach((eventType) => {
  phoneInput.addEventListener(eventType, (event) => {
    //validation number
    const isPhoneValid = isPhoneNumberValid(
      event.target.value,
      regExpBelarusPhone
    );
    toggleValidateClassToPhoneInput(isPhoneValid);
  });
});

function isPhoneNumberValid(phoneNumber, regExp) {
  return phoneNumber.match(regExp);
}

function toggleValidateClassToPhoneInput(isValid) {
  if (isValid) {
    phoneInput.classList.remove("invalid-phone");
    phoneLabel.classList.remove("validator-tel");
    phoneLabel.textContent = "";
    phoneInput.classList.add("isValid");
  } else {
    phoneInput.classList.add("invalid-phone");
    phoneLabel.classList.add("validator-tel");
  }
}
