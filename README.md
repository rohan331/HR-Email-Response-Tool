# HR Email Response Tool

## Description
A simple tool to help HR send email responses (selected/rejected) to candidates using predefined templates.

## Setup Instructions

1. Clone the repo
2. Install dependencies:
   -> npm install (add all the dependencies including node_module reqired for this application)
3. Update `server.js` with your email and app password.
4. Start the server:
  -> node server.js (this will run the server and you can see the changes in the browser)
  
note:- if we make any changes in the code then we have to restart the server again, for this 
      ->Press Ctrl + C in your terminal to stop the server
      -> Then restart it by running:- node server.js(and see the changes)

Recommended(optional) :- use "nodemon" for Auto-Restart the server on Saveing the chages    
  -> npm install nodemon -g
  -> nodemon server.js
Now the server automatically restarts every time you save the code.

5. Open `http://localhost:3000` in your browser.

## Email configuration Setup
- Use Gmail or any SMTP service.
- If using Gmail with 2FA(make sure 2FA must be enable before genetating a password), create an App Password(you will get the 16-character app password):
- Go to Google Account > Security > App Passwords(or if it still not showing this option try :- https://myaccount.google.com/apppasswords).
- Use the generated password in `server.js`.

## Features I used
- Candidate name, email, position input
- Status (Selected/Rejected)
- Email preview before sending
- Mobile-friendly UI

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, Nodemailer

