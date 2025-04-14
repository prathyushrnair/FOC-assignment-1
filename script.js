// Login form validation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        let isValid = true;

        // Clear previous error messages
        document.getElementById("usernameError").textContent = "";
        document.getElementById("passwordError").textContent = "";

        // Validate username
        if (username === "") {
            document.getElementById("usernameError").textContent = "Username is required.";
            isValid = false;
        }

        // Validate password
        if (password === "") {
            document.getElementById("passwordError").textContent = "Password is required.";
            isValid = false;
        }

        // If valid, submit the form
        if (isValid) {
            alert("Login successful!");
            loginForm.submit();
        }
    });
});