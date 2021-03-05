import { gql } from '@apollo/client';


export const AddNewTeacher = gql`

    mutation AddTeacher(
        $firstName: String!,
        $lastName: String!,
        $gender: String!,
        $fatherName: String!,
        $CNIC: String!,
        $DOB: Int!,
        $teacherID: Int!,
        $religion: String!,
        $email: String!,
        $phoneNumber: String!,
        $address: String!,
    ){
        AddTeacher(tch: {
        firstName: $firstName,
        lastName: $lastName,
        gender: $gender,
        fatherName: $fatherName,
        CNIC: $CNIC,
        DOB: $DOB,
        teacherID: $teacherID,
        religion: $religion,
        email: $email,
        phoneNumber: $phoneNumber,
        address: $address,
        }){
            firstName
        }
    }

`;