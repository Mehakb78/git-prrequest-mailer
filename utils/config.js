import { config as dotEnvConfig } from "dotenv"
dotEnvConfig();
export const config = {
    PORT : process.env.PORT,
    GIT_WEBHOOK_SECRET : process.env.GIT_WEBHOOK_SECRET,
    EMAIL : process.env.EMAIL,
    PASSWORD : process.env.PASSWORD,
    REVIEWER_EMAIL: process.env.REVIEWER_EMAIL
}

