
// this file contains the model for the assignment
import mongoose from "mongoose";

const AssignmentSchema = mongoose.Schema({
    assignmentID : {type: Number, required:true},
    dateCreated : {type:Date, required:true},
    dateDue : {type: Date, required : true},
    assignmentTitle : {type : String, required: true},
    assignmentInstruction : {type: String, required:true},
    assignmentAttachment : {type : String, required:true}
}, { collection: 'Assignments' });

const model = mongoose.model("assignment", AssignmentSchema);

module.exports = model;