import express from "express"
import getRandomImg from "../controllers/controllers.js"
const router = express.Router();

router.get("/random" , getRandomImg)


export default router;