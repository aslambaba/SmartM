import { gql } from '@apollo/client';

// Query To Get Some Data of Student for StudentRow Component
export const GetStudents = gql`
query{
    students{
        rollNumber
        firstName
        lastName
        gender
        guardianName
    }
}
`;