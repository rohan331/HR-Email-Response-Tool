const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//make the file inside the public folder accessible and static
app.use(express.static('public'));
// This defines the root route (/) of your server, and tells Express to respond with your frontend page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')));

// Email templates
const templates = {
  selected: (name, position) => `Dear ${name},

We are pleased to inform you that you have been selected for the position of ${position}.

Please reply to this email to confirm your acceptance.

Best regards,
HR Team`,

  rejected: (name, position) => `Dear ${name},

Thank you for applying for the position of ${position}.

We regret to inform you that we have decided to move forward with other candidates.

Best regards,
HR Team`
};

// Email send route
app.post('/send-email', async (req, res) => {
  const { name, email, position, status } = req.body;

  if (!name || !email || !position || !status) {
    return res.status(400).send('All fields are required.');
  }

  const message = templates[status](name, position);

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        //enter the your email details :- the email from which you want to send the email to the candidate
        user: 'enteryour-email@gmail.com',
        pass: 'yourGamil-Apppassword'  // Use App Password if 2FA is on
      }
    });

    await transporter.sendMail({
      from: 'enteryour-email@gmail.com',//exact same email as we mension in auth.user
      to: email,
      subject: `Application ${status === 'selected' ? 'Selection' : 'Update'}`,
      text: message
    });

    res.send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email.');
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
