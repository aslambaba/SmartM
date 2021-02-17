import { gql } from '@apollo/client';

// Mutation to Add new Student Record in Database
export const AddNewStudent = gql`
  mutation AddStudent(
    $firstName: String!,
    $lastName: String!,
    $gender: String!,
    $guardianName: String!,
    $cnic: Int!,
    $dob: Int!,
    $rollNumber: Int!,
    $admissonNumber: Int!,
    $admissonDate: Int!,
    $religion: String!,
    $cast: String!,
    $class: String!,
    $section: String!,
    $classShift: String!,
    $fatherName: String!,
    $motherName: String!,
    $fatherOccupation: String!,
    $motherOccupation: String!,
    $fatherCNIC: Int!,
    $MotherCNIC: Int!,
    $phoneNumber: Int!,
    $nationality: String!,
    $presentAddress: String!,
    $parmanentAddress: String!,
    ){
        AddStudent(stu: {
        firstName: $firstName,
        lastName: $lastName,
        gender: $gender,
        guardianName: $guardianName,
        CNIC: $cnic,
        DOB: $dob,
        rollNumber: $rollNumber,
        admissonNumber: $admissonNumber,
        admissonDate: $admissonDate,
        religion: $religion,
        cast: $cast,
        class: $class,
        section: $section,
        classShift: $classShift,
        fatherName: $fatherName,
        motherName: $motherName,
        fatherOccupation: $fatherOccupation,
        motherOccupation: $motherOccupation,
        fatherCNIC: $fatherCNIC,
        motherCNIC: $MotherCNIC,
        phoneNumber: $phoneNumber,
        nationality: $nationality,
        presentAddress: $presentAddress,
        parmanentAddress: $parmanentAddress,
        }) 
        {
      firstName
    }
  }
`;