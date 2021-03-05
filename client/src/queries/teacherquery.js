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