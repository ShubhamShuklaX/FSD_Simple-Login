const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded user
const user = {
  username: "admin",
  password: "1234"
};

// POST /login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful!"
    });
  }

  res.json({
    success: false,
    message: "Invalid credentials"
  });
});

// Local server port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});