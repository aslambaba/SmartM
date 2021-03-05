const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TeacherSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    fatherName: String,
    CNIC: String,
    DOB: Number,
    teacherID: Number,
    religion: String,
    email: String,
    phoneNumber: String,
    address: String,
});

const teachermodel = mongoose.model("teacherrecord", TeacherSchema);

module.exports = teachermodel;