import mongoose from "mongoose";

const announcementSchema = mongoose.Schema({
    announcementTitle : {type : String},
    announcementContent : {type: String}
}, { collection: 'Announcements' });

const model = mongoose.model("Announcement", announcementSchema);
export default model;