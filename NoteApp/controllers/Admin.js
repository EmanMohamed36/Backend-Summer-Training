



const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Varaibles
const key = "bPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgVkXp2s5v8y/B?E(H+MbQeThWmZq3t6w9z$C&F)J@NcRfUjXn2r5u7x!A%D*G-KaPdSgVkYp3s6v9y/B?E(H+MbQeThWmZq4t7w!z%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5u8x/A?D(G+KbPeShVkYp3s6v9y$B&E)H@McQfTjWnZq4t7w!z%C*F-JaNdRgUkXp2s5u8x/A?D(G+KbPeShVmYq3t6w9y$B&E)H@McQfTjWnZr4u7x!A%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@NcRfUjXn2r4u7x!A%D*G-KaPdSgVkYp3s6v8y/B?E(H+"

// Models
const Admin = require('../models/Admin');

//  Utils
const sendResponse = require('../utils/sendResponse');





// Methods

const Signup = async (fullname , email , password , confirmPassword , req,res) => {
    try {


        if (fullname.length < 6)
            return sendResponse(res, 400, "Fullname must be more than 6 chars");

        if (!email.match(/^\w+([-+.]\w+)*@((yahoo|gmail)\.com)$/))
            return sendResponse(res, 400, "Email must be gmail or yahoo");

        if (password.length < 6)
            return sendResponse(res, 400, "Password must be more than 6 chars");

        if (password !== confirmPassword) {
            return sendResponse(res, 400, "The two passwords are not matched");
        }

        // The admin is found in the user Collection
        let founded = await Admin.findOne({ email: email });
        if (founded) {
            return sendResponse(res, 409, "Email is already found");
        }

        // The Admin is not found in the Admin Collection
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const person = await new Admin(req.body).save();
        const token = jwt.sign({ _id: person._id }, key);
        const result = { token: token, person: person }
        return sendResponse(res, 201, "Account has been created Successfully", result);

    } catch (err) {
        console.log(err.message)
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }

}

const Login = async (email , password,req, res) => {
    try {
    
        if (!email || !password) {
            return sendResponse(res, 400, 'All the fields are mandatory');
        }
        var admin = await Admin.findOne({ email: email })
        if (!admin) {
            return sendResponse(res, 401, 'The Email is not exist');
        }
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return sendResponse(res, 401, 'Password is wrong');
        }
        const token = jwt.sign({ _id: admin._id }, key);
        const result = { token: token, admin: admin };
        return sendResponse(res, 200, 'Login is success', result);
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}

const Delete = async (id, res) => {
    try {
        await Admin.findByIdAndDelete({ _id: id });
        return sendResponse(res, 200, 'The User is deleted successfully');
    } catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}



module.exports = {Signup , Login , Delete};