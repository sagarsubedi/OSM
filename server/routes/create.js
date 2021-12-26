// for all the requests related to POST requests on /create/ route
// no logic, just routing

import express from "express";
import { createAnnouncement, createResource } from "../controllers/create.js";


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


// for creating testAndQuizzes

// for creating courses

// for creating professors

// for creating students

export default router;