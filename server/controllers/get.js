import Announcement from "../models/announcement.js";
import Resource from "../models/resource.js";
import Assignment from "../models/assignment.js";
import TestQuiz from "../models/testAndQuiz.js";
import Student from "../models/student.js";
import Professor from "../models/professor.js";
import Course from "../models/course.js";


export const getAnnouncements = async (req, res) => {
    try{
        const announcements = await Announcement.find({});
        res.json(announcements);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};
