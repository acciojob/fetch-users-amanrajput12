
import React, { use, useEffect, useState } from "react";
import './../styles/App.css';
import Header from "./Header.js";
import axios from "axios"
import UserList from "./UserList.js";

const App = () => {
  const [user,setUser] = useState(null);
  

  function calldata(){
    axios.get("https://reqres.in/api/users",{
      headers:{
        "x-api-key": "reqres-free-v1"
      }
    }).then(resp=>setUser(resp.data.data))
  }
  
console.log("data is",user)
  return (
    <div>
        {/* Do not remove the main div */}
        <Header val={calldata}/>
        <UserList user={user}/>
    </div>
  )
}

export default App
