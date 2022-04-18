import React from 'react'
import {user} from "../Join/Join";
import "./WelcomePage.css";
import img from "../../image/imgg.png";
import {Link} from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
        <div className="WelcomePage">
         
       <img src={img} alt="imgg" />
       <Link to = "/chat"><button class="Continue">Continue</button></Link>
        </div>
       </div>
    
  )
  }

export default WelcomePage
