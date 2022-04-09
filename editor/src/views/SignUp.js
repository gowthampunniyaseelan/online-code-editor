import React,{useState} from 'react';
import {Link,Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {signup} from "../actions/auth";




const SignUp=({signup,isAuthenticated})=> {
  const [accountCreated,setAccountCreated] = useState(false);
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    re_password:''
  });
  const {name,email,password,re_password}=formData;
  const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    if (password === re_password){
    signup(name,email,password,re_password);
    setAccountCreated(true);
    }
  };
  if (isAuthenticated){
    return <Navigate to='/page'/>
  }
  if (accountCreated){
    return <Navigate to='/login'/>
  }
  return (
    <div className='container mt-5'>
      <h1>Sign Up</h1>
      <p>Create Your Account</p>
      <form onSubmit={e=>onSubmit(e)}>
      <div className='form-group'>
            <input 
            className='form-control' 
            type='text'
            placeholder='Enter your name'
            name='name'
            value={name}
            onChange={e=>onChange(e)}
            required 
            />
          </div>
          <br />
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
          <div className='form-group'>
            <input 
            className='form-control' 
            type='password'
            placeholder='password*'
            name='password'
            value={password}
            onChange={e=>onChange(e)}
            minLength='6'
            required 
            />
          </div>
          <br />
          <div className='form-group'>
            <input 
            className='form-control' 
            type='password'
            placeholder='Confirm password*'
            name='re_password'
            value={re_password}
            onChange={e=>onChange(e)}
            minLength='6'
            required 
            />
          </div>
          <br />
          <button className='btn btn-dark' type='submit'>Register</button>
      </form>
      <p className='mt-3'>
       Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
};

const mapStateToProps = state => ({
isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{signup})(SignUp);