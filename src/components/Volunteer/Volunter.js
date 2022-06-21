import React from "react";
import { useState } from "react";

function Volunteer () {
const[nameVolunteer, setNameVolunteer]=useState("");
const[date1,setDate]=useState("")
const [volunteer,setVolunteer] = useState([]);

function handleName(e){
setNameVolunteer(e.target.value)
}
function handleDate(e){
setDate(e.target.value)
}

function handleSubmit(){
setVolunteer([...volunteer,{volunteerName:nameVolunteer, id:volunteer.length+1,date:date1}])}

return(
<div className='volunteer'>
    <input type="text" onChange={handleName} placeholder="Volunteer's name"></input>
    <select id="day" onChange={handleDate}>
        <option value= "available">Available Date: </option>
        <option value= "monday"> Monday </option>
        <option value= "tuesday"> Tuesday </option>
        <option value= "thursday"> Thursday </option>
        <option value= "friday"> Friday </option>
    </select>
    <button type= "click" onClick={handleSubmit}>Submit</button>
    </div>

)
    
}

export default Volunteer;