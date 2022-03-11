import React from 'react'



function ReadOnlyRow({ student , handleDeleteClick }) {

  return (
    <tr> 
    <td>{student.firstName}</td> 
    <td>{student.lastName}</td> 
    <td>{student.days}</td>
    <td>{student.swimmingStyle}</td> 
    <td>{student.lessonType}</td>
    <button type='button' onClick={() => handleDeleteClick(student._id)}>Delete</button>
  </tr> 
  )
}

export default ReadOnlyRow


/*<td>
        <button type='button' onClick={() => handleDeletClick(student.id)}>Delete</button>
        <button onClick={()=> deleteRows(student.id)}>Delete</button>
    </td>
    <td>
      {student.days.map((day)=> (
        <td>{day}</td>
      ))}
    </td>
    */