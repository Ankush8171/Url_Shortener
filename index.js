
const express = require("express");
const {connectToMongoDB} = require("./config/db")
const path = require('path')
const cookieParser = require('cookie-parser');
const {restrictToLoggedinUserOnly,checkAuth} = require('./middleware/auth')


const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");


const app = express();
const port = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url').
then(()=>console.log("mongodb is connected.."));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());





app.use("/url",restrictToLoggedinUserOnly,urlRoute);
app.use("/",checkAuth,staticRoute);
app.use("/user",userRoute);

// app.get("/test", async (req, res) => {
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls,
//     });

// });

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})