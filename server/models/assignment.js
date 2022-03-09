
// this file contains the model for the assignment
import mongoose from "mongoose";

const AssignmentSchema = mongoose.Schema({
    courseID : { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    dateCreated : {type:Date, required:true},
    dateDue : {type: Date, required : true},
    assignmentTitle : {type : String, required: true},
    assignmentInstruction : {type: String, required:true},
    assignmentAttachment : {type : String, required:true}
}, { collection: 'Assignments' });

export default mongoose.model("Assignment", AssignmentSchema);