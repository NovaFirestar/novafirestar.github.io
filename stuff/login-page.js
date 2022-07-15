const { ALLOWED_STICKER_EXTENSIONS } = require("@discordjs/rest");

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Max" && password === "Novajt@1104!") {
        alert("You have been successfully logged in. fag");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})