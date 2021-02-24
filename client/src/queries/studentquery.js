import { gql } from '@apollo/client';

// Query To Get Some Data of Student for StudentRow Component
export const GetStudents = gql`
query{
    students{
        _id
        rollNumber
        firstName
        lastName
        gender
        guardianName
        class
        section
        admissonNumber
    }
}
`;

export const getsingleStudent = gql`

    query getSingleStudent($id: String!){
    getStudents(stuid: $id){
        _id
        firstName
        lastName
        gender
        guardianName
        CNIC
        DOB
        rollNumber
        admissonNumber
        admissonDate
        religion
        cast
        class
        section
        classShift
        fatherName
        motherName
        fatherOccupation
        motherOccupation
        fatherCNIC
        motherCNIC
        phoneNumber
        nationality
        presentAddress
        parmanentAddress
    }
  }

`;