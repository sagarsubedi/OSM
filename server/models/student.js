// model for a student

import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
    studentFirstName : {type : String, required: true},
    studentLastName : {type : String, required: true},
    studentEmail : {type : String, required: true},
    studentClass : {type : String},
    studentAssignments : [{
        assignmentId : {type : Schema.ObjectId, ref: 'Assignments'},
        assignmentGrade : {type : String, enum : ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"]},
        assignmentStatus : {type : String, enum : ["Not Started", "Started", "Submitted", "Returned"]},
        assignmentRemarks : {type : String},
        assignmentCompletedDate : {type : Date},
    }],
    studentTestQuizzes : [{
        testQuizId : {type : Schema.ObjectId, ref: 'TestQuizzes'},
        testQuizGrade : {type : String, enum : ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"]},
        testQuizStatus : {type : String, enum : ["Not Started", "Submitted", "Returned"]},
        testQuizRemarks : {type : String},
        testQuizCompletedDate : {type : Date},
    }],
    studentAnnouncements : [{
        announcementId : {type : Schema.ObjectId, ref: 'Announcements'},
        announcementStatus : {type : String, enum : ["Read", "Not Read"]},
    }],
    // we need a courseId to link the student to a course

}, { collection: 'Students' });

export default mongoose.model("Student", studentSchema);