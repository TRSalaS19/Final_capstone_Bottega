const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

const usersRouter = require('./routes/user.route');
const servicesRouter = require('./routes/services.route');

app.use('/users', usersRouter );
app.use('/services', servicesRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
