import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const PORT = 5000;
const saltRounds = 10;
dotenv.config();

app.use(cors());
app.use(express.json());

const db = new pg.Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});

db.connect();

app.get("/pets", (req, res) => {
  db.query("SELECT * FROM pets", (err, petRes) => {
    if (err) {
      console.log("Error fetching pet data", err);
    }

    res.json(petRes.rows);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email=$1", [email], (err, dbRes) => {
    if (err) {
      console.log("error getting the query", err);
      return res.status(500).json({ msg: "Database error", state: false });
    }

    if (dbRes.rows.length === 0) {
      return res.json({ msg: "email not found", state: false });
    } else {
      bcrypt.compare(password, dbRes.rows[0].password, (checkErr, result) => {
        if (checkErr) {
          console.log("error while comparing pw", checkErr);
          return res.status(500).json({ msg: "Compare failed", state: false });
        } else {
          if (result) {
            return res.json({ msg: "Successful login", state: true });
          } else {
            return res.json({ msg: "Password Incorrect", state: false });
          }
        }
      });
    }
  });
});

app.post("/register", (req, res) => {
  const { fName, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (hashErr, hash) => {
    if (hashErr) {
      console.log("error hashing", hashErr);
    } else {
      db.query(
        "INSERT INTO users (fullname, password, email) VALUES ($1,$2,$3) RETURNING user_id, fullname, email",
        [fName, hash, email],
        (err, regRes) => {
          if (err) {
            console.log("error registering:", err);

            return res.status(500).json({
              message: "Registration failed",
              state: false,
              pgError: err.message,
              detail: err.detail,
              code: err.code,
            });
          }

          return res.json({
            message: "Registry Successful",
            state: true,
            user: regRes.rows[0],
          });
        }
      );
    }
  });
});

app.post("/newAnimal", (req, res) => {
  const {
    name,
    type,
    breed,
    age,
    agegroup,
    size,
    energy,
    badge,
    img
  } = req.body;

  const query = `
    INSERT INTO pets 
    (name, type, breed, age, agegroup, size, energy, badge, img)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
  `;

  db.query(
    query,
    [name, type, breed, age, agegroup, size, energy, badge, img],
    (err) => {
      if (err) {
        console.log("Error inserting new pet", err);
        return res.status(500).json({ message: "Failed to add pet" });
      }

      res.json({ message: "Pet added successfully" });
    }
  );
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
