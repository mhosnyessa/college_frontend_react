import React from 'react'
import styles from "./Header.module.css"
export default function Header({logout}) {

return <>
<div className="main">
<div className="topbar">
                <div className="toggle">
                <i className="fa-solid fa-bars here"></i>
                </div>


                <div>
                    <button onClick={()=>logout()} className='btn btn-danger'>LogOut</button>
                </div>

            </div>
            </div>



</>
}
