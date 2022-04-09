import React,{useState} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {reset_password} from "../actions/auth";




const ResetPassword =({reset_password})=> {
  const [requestSent,setRequestSent] = useState(false);
  const [formData,setFormData] = useState({
    email:''
  });
  const {email}=formData;
  const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
    //login()
  };
  if (requestSent){
    return <Navigate to='/'/>
  }
  return (
    <div className='container mt-5'>
      <h1>Request password reset: </h1>
      <form onSubmit={e=>onSubmit(e)}>
          <div className='form-group'>
            <input 
            className='form-control' 
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={e=>onChange(e)}
            required 
            />
          </div>
          <br />
          <button className='btn btn-dark' type='submit'>Reset Password</button>
      </form>
    </div>
  )
};

export default connect(null,{reset_password})(ResetPassword);