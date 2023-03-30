const app=require("./app");
const dotenv=require("dotenv");
const connectionDatabase=require("./config/Database.js");


process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`not working due to this handling`)
})
//config
if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })}

    // create server
const server=app.listen(process.env.PORT,()=>{
    console.log(`success ${process.env.PORT}`)
})

process.on("unhandledRejection",(err)=>{
    console.log(`Server crashed due to this :- ${err.message}`);
    console.log(`Server crashed`)

    server.close(()=>{
        process.exit(1)
    })
})