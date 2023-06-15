const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Store the message in a file
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
  fs.appendFile(path.join(__dirname, 'messages.txt'), data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
