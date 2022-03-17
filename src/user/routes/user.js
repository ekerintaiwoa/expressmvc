

const express= require("express") ;

const router = express.Router() ;

const controller = require("../controller/userController")


// configure routess

router.get("/register",controller.getRegisterView ) ;
router.post("/register",controller.register )



module.exports = router 