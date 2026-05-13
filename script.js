const loginForm = document.getElementById("loginForm");

const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

const btnText =
document.getElementById("btnText");

const message =
document.getElementById("message");

/* Show / Hide Password */
togglePassword.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "👁️";
    }
});

/* Login Form */
loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const passwordValue =
    password.value.trim();

    /* Validation */
    if(!email.includes("@")){

        message.textContent =
        "Please enter valid email ❌";

        return;
    }

    if(passwordValue.length < 6){

        message.textContent =
        "Password must be at least 6 characters ❌";

        return;
    }

    /* Loading Animation */
    btnText.textContent = "Loading...";

    setTimeout(() => {

        btnText.textContent = "Login";

        message.textContent =
        "Login Successful ✅";

    }, 2000);
});