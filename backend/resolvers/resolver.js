const StudentModel = require('../models/studentModel');
const TeacherModel = require('../models/teacherModel');
const ClassModel = require('../models/classsesModel');

const resolvers = {
    Query: {
        students: () => {
            const data = StudentModel.find();
            return data
        },
        getStudents: (_, { stuid }) => {
            const getstudentdata = StudentModel.findById(stuid);
            return getstudentdata;
        },

        teachers: () => {
            const teachers = TeacherModel.find();
            return teachers
        },

        getTeacher: (_, { tchid }) => {
            const teacher = TeacherModel.findById(tchid);
            return teacher
        },

        getClasses: () => {
            const classes = ClassModel.find();
            return classes
        },

        getSection: async (_, { classN }) => {
            const result = await ClassModel.find({ className: classN }).exec();
            const section = await result[0].sections;
            return section;
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
                motherCNIC: stu.motherCNIC,
                phoneNumber: stu.phoneNumber,
                nationality: stu.nationality,
                presentAddress: stu.presentAddress,
                parmanentAddress: stu.parmanentAddress,
                previousInstitute: stu.previousInstitute
            });
            student.save().then((e, r) => {
                if (e) { console.log(e) }
                else { console.log(r) }
            });
            return student
        },
        DeleteStudent: (_, { StudentID }) => {
            console.log(StudentID)
            StudentModel.findOneAndDelete({ _id: StudentID }, (e, r) => {
                if (e) { return 'Record Deletion Failed !' }
                else { return 'Record Deleted !' }
            })
        },

        AddTeacher: (_, { tch }) => {
            const teacherRecord = new TeacherModel({
                firstName: tch.firstName,
                lastName: tch.lastName,
                gender: tch.gender,
                fatherName: tch.fatherName,
                CNIC: tch.CNIC,
                DOB: tch.DOB,
                teacherID: tch.teacherID,
                religion: tch.religion,
                email: tch.email,
                phoneNumber: tch.phoneNumber,
                address: tch.address,
                qualifications: tch.qualifications,
                workExperince: tch.workExperince
            });
            teacherRecord.save().then((e, r) => {
                if (e) { console.log(e) }
                else { console.log(r) }
            });
            return teacherRecord
        },
        deleteTeacher: (_, { tchid }) => {
            TeacherModel.findByIdAndDelete(tchid, (e, r) => {
                if (e) { return 'Record Deletion Failed !' }
                else { return 'Record Deleted !' }
            })
        },

        AddClass: (_, { cla }) => {
            const newClass = new ClassModel({
                className: cla.className,
            });
            newClass.save();
            return 'Class Added Succesfully'
        },
        AddSection: (_, { sec }) => {
            ClassModel.findOneAndUpdate(
                { className: sec.className },
                { $push: { "sections": sec.sections } },
            ).exec();
            return "Update Successfully"
        }
    }
};

module.exports = resolvers;