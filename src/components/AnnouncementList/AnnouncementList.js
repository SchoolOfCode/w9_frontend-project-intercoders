import React from "react";
import "./AnnouncementList.css"
import Axios from "axios";
import { useState } from "react";
import {volunteerData} from "../Volunteer/Volunter"

function AnnouncementList({volunteerData}) {
//const [keycourses, setkeycourses] = useState([keycourse])

let keycourse = [{
id:"1",
keycourse:"JavaScript",
volunteerName:"Bryce",
date:"22/06/2022",
time:"17:30"
},
{
id:"2",
keycourse:"SQL",
volunteerName:"Andy",
date:"27/06/2022",
time:"17:30"}]

function handleCross(){
  let newButton = document.body;
  newButton.classList.toggle("cross-function")

}


// function getVolunteer() {
//   console.log("Inside Axios");
//   Axios.get("http://localhost:3001/announcement").then((response) => {
//     setkeycourses(response.data.payload);
//   });
// }
console.log("this is the props", volunteerData);


return(
            <div className="Container-card">
            { keycourse.map(function (item){
             return(
             <div key={item.id} className="Announcement-card cross-function">
               <h3>{item.keycourse}</h3>
                <p>Room: {item.id}</p>
                <h3>{item.volunteerName}</h3>
                <p>{`${item.date} ${item.time}`}</p>
                <button className="cross-button"onClick={handleCross}>Cancel Class</button>
                
                </div>)})}   
             </div>
);
    
}

export default AnnouncementList