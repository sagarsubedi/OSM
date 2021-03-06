// model for course

import mongoose, { Schema } from "mongoose";

const courseSchema = mongoose.Schema({
    courseName : {type : String, required: true},
    courseDescription : {type : String},
    courseStartDate : {type : Date},
    courseEndDate : {type : Date},
    courseInstructor : {type : String, required: true},
    courseStudents : [{
        studentId : {type : Schema.ObjectId, ref: 'Students'},
    }],
    courseAssignments : [{
        assignmentId : {type : Schema.ObjectId, ref: 'Assignments'},
    }],
    courseTestQuizzes : [{
        testQuizId : {type : Schema.ObjectId, ref: 'TestQuizzes'},
    }],
    courseAnnouncements : [{
        announcementId : {type : Schema.ObjectId, ref: 'Announcements'},
    }],
    courseResources : [{
        resourceId : {type : Schema.ObjectId, ref: 'Resources'},
    }],
}, { collection: 'Courses' });

export default mongoose.model("Course", courseSchema);
