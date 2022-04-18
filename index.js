const http=require("http");
const express =require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app=express(); 
const server=http.createServer(app);    //calling express
const io=socketIO(server);

app.use(cors());                       //intercommunication between URL
app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

//Run when client connects
io.on("connection", () => {
    console.log("New Connection");
})

 
const PORT=4500 || process.env.PORT; 

server.listen(PORT,()=>{
    console.log(`server is working on http://localhost:${PORT}`);
});