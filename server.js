const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const items = require('./routes/api/items');

// BodyParser middleware
app.use(bodyParser.json());

// Connect to mongo
mongoose.connect("mongodb://localhost:27017/shoplistDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/items', items);

app.listen(5000, () => console.log("Server started on port 5000"));