const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const section = [String];

const ClassSchema = new Schema({
    className: String,
    sections: [section],
});

const classmodel = mongoose.model("classes",ClassSchema);

module.exports = classmodel;