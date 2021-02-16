const StudentModel = require('../models/studentModel');
const resolvers = {
    Query: {
        student: () => {
            return "Aslam Sarfraz"
        },
        students: () => {
            const data = StudentModel.find();
            return data
        },
    },
    Mutation: {
        AddStudent: (_, { stu }) => {
            const student = new StudentModel({
                firstName: stu.firstName,
                lastName: stu.lastName,
                gender: stu.gender,
                guardianName: stu.guardianName,
                CNIC: stu.CNIC,
                DOB: stu.DOB,
                rollNumber: stu.rollNumber,
                admissonNumber: stu.admissonNumber,
                religion: stu.religion,
                fatherName: stu.fatherName,
                motherName: stu.motherName,
                fatherOccupation: stu.fatherOccupation,
                motherOccupation: stu.motherOccupation,
                fatherCNIC: stu.fatherCNIC,
                motherCNIC: stu.MotherCNIC,
                phoneNumber: stu.phoneNumber,
                nationality: stu.nationality,
                presentAddress: stu.presentAddress,
                parmanentAddress: stu.parmanentAddress,
            });
            student.save();
            return student
        }
    }
};

module.exports = resolvers;