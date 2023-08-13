import axios from "axios";
import { createContext } from "react";



export let UsersContext = createContext()




export default function UsersContextProvider(props) {

  let baseUrl =`https://delicate-resonance-6870.fly.dev`

  let headers ={
    token:localStorage.getItem("userToken")
  }
  async function UserDetails(){
    return axios.get(`${baseUrl}/api/users`)
    .then((response)=>response)
    .catch((error)=>error)
    }


return <UsersContext.Provider value={{baseUrl,headers,UserDetails}}>
  {props.children}
</UsersContext.Provider>
}
