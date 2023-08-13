import React, { useContext, useEffect, useState } from 'react'
import styles from "./Activities.module.css"
import { Helmet } from 'react-helmet';
import { categoryContext } from './../../Context/CategoryContext';
import { activitiesContext } from '../../Context/activitiesContext';


export default function Activities() {

  let {getActivitiesProfessors,getActivitiesSubjects}= useContext(activitiesContext)
  let {getCategoryHalls} = useContext(categoryContext)


const [hallsData, setHallsData] = useState(null)
  const [professorsData, setProfessorsData] = useState(null)
  const [subjectData, setSubjectData] = useState(null)

  useEffect(()=>{
    GetLabsProfessors()
    GetLabsSubjects()
    GetHallsDetails()
  },[])

  async function GetLabsProfessors(){
    let response = await getActivitiesProfessors()
    console.log(response.data)
    setProfessorsData(response.data)
    }

  async function GetLabsSubjects(){
    let response = await getActivitiesSubjects()
    console.log(response.data)
    setSubjectData(response.data)
    }

    async function GetHallsDetails(){
      let response = await getCategoryHalls()
      console.log(response.data)
      setHallsData(response.data)
      }






  return <>
        <Helmet>
        <title>Activities</title>
        </Helmet>
        <div className="main">
        <div className="details w-100">
            <div className="recentOrders ">
            <div className='d-flex justify-content-between align-items-center '>
            <form  className='category d-flex gap-5'>
   

            <div>
              <label htmlFor="Department">Department</label>
            <select id="Department" name='Department'  className="form-select  ">
            <option >Architecture Engineering </option>
            <option >Communications Engineering</option>
            <option >Electrical engineering </option>
            <option >Mechanical engineering</option>
            <option >Software Engineering</option>
            </select>
              </div>

              <div>
              <label htmlFor="Year">Year</label>
            <select id="Year" name='Year'  className="form-select  ">
            <option >one</option>
            <option >two</option>
            <option >three</option>
            <option >four</option>
            <option >five</option>
            
            </select>
              </div>

              <div>
              <label htmlFor="category">Semester</label>
            <select id="semester " name='semester '  className="form-select  ">
            <option >Term 1</option>
            <option >Term 2</option>
            
            </select>
              </div>


                </form>
            </div>
            <div className=' text-end'>
        <button className='btn btn-primary' type='submit'>Add New Schedule </button>
        </div>

            <h2 className='text-center mainHead mt-2'>Activities</h2>




{hallsData?<div className="cardHeader">

            {professorsData?<table class="table  text-center table-responsive" id="table" >
            <thead>
                <tr >
                    <th scope="col">Time</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                   
                    
                    
                    
                </tr>
            </thead>
            <tbody >
                <tr>
                    <th contenteditable="true" >9 - 10</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>{professorsData[0]?.FirstName}<br/>{subjectData[0]?.SubjectName}<br/>( {hallsData[0]?.HallName} )</td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"className='two'></td>
                    
                </tr>
                <tr>
                    <th contenteditable="true" >10.15 - 11.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>{professorsData[1]?.FirstName}<br/>{subjectData[1]?.SubjectName}<br/>( {hallsData[2]?.HallName} )</td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                </tr>
                <tr>
                    <th contenteditable="true" > 12 - 1.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two text-center'>{professorsData[2]?.FirstName}<br/>{subjectData[1]?.SubjectName}<br/>( {hallsData[2]?.HallName} )
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >1.30 - 2.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true"  className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one' ></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                   
                </tr>
                <tr>
                    <th contenteditable="true" >2.30 - 3.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>{professorsData[3]?.FirstName}<br/>{subjectData[0]?.SubjectName}<br/>( {hallsData[1]?.HallName} )</td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >3.30 - 5</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true"className='one'></td>
                    <td contenteditable="true"className='two'></td>
                    <td contenteditable="true"className='one'></td>
                    <td contenteditable="true"className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >5 -6</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true"className='one' ></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" ></th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                  
                </tr>
                <tr>
                    <th contenteditable="true" ></th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
            </tbody>
        </table>:null}
        
        </div>:null}

        <div className=' text-center'>
        <button className='btn btn-primary  ' type='submit'>update Schedules</button>
        </div>
        </div>
        </div>
        </div>







  
  </>
}
