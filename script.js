function login() {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const correctUserId = "1000054871245007";
  const correctPassword = "842014";

  if (userId === correctUserId && password === correctPassword) {
    window.location.href = "home.html"; // Proceed to Dashboard
  } else {
    errorMsg.textContent = "❌ Invalid User ID or Password. Please try again.";
  }
}
