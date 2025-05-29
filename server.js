import express from "express";
import {config} from"./utils/config.js"
const app = express();


const port  = process.env.PORT || config.PORT;

app.use(express.json(()=>{

}));





app.listen(config.PORT,()=>{

    console.log("listening in port", port);

},)