


const sendResponse = require("../utils/sendResponse");

const user_controll = require("./User");

const admin_controll = require("./Admin");

// methods

const Signup = (req, res) => {
    try {

        var {fullname, email, password, confirmPassword , role} = req.body;
        //console.log(fullname);

        if(role == "user")
        {
            user_controll.Signup(fullname , email,password,confirmPassword,req,res);
        }
        else if(role == "admin")
        {
            admin_controll.Signup(fullname, email , password , confirmPassword,req,res);
        }
        else 
        {
            return sendResponse(res, 400, "The role should be either user or admin");

        }
        
    } catch (err) {
        console.log(err.message)
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }

}

const Login = (req, res)=>{
    try{
        var {email , password , role} = req.body;

        if(role == "user")
        {
            user_controll.Login(email , password,req,res);
        }
        else if(role == "admin")
        {
            admin_controll.Login(email , password,req,res);
        }
        else 
        {
            return sendResponse(res, 400, "The role should be either user or admin");

        }

    }catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }
}
const Delete = async(req,res)=>{
    try{

        var {id , role} = req.body;
        if(role == "user")
        {
            return sendResponse(res, 400, "You can't delete any one This is outside your powers");
            
        }
        else if(role == "admin")
        {
            admin_controll.Delete(id ,res);
        }
        else 
        {
            return sendResponse(res, 400, "The role should be either user or admin");

        }
        
    }catch (err) {
        return sendResponse(res, 500, err.message, 'Something went wrong');
    }

}

module.exports  = {Signup , Login , Delete}






