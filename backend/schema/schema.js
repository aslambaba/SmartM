const { gql } = require('apollo-server');

const typeDefs = gql`

    type Student {
        firstName: String
        lastName: String
        gender: String
        guardianName: String
        CNIC: Int
        DOB: Int
        rollNumber: Int
        admissonNumber: Int
        religion: String
        fatherName: String
        motherName: String
        fatherOccupation: String
        motherOccupation: String
        fatherCNIC: Int
        MotherCNIC: Int
        phoneNumber: Int
        nationality: String
        presentAddress: String
        parmanentAddress: String
    }
  
    input StudentInput{
        firstName: String
        lastName: String
        gender: String
        guardianName: String
        CNIC: Int
        DOB: Int
        rollNumber: Int
        admissonNumber: Int
        religion: String
        fatherName: String
        motherName: String
        fatherOccupation: String
        motherOccupation: String
        fatherCNIC: Int
        motherCNIC: Int
        phoneNumber: Int
        nationality: String
        presentAddress: String
        parmanentAddress: String
    }

    type Query {
        student: String
        students: [Student]
    }

    type Mutation{
        AddStudent(stu: StudentInput): Student
    }

`;

module.exports = typeDefs;