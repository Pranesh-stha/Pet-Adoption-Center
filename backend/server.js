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

app.post("/login",(req,res)=>{
  const {email, password}= req.body;
  db.query("SELECT * FROM users WHERE email=$1",[email],(err,dbRes)=>{
    if(err){
      console.log("error getting the query", err)
    }

    if(dbRes.rows.length ===0){
      return res.json({msg:"email not found", state:false})
    } else if (dbRes.rows[0].password != password){
      return res.json({msg:"Password Incorrect", state:false})
    } else{
      return res.json({msg:"Successful login", state:true})
    }
  })
})





app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})