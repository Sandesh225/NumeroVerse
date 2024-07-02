import express from "express";
import cors from "cors";
import test from "../controllers/authControllers.js";

const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

router.get("/", test);

export default router;
