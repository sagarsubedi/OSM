import express from "express";
import { getAnnouncements, getResources, getAssignments, getTestQuizzes, getStudents, getCourses, getProfessors } from "../controllers/get.js";

const router = express.Router();

router.get("/announcements", getAnnouncements);

router.get("/assignments", getAssignments);

router.get("/resources", getResources);

router.get("/testAndQuizzes", getTestQuizzes);

router.get("/students", getStudents);

router.get("/courses", getCourses);

router.get("/professors", getProfessors);

export default router;