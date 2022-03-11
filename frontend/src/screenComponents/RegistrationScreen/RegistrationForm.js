import React , { useState ,useEffect} from 'react';
import axios from 'axios';

import { Form } from 'react-bootstrap';
import "./RegistrationForm.css";

//Data
const days = ['Sunday' , 'Monday' , 'Tuesday', 'Wednesday', 'Thursday'];

let newDays = [];

const swimmingStyle = [
    {value: 'rowing', label: 'Rowing'},
    {value: 'chest', label: 'Chest'},
    {value: 'butterfly', label: 'Butterfly'},
    {value: 'back', label: 'Back'}
];
 
const lessonType = [
    {value: 'private', label: 'Private'},
    {value: 'collective', label: 'Collective'},
    {value: 'both', label: 'Both'}
];


let countStudents = 0;
let isDisabled = false;




const RegistrationForm = (props) => {
  
  
  // Declare a new state variable , which we`ll call "values" 
  //First and last name
  const [values , setValues] = useState({
        // The initial state is an object with three values 
        firstName: '',
        lastName:'',
  });
  
  //Declare a new state variable, checkedstate for days
  const [daysState , setDays] = useState(
    new Array(days.length).fill(false)
  );

  
  //Declare a new state variable, for swimmingstyle
  const [swimmingState, setSwimmingStyle] = useState({ 
        swimmingStyle: ''  
  });

  const [lessonState, setLessonType] = useState({
       lessonType:''
  });
  

    // when we write to the first name input, we are updating this object and then saving it back to 
    //state.
  const handleInputChange = (event) => {
     const {name , value} = event.target;

      setValues(prevValues => {
         return{
           ...prevValues, // copies the old values
           [name]:value // get new value
        }
     });
  }

  const handledaysChange = (position) => {
    const updatedCheckedState = daysState.map((item, index) =>
      index === position ? !item : item
    );

    setDays(updatedCheckedState);

    if(updatedCheckedState[position]){
      addToDays(position);
    }else{
      let index = newDays.indexOf(days[position]);
      removeFromDays(index);
    }
  }

 const addToDays = (position) => {
   newDays.push(days[position]);
   
 }
 const removeFromDays = (index) => {
  newDays.splice(index, 1);
 }

  const handleSwimmingStyleChange = (event) => {
      const selectedStyle = event.target.value;
      console.log(selectedStyle)
       setSwimmingStyle(selectedStyle)

    
  }

  const handleLessonTypeChange = (event) =>{
      const selectedType = event.target.value;
      console.log(selectedType)
      setLessonType(selectedType);
  }

 
   
  const handleAddClick = (event) => {
      event.preventDefault();
      countStudents++
      if(countStudents < 2)//////change to 30
      {
        const formData = {
           firstName: values.firstName, 
           lastName: values.lastName,
           days: newDays,
           swimmingStyle: swimmingState,
           lessonType: lessonState
        }

         props.func(formData);
         axios.post('http://localhost:3001/register' , formData)// where do we want this information will go.
         clearState();
         console.log("newdays:" , newDays)
      }
      else{
        isDisabled = true;
      }
  }

  
  const clearState = () => {
    setValues({
      // The initial state is an object with three values 
      firstName: '',
      lastName:'',
    })
    setDays(new Array(days.length).fill(false));
    newDays = [];
    setSwimmingStyle({swimmingStyle: ''})
    setLessonType({lessonType:''})
  }



  return (
    <div className='container'>
        <h1>Hi, nice to meet you!</h1>
        <h4>Ready for some swimming?</h4>
        <form className='form'>
               <div className='form-group'>
                   <label>
                          <span className="form-field">First name:</span>
                          <input  name='firstName' className="form-control"  value={values.firstName} placeholder="Your first name" required="required"  onChange={handleInputChange} />
                      </label>
                </div>

                <div className='form-group'>
                      <label>
                          <span className="form-field">Last name:</span>
                          <input  name='lastName' className="form-control"  value={values.lastName} placeholder="Your last name" required="required" onChange = {handleInputChange} />
                      </label>
                </div>

                <div className='form-check'>
                      <label>
                          <span className="form-field">Choose days:</span>
                          <div>
                            {days.map((day, index) => {
                            return(
                             <div id="days-section" className="dayssection">
                               <input 
                                 type="checkbox" 
                                 className='form-check-input'
                                 id={`custom-checkbox-${index}`}
                                 name={day}
                                 value={day}
                                 key={days[index]}
                                 checked={daysState[index]}
                                 onChange={() => handledaysChange(index)} />
                               <label className='form-check-label' htmlFor={`checkbox ${index}`}>{day}</label>
                            </div>
                            )
                          })}
                        </div>
                      </label>
                  </div>

                
                <div className='form-group'>
                      <label >
                          <span className="form-field">Swimming style:</span>
                          <select className="form-control" value={swimmingState.swimmingStyle} onChange={handleSwimmingStyleChange}>
                            <option>Choose a Swimming style:</option>
                              {swimmingStyle.map((style) => {
                                  return(
                                    <option value={style.value}>{style.label}</option>
                                  )
                              })}   
                           </select> 
                      </label>
                  </div>

                  <div className='form-group'>
                      <label>
                          <span className="form-field">Lesson Type:</span>
                          <select className="form-control" value={lessonState.lessonType} onChange={handleLessonTypeChange}>
                          <option>Choose a Lesson type:</option>
                              {lessonType.map((type) => {
                                  return(
                                    <option value={type.value}>{type.label}</option>
                                  )
                              })}   
                           </select> 
                      </label>
                  </div>

              
                  <button className='btn btn-primary' disabled={isDisabled} onClick={handleAddClick} >Add</button>
                  <button className='btn btn-primary' onClick={props.handleSubmit}>Submit</button>
               
                   
        </form>
    </div>
  )
}

export default RegistrationForm