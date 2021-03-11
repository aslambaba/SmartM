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