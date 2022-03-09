import mongoose from "mongoose";

const announcementSchema = mongoose.Schema({
    courseID : { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    announcementTitle : {type : String},
    announcementContent : {type: String}
}, { collection: 'Announcements' });

const model = mongoose.model("Announcement", announcementSchema);
export default model;