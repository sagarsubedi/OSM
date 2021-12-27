// model for course

import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseName : {type : String, required: true},
    courseDescription : {type : String, required: true},
    courseStartDate : {type : Date, required: true},
    courseEndDate : {type : Date, required: true},
    courseInstructor : {type : String, required: true},
    courseStudents : [{
        studentId : {type : String},
    }],
    courseAssignments : [{
        assignmentId : {type : String},
    }],
    courseTestQuizzes : [{
        testQuizId : {type : String},
    }],
    courseAnnouncements : [{
        announcementId : {type : String},
    }],
    courseResources : [{
        resourceId : {type : String},
    }],
}, { collection: 'Courses' });

export default mongoose.model("Course", courseSchema);
