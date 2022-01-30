// model for course

import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseName : {type : String, required: true},
    courseDescription : {type : String},
    courseStartDate : {type : Date},
    courseEndDate : {type : Date},
    courseInstructor : {type : String, required: true},
    courseStudents : [{
        studentId : {type : mongoose.ObjectId, ref: 'Students'},
    }],
    courseAssignments : [{
        assignmentId : {type : mongoose.ObjectId, ref: 'Assignments'},
    }],
    courseTestQuizzes : [{
        testQuizId : {type : mongoose.ObjectId, ref: 'TestQuizzes'},
    }],
    courseAnnouncements : [{
        announcementId : {type : mongoose.ObjectId, ref: 'Announcements'},
    }],
    courseResources : [{
        resourceId : {type : mongoose.ObjectId, ref: 'Resources'},
    }],
}, { collection: 'Courses' });

export default mongoose.model("Course", courseSchema);
