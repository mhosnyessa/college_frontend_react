import axios from "axios";
import { createContext } from "react";



export let activitiesContext = createContext()




export default function ActivitiesContextProvider(props) {

  let baseUrl =`https://delicate-resonance-6870.fly.dev`


  async function getActivitiesProfessors(){
    return axios.get(`${baseUrl}/api/professors`)
    .then((response)=>response)
    .catch((error)=>error)
      }

  async function getActivitiesSubjects(){
    return axios.get(`${baseUrl}/api/subjects`)
    .then((response)=>response)
    .catch((error)=>error)
      }

    


return <activitiesContext.Provider value={{getActivitiesProfessors,getActivitiesSubjects}}>
  {props.children}
</activitiesContext.Provider>
}
