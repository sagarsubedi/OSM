import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
    courseID : { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    resourceTitle : {type : String},
    resourcePath : {type: String}
}, { collection: 'Resources' });

const model = mongoose.model("Resource", resourceSchema);
export default model;