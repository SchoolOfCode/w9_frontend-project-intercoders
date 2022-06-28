import React from 'react'
import Header from '../Header/Header'
import Announcement from '../Announcement/Announcement'
import Categories from '../Categories/Categories'
import puzzle from "./img/puzzle.png";


function Profile() {
  return (
      <div>
    <Header className="header"/>
    <h2> Welcome username</h2>
      <img className="puzzle" src={puzzle} alt="puzzle" ></img>
      <Announcement/>
      <Categories />
      </div>
  )
}

export default Profile