import React from 'react';
import { Page } from './views/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // new imports
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import Home from './Home';
function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/page" element={<Page/>}/>
    </Routes>
    </Router>
  );
}

export default App;
