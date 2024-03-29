import {gql} from '@apollo/client';

export const AddClass = gql`
    mutation AddClass(
        $classNameInput: String!
    ){
        AddClass(cla: {
            className: $classNameInput
        })    
    }
`;

export const AddSec = gql`
    mutation AddSection(
        $classNameInput: String!
        $sectionNameInput: String!
    ){
        AddSection(sec: {
            className: $classNameInput
            sections: $sectionNameInput
        })
    }
`;