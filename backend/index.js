import express from "express";
import { config as dotenvConfig } from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; 

const app = express();
const port = 8000;

dotenvConfig();

const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"UserData",
  password:"Sujan@225",
  port:5173
});
db.connect();

app.use('/', authRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));
