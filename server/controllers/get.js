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

export const getAssignments = async (req, res) => {
    try{
        const assignments = await Assignment.find({});
        res.json(assignments);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};

export const getResources = async (req, res) => {
    try{
        const resources = await Resource.find({});
        res.json(resources);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};

export const getTestQuizzes = async (req, res) => {
    try{
        const testQuizzes = await TestQuiz.find({});
        res.json(testQuizzes);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};

export const getStudents = async (req, res) => {
    try{
        const students = await Student.find({});
        res.json(students);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};

export const getProfessors = async (req, res) => {
    try{
        const professors = await Professor.find({});
        res.json(professors);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};

export const getCourses = async (req, res) => {
    try{
        const courses = await Course.find({});
        res.json(courses);
    }catch(err){
        res.status(500).json({success : false, error : err.message});
    }
};
