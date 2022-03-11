/*
import React , { useState } from 'react';
import axios from 'axios';
//import "./RegistrationScreen.css";

//Data
const days = ['Sunday' , 'Monday' , 'Tuesday', 'Wednesday', 'Thursday'];
const swimmingStyle = [
    {value: 'rowing', label: 'Rowing'},
    {value: 'chest', label: 'Chest'},
    {value: 'butterfly', label: 'Butterfly'},
    {value: 'back', label: 'Back'}
    ];
const lessonType = [
    {value: 'Private', label: 'Private'},
    {value: 'collective', label: 'Collective'},
    {value: 'both', label: 'Both'}
];

const RegistrationForm = () => {
  
  // Declare a new state variable , which we`ll call "values" 
  //First and last name
    const [values , setValues] = useState({
        // The initial state is an object with three values 
        firstName: '',
        lastName: ''
    });

  //Declare a new state variable, checkedstate for days
  const [daysState , setDays] = useState(
    new Array(days.length).fill(false)
  );

  //Declare a new state variable, for swimmingstyle
  const [swimmingState, setSwimmingStyle] = useState({
    swimmingStyle:'Rowing'
  });

  const [lessonState, setLessonType] = useState({
    lessonType:'Private'
  });

  //const [setSubmitted] = useState()
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
    }

    const handleSwimmingStyleChange = (event) => {
       const selectedStyle = event.target.value;
       setSwimmingStyle(selectedStyle);
    }

    const handleLessonTypeChange = (event) =>{
        const selectedType = event.target.value;
        setLessonType(selectedType);
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        console.log(values)

        const formData = {
            firstName: values.firstname,
            lastName: values.lastname,
           /* days: daysState,
            swimmingStyle: swimmingState,
            lessonType: lessonState,
            
        }
        
        axios.post('http://localhost:5000' , formData);// where do we want this information will go.
    }


    const handleSubmit = (event) => {
        alert('You are registered!');
        event.preventDefault();// the form will not submit
        //console.log(`${values} ${checkedState} ${swimmingState} ${lessonState}`)
        
    }


  return (
    <div className='container'>
        <h1>Hi, nice to meet you!</h1>
        <h4>Ready for some swimming?</h4>
        <form className="data-form" onSubmit={handleSubmit}>
               <div className='form-group'>
                   <label>
                          <span className="form-field">First name:</span>
                          <input  name='firstName' className="form-control"  value={values.firstName} placeholder="Your first name"  required="required" onChange={handleInputChange} />
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
                          <select className="form-control" value={swimmingState} onChange={handleSwimmingStyleChange}>
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
                          <select className="form-control" value={lessonState} onChange={handleLessonTypeChange}>
                              {lessonType.map((type) => {
                                  return(
                                    <option value={type.value}>{type.label}</option>
                                  )
                              })}   
                           </select> 
                      </label>
                  </div>
                  <button className='btn btn-primary' onClick={handleAddClick} >Add</button>
                  <input className='btn btn-primary' type="submit" id="submit-button" value="Finish and Submit" />
        </form>
    </div>
  )
}

export default RegistrationForm
*/



/*<Route path="/scheduler" element={<Scheduler/>}/>*/
/*<Route path="/product/:id" element={<GantttScreen />} />*/
/*<Route exact  path="/" element={<RegistrationForm />} />*/
/*
<Routes>
       <Route exact  path="/" element={<RegistrationForm />} />
       <Route path="/gantt">
         //Gantt
       </Route>
       </Routes>
       */

    /*
    <Router>
        <Navbar />
          <Routes>
            <Route exact  path="/register" element={<RegistrationForm />} />
            <Route path="/gantt">
              //Gantt
            </Route>
          </Routes>
      </Router>
      */

      /*
       <div className='table-responsive'>
     <table className='table'>
       <thead>
          <tr>
            <th scope="col" >Hour/ Day</th>
            <th scope="col" ><b>Sunday</b></th>
            <th scope="col" ><b>Monday</b></th>
            <th scope="col" ><b>Tuesday</b></th>
            <th scope="col" ><b>Wednesday</b></th>
            <th scope="col" ><b>Thursday</b></th>
        </tr>       
        </thead>
        <tbody>
         
            
            <tr>
            <td scope="row"><b>01:00</b></td>
            </tr>
            
            <tr>
            <td scope="row"><b>02:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>03:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>04:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>05:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>06:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>07:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>08:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>09:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>10:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>11:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>12:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>13:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>14:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>15:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>16:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>17:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>18:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>19:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>20:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>21:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>22:00</b></td>
            </tr>
            <tr>
            <td scope="row"><b>23:00</b></td>
            </tr>
            <tr>
              <td scope="row"><b>24:00</b></td>
            </tr>
        </tbody>

     </table>
   </div>
      */