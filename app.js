// 15 ==> 251 & 252 -----------------------------------
// input
const button = document.querySelector("button");
const eyeIcon = document.getElementById("eyeIcon");

const firstname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

let successMessage = document.getElementById("successMessage");

function emptyInput(item) {
  if (item.value == "") {
    item.classList.remove("errorBorder");
    item.classList.remove("successBorder");
  }
}
//
firstname.addEventListener("input", () => {
  if (firstname.value.length < 3) {
    firstname.classList.add("errorBorder");
    firstname.classList.remove("successBorder");
  } else {
    firstname.classList.remove("errorBorder");
    firstname.classList.add("successBorder");
  }
  emptyInput(firstname);
});
email.addEventListener("input", () => {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //fill
  if (pattern.test(email.value) == false) {
    email.classList.add("errorBorder");
    email.classList.remove("successBorder");
  } else {
    email.classList.remove("errorBorder");
    email.classList.add("successBorder");
  }
  emptyInput(email);
});
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    password.classList.add("errorBorder");
    password.classList.remove("successBorder");
  } else {
    password.classList.remove("errorBorder");
    password.classList.add("successBorder");
  }
  emptyInput(password);
});
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.classList.add("errorBorder");
    confirmPassword.classList.remove("successBorder");
  } else {
    confirmPassword.classList.remove("errorBorder");
    confirmPassword.classList.add("successBorder");
  }
  emptyInput(confirmPassword);
});
//
eyeIcon.addEventListener("click", () => {
  const passInput = document.getElementById("password");
  const confirmPassInput = document.getElementById("confirmPassword");
  if (passInput.type === "password" && confirmPassInput.type === "password") {
    passInput.type = "text";
    confirmPassInput.type = "text";
  } else {
    passInput.type = "password";
    confirmPassInput.type = "password";
  }

  document.querySelector(".fa-eye").classList.toggle("hidden");
  document.querySelector(".fa-eye-slash").classList.toggle("hidden");
});
//
function checkContainClass(input1, input2, input3, input4) {
  if (
    input1.classList.contains("successBorder") &&
    input2.classList.contains("successBorder") &&
    input3.classList.contains("successBorder") &&
    input4.classList.contains("successBorder")
  ) {
    successMessage.textContent = "ثبت نام با موفقیت انجام شد";
    successMessage.style.visibility = " visible";
  }
}
//
button.addEventListener("click", () => {
  checkContainClass(firstname, email, password, confirmPassword);
});
