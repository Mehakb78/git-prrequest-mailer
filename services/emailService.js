import nodemailer from "nodemailer";
import { config } from "../utils/config.js";

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        email: config.EMAIL,
        password: config.PASSWARD
    }
})

export  const sendPRrequestMail = (recipents, subject, text)=>{
    const mailOption = {
         from :config.EMAIL,
         to: recipents,
         subject: subject,
         text: text
    }
    return new Promise((resolve, reject)=>{
        transporter.sendMail(mailOption, (error, result)=>{
             if(error){
                 reject(error);
             }else{
                resolve(result);
             }
        })
    })

}