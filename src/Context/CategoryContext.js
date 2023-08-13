import axios from "axios";
import { createContext } from "react";



export let categoryContext = createContext()




export default function CategoryContextProvider(props) {

  let baseUrl =`https://delicate-resonance-6870.fly.dev`
  


  async function getCategoryHalls(){
    return axios.get(`${baseUrl}/api/lecturehalls`)
    .then((response)=>response)
    .catch((error)=>error)
      }

  async function getCategoryLabs(){
    return axios.get(`${baseUrl}/api/labs`)
    .then((response)=>response)
    .catch((error)=>error)
      }
      

return <categoryContext.Provider value={{getCategoryHalls,getCategoryLabs,baseUrl}}>
  {props.children}
</categoryContext.Provider>
}
