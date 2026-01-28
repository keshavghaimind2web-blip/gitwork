const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/db");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productRouter = require("./routes/productRouter");
const indexRouter = require("./routes/indexRouter");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");

app.use("/user",userRouter);
app.use("/",indexRouter);
app.use("/admin",adminRouter)
app.use("/product",productRouter)
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

app.listen(3000, ()=>{
    console.log("your server is running on 3000 ");
});