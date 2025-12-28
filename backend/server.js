import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"
import bcrypt from "bcrypt"

const app = express();
const PORT = 5000;
dotenv.config()

app.use(cors())
app.use(express.json())


const db = new pg.Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});

db.connect()

app.get("/pets", (req,res)=>{
  db.query("SELECT * FROM pets", (err, petRes)=>{
    if(err){
      console.log("Error fetching pet data", err)
    }

    res.json(petRes.rows)
  })
})





app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})