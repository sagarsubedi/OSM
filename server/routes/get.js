import express from "express";
import { getAnnouncements } from "../controllers/get.js";

const router = express.Router();

router.get("/announcements", getAnnouncements);

export default router;