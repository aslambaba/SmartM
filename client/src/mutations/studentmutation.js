import { gql } from '@apollo/client';

// Mutation to Add new Student Record in Database

const Pv = {
  previousInstitute: String,
}
export const AddNewStudent = gql`

  mutation AddStudent(
    $firstName: String!,
    $lastName: String!,
    $gender: String!,
    $guardianName: String!,
    $cnic: String!,
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
    $fatherCNIC: String!,
    $motherCNIC: String!,
    $phoneNumber: String!,
    $nationality: String!,
    $presentAddress: String!,
    $parmanentAddress: String!,
    $previousInstitute: [PVInput],
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
        motherCNIC: $motherCNIC,
        phoneNumber: $phoneNumber,
        nationality: $nationality,
        presentAddress: $presentAddress,
        parmanentAddress: $parmanentAddress,
        previousInstitute: $previousInstitute
        }) 
        {
      firstName
    }
  }
`;

export const UpdateStudentRecord = gql`
  mutation UpdateStudentRecord(
    $StuID: String!,
    $firstName: String!,
    $lastName: String!,
    $gender: String!,
    $guardianName: String!,
    $cnic: String!,
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
    $fatherCNIC: String!,
    $motherCNIC: String!,
    $phoneNumber: String!,
    $nationality: String!,
    $presentAddress: String!,
    $parmanentAddress: String!,
  ){
    UpdateStudent(stu: {
      StuID: $StuID,
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
      motherCNIC: $motherCNIC,
      phoneNumber: $phoneNumber,
      nationality: $nationality,
      presentAddress: $presentAddress,
      parmanentAddress: $parmanentAddress,
      })   
  }
`;

export const DeleteStudentRecord = gql`
  mutation DeleteStudent($stuID: String!){
    DeleteStudent(StudentID: $stuID)
  }
`;