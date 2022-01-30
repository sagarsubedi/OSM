// model for a student

import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentFirstName : {type : String, required: true},
    studentLastName : {type : String, required: true},
    studentEmail : {type : String, required: true},
    studentClass : {type : String},
    studentAssignments : [{
        assignmentId : {type : mongoose.ObjectId, ref: 'Assignments'},
        assignmentGrade : {type : String, enum : ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"], required : true},
        assignmentStatus : {type : String, enum : ["Not Started", "Started", "Submitted", "Returned"], require : true, default : "Not Started"},
        assignmentRemarks : {type : String},
        assignmentCompletedDate : {type : Date},
    }],
    studentTestQuizzes : [{
        testQuizId : {type : mongoose.ObjectId, ref: 'TestQuizzes'},
        testQuizGrade : {type : String, enum : ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"], required : true},
        testQuizStatus : {type : String, enum : ["Not Started", "Submitted", "Returned"], required : true, default : "Not Started"},
        testQuizRemarks : {type : String},
        testQuizCompletedDate : {type : Date},
    }],
    studentAnnouncements : [{
        announcementId : {type : mongoose.ObjectId, ref: 'Announcements'},
        announcementStatus : {type : String, enum : ["Read", "Not Read"], required : true, default : "Not Read"},
    }],
    studentNotes: [{
        noteTitle : {type : String, required : true},
        noteContent : {type : String, required : true},
        noteCreatedDate : {type : Date, default: Date.now},
        noteColor : {type : String, enum : ["red", "orange", "yellow", "green", "blue", "purple"], default : "green", required : true},
    }],
    // we need a courseId to link the student to a course
    studentCourses : [{
        courseId : {type : mongoose.ObjectId, ref: 'Courses'},
    }],

}, { collection: 'Students' });

export default mongoose.model("Student", studentSchema);