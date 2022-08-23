const name = document.getElementById("form-name");
const email = document.getElementById("form-email");
const subject = document.getElementById("form-subject");
const message = document.getElementById("form-message");
const formbtnedited = document.querySelector(".formbtnedited");
const btn = document.querySelector(".form-btn");

const submitted_msg = document.querySelector(".submitted-message");
console.log(submitted_msg);

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  alert("Sisestatud emaili aadress pole korrektne!");
  return false;
}

// function openConfirmation() {
//   submitted_msg.classList.remove("hidden");
// }

// function CloseConfirmation() {
//   submitted_msg.classList.add("hidden");
// }

// btn.addEventListener("click", function () {
//   console.log("wow");
//   if (
//     name.value.length !== 0 &&
//     subject.value.length !== 0 &&
//     message.value.length !== 0 &&
//     ValidateEmail() === true
//   )
//     openConfirmation();
// });

// formbtnedited.addEventListener("click", CloseConfirmation);
