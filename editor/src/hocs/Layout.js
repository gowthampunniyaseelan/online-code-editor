import React,{useEffect} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import NavBar from '../views/NavBar';
import {connect} from "react-redux";
import {checkAuthenticated,load_user,googleAuthenticate} from '../actions/auth';

const Layout=(props)=> {
  let location = useLocation();
  useEffect(()=>{
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    console.log('State: '+state);
    console.log('Code: '+ code);
    if (state && code) {
      props.googleAuthenticate(state,code);
      
    }else{
      props.checkAuthenticated();
      props.load_user();
    }
     
  },[location]);
  return (
    <div>
    <NavBar/>
    {props.children}
    </div>
  )
}

export default connect(null,{checkAuthenticated,load_user,googleAuthenticate})(Layout);