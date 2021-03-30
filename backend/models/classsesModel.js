const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    className: String,
    sections: [String],
});

const classmodel = mongoose.model("classes",ClassSchema);

module.exports = classmodel;