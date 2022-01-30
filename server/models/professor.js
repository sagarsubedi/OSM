// model for professor

import mongoose from "mongoose";

const createProfessor = mongoose.Schema({
    professorFirstName : {type : String, required: true},
    professorLastName : {type : String, required: true},
    professorEmail : {type : String, required: true},
    courses : [{
        courseId : {type : mongoose.ObjectId,  ref : 'Courses', required: true},
    }],
}, { collection: 'Professors' });

export default mongoose.model("Professor", createProfessor);
