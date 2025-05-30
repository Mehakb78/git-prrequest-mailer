# GitHook

A Node.js application that listens for GitHub webhook events (specifically pull request events) and sends email notifications to reviewers when a new pull request is opened.

## Features

- Receives GitHub webhook events via an Express server.
- Verifies webhook signatures for security.
- Sends email notifications using Gmail and Nodemailer.
- Easily configurable via environment variables.

## Project Structure
├── .env 
├── .gitignore 
├── package.json
├── readme 
├── server.js
├── services/ 
│ └── emailService.js
└── utils/
 ├── config.js 
 └── verifier.js


## Setup

1. **Clone the repository** and install dependencies:
    ```sh
    npm install
    ```

2. **Configure environment variables** in a `.env` file:
    ```
    PORT=4000
    GIT_WEBHOOK_SECRET=your_github_webhook_secret
    EMAIL=your_email@gmail.com
    PASSWARD=your_email_password
    REVIEWER_EMAIL=reviewer@example.com
    ```

3. **Start the server**:
    ```sh
    npm run dev
    ```

## Usage

- Configure your GitHub repository webhook to point to `http://your-server/github-webhook` and use the same secret as `GIT_WEBHOOK_SECRET`.
- When a pull request is opened, a mail will be send to reviewer mail
## Notes

- Make sure to allow less secure apps or use an app password for Gmail if 2FA is enabled.
- The project uses Express 5.x and Nodemailer 7.x.
