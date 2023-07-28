const sendResponse = require('../utils/sendResponse');
const Admin = require("../models/Admin")
module.exports = async (req, res, next) => {
    try {
        const admin = await Admin.findById({ _id: req.admin._id });
        if(!admin) {
            return sendResponse(res, 404, "The user is not found");
        }
        next();
    } catch(err) {
        return sendResponse(res, 500, 'Something went wrong');   
     }
}