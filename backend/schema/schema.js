const { gql } = require('apollo-server');

const typeDefs = gql`

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
    }

    type Query {
        student: String
        students: [Student]
        getStudents(stuid: String): Student
    }

    type Mutation{
        AddStudent(stu: StudentInput): Student
        DeleteStudent(StudentID: String): String
    }

`;

module.exports = typeDefs;