import express from "express";
import {config} from"./utils/config.js"
const app = express();

app.use(express.json(()=>{
    
}));





app.listen(config.port,()=>{

    console.log("listening in port");

},)