const User = require("../models/userModel");
const bcrypt = require("bcrypt");

registerUser = async(req,res)=>{
    try{
        const {name,email,password,confirm_password} =req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.render('regist', { error: 'Already registered' });
    }
    if (password !== confirm_password) {
        return res.render('regist', { error: 'Passwords do not match' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,email,password:hashedPassword
    });
    console.log(user);
    res.render("regist", {
    success: "Registration successful! Please login."
});

}catch(err){
    console.error(err);
        res.render("regist", {
            error: "Something went wrong. Please try again."
        });
    }
}
module.exports = registerUser;