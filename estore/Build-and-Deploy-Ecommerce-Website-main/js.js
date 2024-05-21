const warning = document.getElementById("danger");
const close = document.getElementById("close");
const submit = document.getElementById("submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

document.addEventListener("DOMContentLoaded", function () {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (username.value === "" || password.value === "") {
      warning.classList.add("active");
      close.addEventListener("click", function () {
        warning.classList.remove("active");
      });
    }
  });
});
