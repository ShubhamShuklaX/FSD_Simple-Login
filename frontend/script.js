const BACKEND_URL = "http://localhost:3000";

const form = document.getElementById("loginForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    responseMessage.textContent = data.message;
    responseMessage.style.color = data.success ? "green" : "red";

  } catch (err) {
    responseMessage.textContent = "Cannot reach backend";
    responseMessage.style.color = "red";
  }
});