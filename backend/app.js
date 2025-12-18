const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "database",
  user: "root",
  password: "example",
  database: "dockerdb"
});

app.get("/api/notes", (req, res) => {
  db.query(
    "SELECT * FROM notes ORDER BY created_at DESC",
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

app.post("/api/notes", (req, res) => {
  const { user, message } = req.body;
  db.query(
    "INSERT INTO notes (user, message) VALUES (?, ?)",
    [user, message],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId });
    }
  );
});

app.get("/api/info", (req, res) => {
  res.json({ message: "Backend toimii!" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});

// Poista muistiinpano id:n perusteella
app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  db.query("DELETE FROM notes WHERE id = ?", [noteId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});
