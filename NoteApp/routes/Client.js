
const express = require("express")

const router = express.Router();

const Client_controll = require("../controllers/Client");

router.post("/signup" , Client_controll.Signup)

router.post("/login" , Client_controll.Login)
router.delete("/delete" ,Client_controll.Delete)
//router.put("/changepassword" , Cl_controll.changepass)


module.exports = router;










