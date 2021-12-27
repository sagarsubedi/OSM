// model for professor

import mongoose from "mongoose";

const createProfessor = mongoose.Schema({
    professorFirstName : {type : String, required: true},
    professorLastName : {type : String, required: true},
    professorEmail : {type : String, required: true},
    courses : [{
        courseId : {type : String},
    }],
}, { collection: 'Professors' });

export default mongoose.model("Professor", createProfessor);
