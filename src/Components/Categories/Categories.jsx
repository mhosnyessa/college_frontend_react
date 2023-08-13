import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { categoryContext } from './../../Context/CategoryContext';
import styles from "./Categories.module.css"
export default function Categories() {

  let {getCategoryHalls,getCategoryLabs} = useContext(categoryContext)
const [hallsData, setHallsData] = useState(null)
const [labsData, setLabsData] = useState(null)
  useEffect(()=>{
    GetHallsDetails()
    GetLabsDetails()

  },[])
  
  async function GetHallsDetails(){
    let response = await getCategoryHalls()
    console.log(response.data)
    setHallsData(response.data)
    }
  
  async function GetLabsDetails(){
    let response = await getCategoryLabs()
    console.log(response.data)
    setLabsData(response.data)
    }







  return <>

        <Helmet>
        <title>Users</title>
        </Helmet>
        <div className="main">
        <div className="details w-100">
            <div className="recentOrders ">
            <h2 className='text-center mainHead'>Labs</h2>

            {labsData?<table class="table  text-center table-responsive" id="table" >
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
                    <td contenteditable="true" className='two'>{labsData[1]?.LabName}<br/>{labsData[1]?.Facilities}</td>
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
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                </tr>
                <tr>
                    <th contenteditable="true" >12 - 1.30</th>
                    <td contenteditable="true" className='one text-center'> {labsData[2]?.LabName}<br/>{labsData[2]?.Facilities}</td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'> </td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one text-center'> {labsData[0]?.LabName} <br/>{labsData[0]?.Facilities}</td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >1.30 - 2.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'> {labsData[3]?.LabName} <br/>{labsData[3]?.Facilities}</td>
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
                    <td contenteditable="true" className='two'></td>
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
                    <th contenteditable="true" >5 - 6</th>
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
                    <td contenteditable="true" className='one text-center'> {labsData[4]?.LabName} <br/>{labsData[4]?.Facilities}</td>
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

        <div className=' text-end'>
        <button className='btn btn-primary  ' type='submit'>update Labs</button>
        </div>


<div>
        <h2 className='text-center mainHead'>Halls</h2>


        {hallsData?<table class="table  text-center table-responsive" id="table" >
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
                    <td contenteditable="true" className='two'></td>
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
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                </tr>
                <tr>
                    <th contenteditable="true" >12 - 1.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'>{hallsData[1]?.HallName}<br/>{hallsData[1]?.Facilities}</td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >1.30 - 2.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true"  className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one' > {hallsData[0]?.HallName}<br/>{hallsData[0]?.Facilities}</td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                   
                </tr>
                <tr>
                    <th contenteditable="true" >2.30 - 3.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >3.30 - 5</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true"className='one'>{hallsData[2]?.HallName} <br/>{hallsData[2]?.Facilities}</td>
                    <td contenteditable="true"className='two'></td>
                    <td contenteditable="true"className='one'></td>
                    <td contenteditable="true"className='two'>
                        
                    </td>
                </tr>
                <tr>
                    <th contenteditable="true" >5 - 6</th>
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
        <div className=' text-end'>
        <button className='btn btn-primary ' type='submit'>update Halls</button>
        </div>
        </div>
        <h2 className='text-center mainHead'>Schedules</h2>


        <table class="table  text-center table-responsive" id="table" >
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
                    <td contenteditable="true" className='two'></td>
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
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
                    </td>
                   
                </tr>
                <tr>
                    <th contenteditable="true" >12 - 1.30</th>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true"  className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'></td>
                    <td contenteditable="true" className='one'></td>
                    <td contenteditable="true" className='two'>
                        
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
                    <td contenteditable="true" className='two'></td>
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
                    <th contenteditable="true" >5 - 6</th>
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
        </table>

        </div>
        </div>
        </div>







  
  </>
}
