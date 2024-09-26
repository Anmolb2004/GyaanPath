const mongoose=require('mongoose');
require("dotenv").config();

exports.connect=() =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Db conntected successfully")})
    .catch((err)=>{
        console.log("Db ka Connection fail");
        console.error(error.message);
        process.exit(1);
    })
}