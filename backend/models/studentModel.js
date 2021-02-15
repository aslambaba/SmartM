const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    guardianName: String,
    CNIC: Number,
    DOB: Number,
    rollNumber: Number,
    admissonNumber: Number,
    religion: String,
    fatherName: String,
    motherName: String,
    fatherOccupation: String,
    motherOccupation: String,
    fatherCNIC: Number,
    MotherCNIC: Number,
    phoneNumber: Number,
    nationality: String,
    presentAddress: String,
    parmanentAddress: String,
});

const studentmodel = mongoose.model("studentsrecord",StudentSchema);

module.exports = studentmodel;