const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    guardianName: String,
    CNIC: String,
    DOB: Number,
    rollNumber: Number,
    admissonNumber: Number,
    admissonDate: Number,
    religion: String,
    cast: String,
    class: String,
    section: String,
    classShift: String,
    fatherName: String,
    motherName: String,
    fatherOccupation: String,
    motherOccupation: String,
    fatherCNIC: String,
    motherCNIC: String,
    phoneNumber: String,
    nationality: String,
    presentAddress: String,
    parmanentAddress: String,
});

const studentmodel = mongoose.model("studentsrecord",StudentSchema);

module.exports = studentmodel;