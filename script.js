document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "password") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login successful!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Invalid credentials.";
  }
});
