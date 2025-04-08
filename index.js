import express from "express"
import router from "./routes/routes.js";
const app = express();

app.use("/api/image",router);
const PORT = 8000;


app.listen(PORT , (err) =>{
    if(err){
        console.log("Error while listening to the server:-" , err);
        
    }else{
        console.log("Started listening to the server! :" + PORT);
    }
})