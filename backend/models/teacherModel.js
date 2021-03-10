const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Qualifications = {
    degreeName: String,
    instituteName: String,
    completedYear: String,
}
const WorkEx = {
    workExperince: String,
}
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
    qualifications: [Qualifications],
    workExperince: [WorkEx],
});

const teachermodel = mongoose.model("teacherrecord", TeacherSchema);

module.exports = teachermodel;