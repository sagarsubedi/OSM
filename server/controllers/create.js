// handlers for all POST requests
// logic for all posts requests

// import all the models 
import Announcement from "../models/announcement.js";
import Resource from "../models/resource.js";
import Assignment from "../models/assignment.js";
import TestQuiz from "../models/testAndQuiz.js";
import Student from "../models/student.js";
import Professor from "../models/professor.js";
import Course from "../models/course.js";

export const createAnnouncement = (req,res) => {
    
    // create the announcement object
    let announcement = new Announcement(req.body);
    announcement.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating announcement");
        } else {
            res.send(announcement);
        }
    });
};

export const createResource = (req,res) => {
        
    // create the resource object
    let resource = new Resource(req.body);
    resource.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating resource");
        } else {
            res.send(resource);
        }
    });
};

export const createAssignment = (req,res) => {
        
    // create the assignment object
    let assignment = new Assignment(req.body);
    assignment.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating assignment");
        } else {
            res.send(assignment);
        }
    });
};

export const createTestQuiz = (req,res) => {
    // create the testQuiz object
    let testQuiz = new TestQuiz(req.body);
    testQuiz.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating testQuiz");
        } else {
            res.send(testQuiz);
        }
    });
};


export const createStudent = (req,res) => {
            
    // create the student object
    let student = new Student(req.body);
    student.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating student");
        } else {
            res.send(student);
        }
    });
};

export const createProfessor = (req,res) => {
    // create the professor object
    let professor = new Professor(req.body);
    professor.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating professor");
        } else {
            res.send(professor);
        }
    });
};

export const createCourse = (req,res) => {
    // create the course object
    let course = new Course(req.body);
    course.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating course");
        } else {
            res.send(course);
        }
    });
};