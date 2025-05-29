import express from "express";
import {config} from"./utils/config.js"
import { verifySignature } from "./utils/verifier.js";
import { sendPRrequestMail } from "./services/emailService.js";
const app = express();

const port  = process.env.PORT || 4000

app.use(express.json({
    verify :(req, _, buf)=>{
        req.rawBody = buf;
    }
}));

app.post("/github-hooks", (req, res)=>{
     if(!verifySignature(req)){
         res.status(403).send("Not Authorized");
     }
     const event = req.headers['x-github-event'];
     console.log("inside here req.body", req.body);
     if(event === "pull_request" && req.body.action ==="open"){
        const pullRequest = req.body.pull_request;
        const repo = req.body.repository.full_name;
        const subject = `New Pull request for ${repo}`
        const desc = `A pull request has  been submitted by ${pullRequest.user.name}`
        sendPRrequestMail([config.REVIEWER_EMAIL], subject, desc ).then(()=>{
            res.status(200).send("PR mail send successfully");

        }).catch((error)=>{
            res.status(500).send("Something went wrong");

        })
     }
})


app.listen(config.PORT,()=>{
    console.log("listening in port", port);

},)