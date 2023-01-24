// DOM
// btn
const confirmBtn = document.querySelector(".form__btn");
// inputs
const nameInp = document.querySelector(".input-name");
const numberInp = document.querySelector(".input-card-number");
const dateInpts = document.querySelectorAll(".input-date");
const dateMonthsInp = document.querySelector(".input-date-months");
const dateYearsInp = document.querySelector(".input-date-years");
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
// CARD ELEMENTS REAL TIME VALUE
nameInp.addEventListener("input", () => {
  cardOwner.textContent = nameInp.value.length === 0 ? "Jane Appleseed" : nameInp.value;
});
numberInp.addEventListener("input", () => {
  cardNumber.textContent = numberInp.value.length === 0 || /[a-z]/gi.test(numberInp.value) ? "0000 0000 0000 0000" : numberInp.value;
});
// numberInp.addEventListener("input", () => {
//     numberInp.value += [4, 9, 14].includes(numberInp.value.length) ? " ": "";
//   });
dateMonthsInp.addEventListener("input", () => {
  cardDateMonths.textContent = dateMonthsInp.value.length === 0 || /[a-z]/gi.test(dateMonthsInp.value) ? "00" : dateMonthsInp.value;
});
// VALIDATION
confirmBtn.disabled = true;
