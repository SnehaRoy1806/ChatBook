
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from "./component/Join/Join";
import WelcomePage from './component/WelcomePage/WelcomePage';
import Chat from './component/Chat/Chat';



function App() {

 return (
    <div className="App">
      <Router>
      <Routes>
       
       
       <Route exact path="/" element={<Join/>}/>

       
       <Route path="/welcomepage" element={<WelcomePage/>}/>

       <Route path="/chat" element={<Chat/>}/>


      </Routes>
</Router>
      
    </div>
  );
}

export default App;
