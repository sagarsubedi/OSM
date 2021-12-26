// handlers for all POST requests
// logic for all posts requests
import Announcement from "../models/announcement.js";
import Resource from "../models/resource.js";

export const createAnnouncement = (req,res) => {
    
    // create the announcement object
    let announcement = new Announcement(req.body);
    announcement.save((err) => {
        if(err) {
            console.log(err);
            res.send("Error creating announcement");
        } else {
            res.send(announcement);
        }
    });
};

export const createResource = (req,res) => {
        
        // create the resource object
        let resource = new Resource(req.body);
        resource.save((err) => {
            if(err) {
                console.log(err);
                res.send("Error creating resource");
            } else {
                res.send(resource);
            }
        });
};


