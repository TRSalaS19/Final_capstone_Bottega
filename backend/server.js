const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

require('dotenv').config();


const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB databse connection established successfully");
})

const userRouter = require('./routes/user.route');
const servicesRouter = require('./routes/services.route');

app.use('/users', userRouter );
app.use('/services', servicesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
