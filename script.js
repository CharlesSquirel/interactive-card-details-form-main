// DOM
// form
const form = document.querySelector(".form");
// btn
const confirmBtn = document.querySelector(".form__btn");
let btnReady = 0;
// inputs
const nameInp = document.querySelector(".input-name");
const numberInp = document.querySelector(".input-card-number");
const dateInpts = document.querySelectorAll(".input-date");
const cvcInp = document.querySelector(".input-cvc");
// errors
const nameErr = document.querySelector(".error-input-name");
const numberErr = document.querySelector(".error-input-card-number");
const dateErr = document.querySelector(".error-input-date");
const cvcErr = document.querySelector(".error-input-cvc");
// card elements
const cardNumber = document.querySelector(".card-front-number");
const cardOwner = document.querySelector(".card-front-owner");
const cardDateMonths = document.querySelector(".expiration-date-months");
const cardDateYears = document.querySelector(".expiration-date-years");
const cardCvc = document.querySelector(".card-back-cvc-number");
// thanks card
const thanksCard = document.querySelector(".thanks-card-container");
// CARD ELEMENTS REAL TIME VALUE
// name
nameInp.addEventListener("input", () => {
  cardOwner.textContent = nameInp.value.length === 0 || /[0-9]/gi.test(nameInp.value) || /\W/gi.test(nameInp.value) ? "Jane Appleseed" : nameInp.value;
});
// number
numberInp.addEventListener("input", () => {
  cardNumber.textContent = numberInp.value.length === 0 || /[a-z]/gi.test(numberInp.value) || /\W/gi.test(nameInp.value) ? "0000 0000 0000 0000" : numberInp.value;
});
// dates
dateInpts.forEach((inp) => {
  inp.addEventListener("input", (e) => {
    if (e.target.className.includes("input-date-months")) {
      cardDateMonths.textContent = inp.value.length === 0 || /[a-z]/gi.test(inp.value) || /\W/gi.test(inp.value) ? "00" : inp.value.length === 1 ? "0" + inp.value : inp.value;
    }
    if (e.target.className.includes("input-date-years")) {
      cardDateYears.textContent = inp.value.length === 0 || /[a-z]/gi.test(inp.value) || /\W/gi.test(inp.value) ? "00" : inp.value.length === 1 ? "0" + inp.value : inp.value;
    }
  });
});
// cvc
cvcInp.addEventListener("input", () => {
  cardCvc.textContent =
    cvcInp.value.length === 0 || /[a-z]/gi.test(cvcInp.value) || /\W/gi.test(nameInp.value)
      ? "000"
      : cvcInp.value.length === 1
      ? "00" + cvcInp.value
      : cvcInp.value.length === 2
      ? "0" + cvcInp.value
      : cvcInp.value;
});
// VALIDATION
const confirmReady = () => {
  if (btnReady === 5) {
    confirmBtn.disabled = false;
  }
};
confirmBtn.disabled = true;
// name
nameInp.addEventListener("blur", () => {
  if (nameInp.value.length === 0) {
    nameErr.textContent = "Please provide any letter";
    nameErr.style.display = "block";
  } else if (/[0-9]/gi.test(nameInp.value) || /\W/gi.test(nameInp.value)) {
    nameErr.textContent = "Name contains invalid characters";
    nameErr.style.display = "block";
  } else if (nameInp.value.length < 4) {
    nameErr.textContent = "Name is too short";
    nameErr.style.display = "block";
  } else {
    nameErr.style.display = "none";
    btnReady++;
    confirmReady();
  }
});
// number
numberInp.addEventListener("blur", () => {
  if (numberInp.value.length === 0) {
    numberErr.textContent = "Please provide any number";
    numberErr.style.display = "block";
  } else if (/[a-z]/gi.test(numberInp.value) || /\W/gi.test(numberInp.value)) {
    numberErr.textContent = "Field contains invalid characters";
    numberErr.style.display = "block";
  } else if (numberInp.value.length !== 16) {
    numberErr.textContent = "Number should have 16 digits";
    numberErr.style.display = "block";
  } else {
    numberErr.style.display = "none";
    btnReady++;
    confirmReady();
  }
});
// dates
dateInpts.forEach((inp) => {
  inp.addEventListener("blur", () => {
    if (inp.value.length === 0) {
      dateErr.textContent = "Provide date of expiration";
      dateErr.style.display = "block";
    } else if (/[a-z]/gi.test(inp.value) || /\W/gi.test(inp.value)) {
      dateErr.textContent = "Only digits are valid";
      dateErr.style.display = "block";
    } else if (inp.value === "0") {
      dateErr.textContent = 'Value can\'t be "0"';
      dateErr.style.display = "block";
    } else {
      dateErr.style.display = "none";
      btnReady++;
      confirmReady();
    }

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(inp.value)) {
      inp.value = "0" + inp.value;
    }
  });
});
// cvc
cvcInp.addEventListener("blur", () => {
  if (cvcInp.value.length === 0) {
    cvcErr.textContent = "Provide a CVC number";
    cvcErr.style.display = "block";
  } else if (/[a-z]/gi.test(cvcInp.value) || /\W/gi.test(cvcInp.value)) {
    cvcErr.textContent = "Provide a valid CVC number";
    cvcErr.style.display = "block";
  } else {
    cvcErr.style.display = "none";
    btnReady++;
    confirmReady();
  }

  if (cvcInp.value.length === 2) {
    cvcInp.value = "0" + cvcInp.value;
  } else if (cvcInp.value.length === 1) {
    cvcInp.value = "00" + cvcInp.value;
  }
});

// THANKS PAGE
confirmBtn.addEventListener("click", () => {
  form.style.display = "none";
  thanksCard.style.display = "flex";
});
