document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    // Store user data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! Please log in.");
    showLogin();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored data
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        showSecuredPage();
    } else {
        alert("Invalid username or password!");
    }
});

function showRegister() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("securedPage").style.display = "none";
}

function showLogin() {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("securedPage").style.display = "none";
}

function showSecuredPage() {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("securedPage").style.display = "block";
}

function logout() {
    alert("You have logged out.");
    showLogin();
}

// Show the registration form by default
showRegister();
