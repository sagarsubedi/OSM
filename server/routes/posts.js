// for all the post requests
// no logic, just routing

import express from "express";
import { getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts); 


export default router;