import React, { useEffect } from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client"
import "./Chat.css";



const ENDPOINT = "http://localhost:4500";


const Chat = () => {
    const socket = socketIo(ENDPOINT,{transports: ['websocket']});

    useEffect(() => {
        socket.on('connect',() =>{
          alert("connected");
        })

        return () => {

        }
    }, [socket])

    


  return (
    <div className="back-conatiner"> 
      <div className="container-fluid front-container">
        <div className="back-top"></div>
        <div className="back-main"></div>
      </div>
      <div className="container front-container1">
        <div className="row chat-top">
         
        </div>
       
      </div>
      </div>
    
  )
}


export default Chat

