const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String
    }

});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;