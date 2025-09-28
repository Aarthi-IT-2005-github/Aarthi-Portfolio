const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // Change this to your MySQL password
  database: "portfolioDB",
});

// POST: Submit contact form
app.post("/api/contact", (req, res) => {
  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO contact_form (name, email, mobile, message) VALUES (?, ?, ?, ?)";
  const values = [name, email, mobile, message];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Failed to submit message" });
    }
    res.status(200).json({ message: "Message successfully submitted" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
