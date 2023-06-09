import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";


export default function UserList() {
   



  const [userlist, setUserlist] = useState([]);
  const getUsers = () => {
    fetch('https://62a970daec36bf40bdb78cff.mockapi.io/users',
      { method: "GET" })
        .then((data) => data.json())
        .then((usr) =>  setUserlist(usr));
     
  };



  // useEffect(() => getUsers(), []);
   //delete first refresh later
   const deleteUsers = (id) => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getUsers());
  };
  useEffect(() => getUsers(), [])


  return(
  <div className="User-List">
    
  {userlist.map((ur)=>(<Home key={ur.id} user={ur}  id={ur.id} 
   deletebutton={
    <button type="button" class="btn btn-danger"  onClick={()=>deleteUsers(ur.id)}>
    Delete 
  </button>
    
   }
  
  />))}

  </div>); 
}
