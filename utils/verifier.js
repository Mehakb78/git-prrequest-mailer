import crypto from "crypto";
import { config } from "./config.js";

export const verifySignature = (req)=>{
    const signature = req.headers['x-hub-signature-256'];
    if(!signature){
        return false;
    }

    const hmac = crypto.createHmac("sha-256", config.GIT_WEBHOOK_SECRET );
    hmac.update(req.rawBody);
    const expectedSignature = `sha256=${hmac.digest('hex')}`;
    return signature === expectedSignature;

}