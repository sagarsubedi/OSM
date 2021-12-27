// model for a student

import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentFirstName : {type : String, required: true},
    studentLastName : {type : String, required: true},
    studentEmail : {type : String, required: true},
    studentClass : {type : String},
    studentGrade : {type : String},
    studentAssignments : [{
        assignmentId : {type : String},
        assignmentGrade : {type : String},
        assignmentStatus : {type : String},
        assignmentRemarks : {type : String},
        assignmentCompeletedDate : {type : Date},
    }],
    studentTestQuizzes : [{
        testQuizId : {type : String},
        testQuizGrade : {type : String},
        testQuizStatus : {type : String},
        testQuizRemarks : {type : String},
        testQuizCompleted : {type : Boolean},
        testQuizCompletedDate : {type : Date},
    }],
    studentAnnouncements : [{
        announcementId : {type : String},
        announcementStatus : {type : String},
    }],
    // we need a courseId to link the student to a course

}, { collection: 'Students' });

export default mongoose.model("Student", studentSchema);