import {gql} from '@apollo/client';

export const GetClasses = gql`
    query{
        getClasses{
            _id
            className
        }
    }
`;

export const GetSections = gql`
    query getSingleClassSection($classNo: String!){
        getSection(classN: $classNo)
    }
`;