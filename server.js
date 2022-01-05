const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://pallavi123:pallavi123@assignment.qpxo9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, () => console.log('Mongodb connected'));

app.use(express.json({extended: false}));
app.use(cors());

app.get('/', (req, res) => res.send("Api running"));

app.use('/api/register', require('./auth'));
app.use('/api/login', require('./login'));
app.use('/api/user', require('./auth'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));





