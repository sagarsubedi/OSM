import mongoose from "mongoose";

const resourceSchema = mongoose.Schema({
    resourceTitle : {type : String},
    resourcePath : {type: String}
}, { collection: 'Resources' });

const model = mongoose.model("Resource", resourceSchema);
export default model;