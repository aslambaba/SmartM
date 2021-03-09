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
    }

    type Query {
        students: [Student]
        getStudents(stuid: String): Student

        teachers: [Teacher]
        getTeacher(tchid: String): Teacher
    }

    type Mutation{
        AddStudent(stu: StudentInput): Student
        DeleteStudent(StudentID: String): String

        AddTeacher(tch: TeacherInput): Teacher
        deleteTeacher(tchid: String): String
    }

`;

module.exports = typeDefs;