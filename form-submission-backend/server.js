const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const FormData = mongoose.model('FormData', formSchema);

// Routes
app.post('/api/form', (req, res) => {
  const newFormData = new FormData(req.body);
  newFormData.save((err, savedData) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(savedData);
  });
});

app.get('/api/form', (req, res) => {
  FormData.find({}, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
