const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userlogin")

router.get("/",(req,res)=>{
    res.render("login-page")
});
router.get("/login",(req,res)=>{
    res.render("login-page")
});
router.get("/register", (req,res)=>{
    res.render("regist");
})
router.post("/register", registerUser);
module.exports = router;