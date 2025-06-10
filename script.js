function login() {
  const userId = document.getElementById('userid').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Check correct user
  if (userId === "1000054871245007" && password === "842014") {
    window.location.href = "Home.html"; // Redirect to home
  } else {
    errorMsg.textContent = "❌ Invalid User ID or Password!";
  }
}
function toggleBalance() {
  const balanceSpan = document.getElementById("balance");
  if (balanceSpan.textContent === "******") {
    balanceSpan.textContent = "₹8,45,23,500.00";
  } else {
    balanceSpan.textContent = "******";
  }
}
