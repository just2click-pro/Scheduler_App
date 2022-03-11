import React, {useState ,useEffect, Fragment} from 'react'
import RegistrationForm from './RegistrationForm'
//import StudentsData from '../../data/students.json'
import ReadOnlyRow from './ReadOnlyRow';
import axios from 'axios';

import './Table.css';




const Table = (props) => {
  //need to be in scheduler useState([{}])
  const [studentData , setStudentData] = useState([
      {
       
      }])

     /* firstName: '',
      lastName: '',
      days: [],
      swimmingStyle: '',
      lessonType: '',*/

  //fetch
  useEffect(() => {
    fetch("http://localhost:3001/")
    .then((data) => 
        data.json()
        //console.log("success!",data)
    ).then((jsonRes) => setStudentData(jsonRes))
   // .catch((error) =>
    //  console.log("error!!!",error)
   // )}
   // .then((jsonRes) => setStudentData(jsonRes));
  });

  //student data is the file

 
 
  const addRows = (data) => { 
    const totalStudents = studentData.length; 
    data.id = totalStudents + 1; 
    const updatedStudentData = [...studentData]; 
    updatedStudentData.push(data); 
    setStudentData(updatedStudentData); 
  };

  
  function deleteItem(studentId) {
    axios.delete("/delete/" + studentId);
    alert("item deleted");
    console.log(`Deleted item with id ${studentId}`);
  }

  const handleSubmit = () =>{
    console.log("studentData ")
    console.log(studentData)
    props.getData(studentData)
  }
 
  
  const handleDeleteClick = (studentId) =>{
    const newStudents = [...studentData];
    console.log(`studentid ${studentId}`)
    const index = studentData.findIndex((student) => student._id === studentId);
    newStudents.splice(index,1);
    setStudentData(newStudents);
    deleteItem(studentId);
  }

  return (
    <div> 
      <form>
      <table className="table table-stripped"> 
        <thead> 
          <tr> 
            <th>First Name</th> 
            <th>Last Name</th> 
            <th>Days</th> 
            <th>Swimming Style</th> 
            <th>Lesson Type</th> 
            <th>Actions</th>
          </tr> 
        </thead> 
        <tbody>
          {studentData.map((student) => (
          <ReadOnlyRow  student={student} handleDeleteClick={handleDeleteClick}/>
          ))}
        </tbody> 
      </table> 
      </form>
      <RegistrationForm func={addRows} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Table


/*<tbody>{tableRows}</tbody>
 <ReadOnlyRow student={student} /> */

/*"id":"1",
        "firstName": "beni", 
        "lastName": "lolo",
        "days": ["sunday","monday"],
        "swimmingStyle": "swimmingState",
        "lessonType": "lessonState"*/

         /*useEffect(() => {
    console.log(studentData)
  },[studentData]);
 */ 

 /*const tableRows = studentData.map((student) => { 
    return ( 
      <tr> 
        <td>{student.firstName}</td> 
        <td>{student.lastName}</td> 
        <td>{student.days}</td> 
        <td>{student.swimmingStyle}</td> 
        <td>{student.lessonType}</td>
      </tr> 
    ); 

  }); */