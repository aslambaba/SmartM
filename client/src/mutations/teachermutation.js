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
        $qualificationsInput: [QualificationInput],
        $WorkExperinceInput: [WorkExInput]
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
        qualifications: $qualificationsInput,
        workExperince: $WorkExperinceInput
        }){
            firstName
        }
    }

`;

export const UpdateTeacherRecord = gql`
    mutation(
        $tchID: String!,
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
        UpdateTeacher(tch: {
            tchID: $tchID
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
        })
    }
`;
export const DeleteTeacherRecord = gql`
    mutation($teacherid: String){
        deleteTeacher(tchid: $teacherid)
    }
`;