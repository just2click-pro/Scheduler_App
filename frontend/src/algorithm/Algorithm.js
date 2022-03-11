
//give a number to reduce the time
export const setTime = (hours ,minutes) => 
{
    try{
        let time = new Date()

        time.setHours(hours)
        time.setMinutes(minutes)
        return time
    }catch(error){
        console.log("error - setTime()" , error)
    }
    
    //time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}



export const changeTime = (time ,addMinutes) => 
{
    //let t = new Date()
    //time.setHours(hours)
   // time.setMinutes(minutes)
   try{
       time.setMinutes(time.getMinutes() + addMinutes)  
   }catch(e){
       console.log('eror',e)
   } 
}

export const guides = 
[
    {
        firstName:"yotam",
        startTime: setTime(16,0),
        endTime: setTime(20,0),
        days:['Monday' , 'Thursday'],
        swimmingStyle:['rowing','chest', 'butterfly' , 'back'],
    },
    {
        firstName:"yoni",
        startTime: setTime(8,0),
        endTime: setTime(15,0),
        days:['Tuesday','Wednesday','Thursday'],
        swimmingStyle:['chest', 'butterfly'],
    },
    {
        firstName:"joni",
        startTime: setTime(10,0),
        endTime: setTime(19,0),
        days:['Sunday','Tuesday', 'Thursday'],
        swimmingStyle:['rowing','chest', 'butterfly' , 'back'],
    },
]


//varibales
export const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday'];
export let restartTime =[];
export let classes = [];
export let index = 0;

export let newStudentsArray =[];

export let counter = 0;

export let guideName = '';
export let endCollectiveTime = '';
export let collectiveTime = '';
export let collectiveDay ="";
export let studentsColectiveArr = [];

async function matchClasses (students) {
    for(let i = 0; i < days.length; i++)
    {
        let classStartTimeArray = [];
        for(let k = 0; k < guides.length; k++)
        {
            let numStudentsCollective = 0;
            guideName = guides[k].firstName;
        
            if(guides[k].days.includes(days[i]))
            {
               // console.log(students.length)
                for(let j = 0; j < students.length; j++)
                {
                    //let studentName = students[j].firstName;
                    if(students[j].days.includes(days[i]))
                    {
                        if(guides[k].swimmingStyle.includes(students[j].swimmingStyle))
                        {
                            let startHour = (new Date(guides[k].startTime)).getHours()
                            let startMinutes = (new Date(guides[k].startTime)).getMinutes()

                            let diffHour = guides[k].endTime.getHours() - startHour
                            let diffMinute = guides[k].endTime.getMinutes() - startMinutes

                            let startTimeString = guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})
                            //if there is another class in the same start time
                            if(!classStartTimeArray.includes(startTimeString))
                            {
                                if(!((diffHour <= 1) && ((Math.abs(diffMinute) === 45) || (Math.abs(diffMinute) === 0))))
                                {
                                    //console.log(`${guides[k].firstName} ${guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})}`)
                                    if((Math.abs(diffMinute) <= 45) && students[j].lessonType === 'private')
                                    {
                                        let endTime = setTime(guides[k].startTime.getHours(), guides[k].startTime.getMinutes() + 45).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false});
                                        classes.push({
                                            classType:'private',
                                            day: days[i],
                                            startTime: startTimeString , //guides[k].startTime,
                                            endTime: endTime,
                                            description:`During this time there will be a swimming lesson between ${guides[k].firstName} and ${students[j].firstName}. `
                                        })
    
                                        //add starttime to array
                                         classStartTimeArray.push(guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false}))
                                        //change time of guide
                                        changeTime(guides[k].startTime, 45)
                                        //add the student to a new array and remove him from the current one
                                        newStudentsArray.push(students[j])
                                        index = students.indexOf(students[j])
                                        students.splice(index, 1)
                                    }
                                    //(diffHour >= 1) &&------------------------------------------
                                    else if((diffHour >= 1) && students[j].lessonType === 'collective')
                                    {
                                        numStudentsCollective ++
                                         //add the student to a new array and remove him from the current one
                                         newStudentsArray.push(students[j])
                                         studentsColectiveArr.push(students[j])

                                        if(numStudentsCollective == 2)
                                        {
                                             //add starttime to array
                                             classStartTimeArray.push(guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false}))
                                             collectiveTime = guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})
                                             endCollectiveTime = setTime(guides[k].startTime.getHours(), guides[k].startTime.getMinutes() + 60).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})
                                             collectiveDay = days[i]
                                             ///update the guides time 
                                             changeTime(guides[k].startTime, 60)
                                        }
                                         //save the time of the class and add it after
                                    }
                                    else if((Math.abs(diffMinute) <= 45) && students[j].lessonType === 'both')
                                    {
                                        let endTime = setTime(guides[k].startTime.getHours(), guides[k].startTime.getMinutes() + 45).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})
                                        classes.push({
                                            classType:'private',
                                            day: days[i],
                                            startTime: startTimeString,
                                            endTime: endTime,
                                            description:`During this time there will be a swimming lesson between ${guides[k].firstName} and ${students[j].firstName} the start time:${guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})}. `
                                        })
    
                                        //add starttime to array
                                        classStartTimeArray.push(guides[k].startTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false}))
    
                                        //change time of guide
                                        changeTime(guides[k].startTime, 45)

                                        //add the student to a new array and remove him from the current one
                                        newStudentsArray.push(students[j])
                                        index = students.indexOf(students[j])
                                        students.splice(index, 1)
                                    }
                                }//if diff
                                else
                                {
                                   console.log('no time - no match!!')
                                    //alert('There is not enough time we will try to stroke you at another time!');
                                }
                            }//if classstarttime
                            else
                            {
                                console.log('there is already a class in that time')
                                //alert('There is already a lesson planned at this time');
                            }
                        }//swimmingstyle
                    }//studentday
                }//students

                if(numStudentsCollective >= 2)
                {
                   
                    //add a collective class
                    classes.push({
                    classType:'collective',
                    day: collectiveDay,
                    startTime: collectiveTime,
                    endTime: endCollectiveTime,
                    description:`During this time there will be a collective swimming lesson with ${guides[k].firstName} ${collectiveTime}. `
                   })
                   
                    //removing the students from the collective array

                    studentsColectiveArr.forEach(student => {
                        index = students.indexOf(student)
                        students.splice(index, 1)
                    })
                       
                    studentsColectiveArr.splice(0, studentsColectiveArr.length)
                    numStudentsCollective = 0
                }
                else if(numStudentsCollective == 1 && !students.includes(studentsColectiveArr[0]))
                {
                    students.push(studentsColectiveArr[0])//after deleting the student we will add hom to get another chance to get aelected
                    const studentName = studentsColectiveArr[0].firstName
                    numStudentsCollective = 0
                    console.log(`We could not find a match for a collective lesson for ${studentName}`)
                    alert(`We could not find a match for a collective lesson for ${studentName}`)
                }

            }//guideday

            for (const g of guides)
            {
               if((g.firstName === guideName) && (guideName === 'yotam'))
               {
                g.startTime = setTime(16,0)
                break
               } 
               else if((g.firstName === guideName) && (guideName === 'yoni'))
               {
                 g.startTime = setTime(8,0)
                 break
               }
               else if((g.firstName === guideName) && (guideName === 'joni'))
               {
                 g.startTime = setTime(10,0)
                 break
                } 
            }
        }//guides
    }//days
    return classes;
}//func
export default matchClasses;
