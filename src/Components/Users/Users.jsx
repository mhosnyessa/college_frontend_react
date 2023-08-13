import React, { useContext, useEffect, useState } from 'react'
import styles from "./Users.module.css"
import swal from 'sweetalert';
import { Helmet } from 'react-helmet'
import { UsersContext } from '../../Context/UsersContext'
import { toast } from 'react-hot-toast';

export default function Users() {
  let {UserDetails} = useContext(UsersContext)
const [users, setUsers] = useState(null)
  useEffect(()=>{
    GetUserDetails()
  },[])

  async function GetUserDetails(){
    let response = await UserDetails()
    console.log(response);
    setUsers(response.data)
    }


    const deleteData = (id,index)=>{
      if(id !=="1"){
        toast.error(`${"You not have permision"}`,{ duration: 2000, position: 'top-center',className: 'bg-danger text-white'})

      }else{
        console.log(users[index]);
        users.splice(index,1)
        toast.success(`${"You  have permision"}`,{ duration: 2000, position: 'top-center',className: 'bg-success text-white'})

      }
    }
  return <>

<Helmet>
        <title>Users</title>
        </Helmet>
    <div className="main">
            <div className="details w-100">
            <div className="recentOrders ">
                    <div className="cardHeader">
                        <h2>Users</h2>
                    </div>
                    <div>

                        
                        <table>
                        <thead>
                            <tr>
                                <td>UserName</td>
                                <td>UserId</td>
                                <td>FirstName</td>
                                <td>SecondName</td>
                                <td>Email</td>
                                <td>Department</td>
                                <td>Delete</td>
                            </tr>
                        </thead>

                        <tbody>

                            {users?.map((user,index)=><tr key={index} >
                                <td>{user.UserName}</td>
                                <td>{user.UserID}</td>
                                <td >{user.FirstName}</td>
                                <td>{user.SecondName}</td>
                                <td>{user.Email}</td>
                                <td>{user.Department}</td>


                                <td><span onClick={()=>deleteData(user.Rank ,index)}  className="btn btn-danger btn-sm">Delete </span></td>

                            </tr>)}
                        </tbody>



                    </table>
                    </div>
                </div>
            </div>
            </div>  </>
}
