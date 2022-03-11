import { useState } from 'react';
import Navbar from './components/Navbar.js';
//import Gantt from './screenComponents/GanttScreen/Gantt.js';
//import { Container } from 'react-bootstrap';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Table from './screenComponents/RegistrationScreen/Table.js';
import Scheduler from './screenComponents/SchedulerScreen/Scheduler.js';
import  matchClasses  from './algorithm/Algorithm.js'

import './App.css'


// need to be in gantt.js


//Scheduler data

/*const prevclasses = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 },
  { start_date:'2020-06-8 6:00', end_date:'2020-06-8 8:00', text:'helooo', id: 3 }
];*/

const dates = [{date:'2022-03-13',day:'Sunday'},{date:'2022-03-14',day:'Monday'},{date:'2022-03-15',day:'Tuesday'},{date:'2022-03-16',day:'Wednesday'},{date:'2022-03-17',day:'Thursday'}]

const App = () => {
  const [dataClasses, setDataClasses] = useState([]);
  const [classes , setClasses] = useState([{}]);

  /*const [dataClasses , setDataClasses] = useState([{
    start_date:'',
    end_date:'',
    start_time:'',
    text:'',
    id:nanoid(),
  }])
  */
 


  const getClassesData = async (studentsData) => {
    let id = 1;
    const newClasses = await matchClasses(studentsData);
    console.log("newclass" ,newClasses)
    setClasses(newClasses);
    let curdataClasses = [];
    for(let i = 0; i < dates.length ; i++){
      newClasses.forEach((c) => {
        
        if(c.day === dates[i].day){
          curdataClasses.push({
            start_date: dates[i].date + " " + c.startTime,
            end_date: dates[i].date + " " + c.endTime,
            start_time: c.startTime,
            end_time: c.endTime,
            text: c.description,
            id:id++,
          })
        }
      })
    }
    setDataClasses(curdataClasses);
  }
    




  return (  
    <Router>
    <Navbar />
      <Routes>
        <Route exact  path="/" />
        <Route path="/register" element={<Table getData={getClassesData}/>}/> 
        <Route path="/scheduler" element={<Scheduler events={dataClasses} />}/>
      </Routes>
  </Router>
  );
}

export default App;

/* <Navbar />
<Route path="/scheduler" element={<Scheduler/>}/>
 <Route path="/gantt" element={<Gantt tasks={data} />}/> */

/*
<Router>
    <Navbar />
      <Routes>
        <Route exact  path="/" />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/gantt" element={<>
         
            <Toolbar zoom={currentZoom}
            onZoomChange={handleZoomChange}/>
           <Gantt tasks={data} zoom={currentZoom}/>
         </>
        }/>
            
        <Route path="/scheduler" element={<Scheduler/>}/>
      </Routes>
  </Router>
*/



/*
  //need to be in gantt
  const [students , setStudents] = useState([
    {
        firstName: '',
        lastName: '',
        days: [],
        swimmingStyle: '',
        lessonType: '',
    }
  ])

  useEffect(() => {
    fetch("http://localhost:3001/")
    .then((res) => 
      res.json()
    ).then((jsonRes) => setStudents(jsonRes));
  }, []);

  useEffect(() => {
    console.log(students)
  },[students]);
  
  

  const [addFormData, setAddFormData] = useState({
      firstName: '',
      lastName: '',
      days: [],
      swimmingStyle: '',
      lessonType: '',
  });*/
