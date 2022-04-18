import React, { useState } from 'react'
import "./Join.css";
import img from "../../image/img.png";
import {Link} from "react-router-dom";


let user;
const sendUser=()=>{
    user= document.getElementById('joinInput').value;
    document.getElementById('joinInput').value="";
    const getdata = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tasks" )
        
        const data = await response.json()
        console.log(data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getdata()
}

const Join = () => {

    const [name, setname] = useState("");
    const [password, setpassword] = useState("")
    
 
  return (
    <div>
      <div className="JoinPage">
        <div className="JoinContainer">
          <img src={img} alt="img" />
          <input onChange={(e)=> setname(e.target.value)} placeholder="Enter your name" type = "text" id="joinInput" />
          <input onChange={(p)=> setpassword(p.target.value)} placeholder="Password" type = "password" id="joinPassword"/>
         <Link onClick={(event)=> !name || !password ?event.preventDefault():null}  to= "/welcomepage"> <button onClick={sendUser}className='joinbtn'>Login</button></Link>
         
        </div>
      
    </div>
    </div>
  )
}

export default Join
export {user}