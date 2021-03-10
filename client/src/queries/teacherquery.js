import { gql } from '@apollo/client';

export const GetTeachers = gql`
query{
    teachers{
        _id
        teacherID
        firstName
        lastName
        gender
        email
    }
}
`;

export const getTeacher = gql`
query getsingleTeacher($teacherId: String!){
    getTeacher(tchid: $teacherId){
        firstName,
        lastName,
        gender,
        fatherName,
        CNIC,
        DOB,
        teacherID,
        religion,
        email,
        phoneNumber,
        address,
        qualifications{
            degreeName
            instituteName
            completedYear
        }
        workExperince{
            workExperince
        }
    }
}
`;