import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div>
    <h1 className='header'>Welcome to the code editor</h1>
    <br />
        <Link
        style={{
          color:"black"
        }} 
        className='signup' to="/signup">Signup</Link>
        <Link
        style={{
          color:"black"
        }}  
        className='login' to="/login">Login</Link>
    </div>
  )
}

export default Home