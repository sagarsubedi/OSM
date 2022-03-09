import dbConnect from 'util/connection.js';
import {createAnnouncement} from '../../../../server/controllers/create.js';

export default async function handler(req, res) {
    const {method} = req;
    
    
    // connect to db
    await dbConnect();
    
    if(method === 'GET'){
        return getAnnouncements(req, res);
    }

    if(method === 'POST'){
        try {
            console.log(req.body);
            return await createAnnouncement(req, res);
            // return createAnnouncement(req, res);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error.message
            });
        }
    }
}
