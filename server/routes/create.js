// for all the requests related to POST requests on /create/ route
// no logic, just routing

import express from "express";
import { createAnnouncement, createResource, createAssignment, createTestQuiz, createStudent, createCourse, createProfessor } from "../controllers/create.js";


const router = express.Router();

// / here means /create/
router.get("/", (req,res) => {
    res.send("<h1>This is the localhost/create path</h1>");
});

// for creating announcements
router.post("/announcement", createAnnouncement);

// for creating resources
router.post("/resource", createResource);

// for creating assignments
router.post("/assignment", createAssignment);

// for creating testAndQuizzes
router.post("/testAndQuiz", createTestQuiz);

// for creating students
router.post("/student", createStudent);

// for creating courses
router.post("/course", createCourse);

// for creating professors
router.post("/professor", createProfessor);

export default router;