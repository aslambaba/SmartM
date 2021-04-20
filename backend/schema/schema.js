const { gql } = require('apollo-server');

const typeDefs = gql`

    type PV{
        previousInstitute: String
    }
    input PVInput{
        previousInstitute: String
    }

    type Student {
        _id: String
        firstName: String
        lastName: String
        gender: String
        guardianName: String
        CNIC: String
        DOB: Int
        rollNumber: Int
        admissonNumber: Int
        admissonDate: Int
        religion: String
        cast: String
        class: String
        section: String
        classShift: String
        fatherName: String
        motherName: String
        fatherOccupation: String
        motherOccupation: String
        fatherCNIC: String
        motherCNIC: String
        phoneNumber: String
        nationality: String
        presentAddress: String
        parmanentAddress: String
        previousInstitute: [PV]
    }
  
    input StudentInput{
        firstName: String
        lastName: String
        gender: String
        guardianName: String
        CNIC: String
        DOB: Int
        rollNumber: Int
        admissonNumber: Int
        admissonDate: Int
        religion: String
        cast: String
        class: String
        section: String
        classShift: String
        fatherName: String
        motherName: String
        fatherOccupation: String
        motherOccupation: String
        fatherCNIC: String
        motherCNIC: String
        phoneNumber: String
        nationality: String
        presentAddress: String
        parmanentAddress: String
        previousInstitute: [PVInput]
    }
    input StudentUpdateInput{
        StuID: String
        firstName: String
        lastName: String
        gender: String
        guardianName: String
        CNIC: String
        DOB: Int
        rollNumber: Int
        admissonNumber: Int
        admissonDate: Int
        religion: String
        cast: String
        class: String
        section: String
        classShift: String
        fatherName: String
        motherName: String
        fatherOccupation: String
        motherOccupation: String
        fatherCNIC: String
        motherCNIC: String
        phoneNumber: String
        nationality: String
        presentAddress: String
        parmanentAddress: String
    }

    type Qualification{
        degreeName: String
        instituteName: String
        completedYear: String
    }
    input QualificationInput{
        degreeName: String
        instituteName: String
        completedYear: String
    }

    type WorkEx{
        workExperince: String
    }

    input WorkExInput{
        workExperince: String
    }

    type Teacher {
        _id: String
        firstName: String
        lastName: String
        gender: String
        fatherName: String
        CNIC: String
        DOB: Int
        teacherID: Int
        religion: String
        email: String
        phoneNumber: String
        address: String
        qualifications: [Qualification]
        workExperince: [WorkEx]
    }

    input TeacherInput {
        firstName: String
        lastName: String
        gender: String
        fatherName: String
        CNIC: String
        DOB: Int
        teacherID: Int
        religion: String
        email: String
        phoneNumber: String
        address: String
        qualifications: [QualificationInput]
        workExperince: [WorkExInput]
    }

    type Class {
        _id: String
        className: String
        sections: [String]
    }
    input ClassInput {
        className: String
        sections: String
    }

    type Query {
        students: [Student]
        getStudents(stuid: String): Student

        teachers: [Teacher]
        getTeacher(tchid: String): Teacher

        getClasses: [Class]
        getSection(classN: String): [String]
    }

    type Mutation{
        AddStudent(stu: StudentInput): Student
        UpdateStudent(stu: StudentUpdateInput): String
        DeleteStudent(StudentID: String): String

        AddTeacher(tch: TeacherInput): Teacher
        deleteTeacher(tchid: String): String
    
        AddClass(cla: ClassInput): String
        AddSection(sec: ClassInput): String
    }

`;

module.exports = typeDefs;