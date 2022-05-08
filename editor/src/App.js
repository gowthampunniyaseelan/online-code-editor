import React,{useState} from 'react';
import { Page } from './views/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // new imports
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import Home from './Home';
function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(()=>{localStorage.getItem('token')});
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/page" element={
      isAuthenticated ? <Page/> : <Login/>
      } />
    </Routes>
    </Router>
  );
}

export default App;
