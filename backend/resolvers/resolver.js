const StudentModel = require('../models/studentModel');
const resolvers = {
    Query: {
        student:() => {
            return "Aslam Sarfraz"
        },
        students: () => {
            const data = StudentModel.find();
            return data
        },
        getStudents: (_,{stuid})=>{
            const getstudentdata = StudentModel.findById(stuid);
            console.log(getstudentdata)
            return getstudentdata;
        }
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
                admissonDate: stu.admissonDate,
                religion: stu.religion,
                cast: stu.cast,
                class: stu.class,
                section: stu.section,
                classShift: stu.classShift,
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
            student.save().then((e,r)=>{
                if(e){console.log(e)}
                else{console.log(r)}
            });
            return student
        },
        DeleteStudent: (_,{StudentID})=>{
            console.log(StudentID)
            StudentModel.findOneAndDelete({_id: StudentID},(e,r)=>{
                if(e){return 'Record Deletion Failed !'}
                else{return 'Record Deleted !'}
            })
        }

    }
};

module.exports = resolvers;