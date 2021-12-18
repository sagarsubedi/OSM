
// this file contains the model for the assignment
import mongoose from "mongoose";

const AssignmentSchema = mongoose.Schema({
    assignmentID : {type: Number, required:true},
    dateCreated : {type:Number, required:true},
    dateDue : {type: Number, required : true},
    assignmentTitle : {type : String, required: true},
    assignmentInstruction : {type: String, required:true},
    assignmentAttachment : {type : String, required:true}
});

const model = mongoose.model("assignment", AssignmentSchema);

module.exports = model;