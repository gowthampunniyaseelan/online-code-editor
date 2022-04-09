import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
  return (
  <div className='container'>
  <div className="jumbotron mt-5">
  <h1 className="display-4">Welcome to the editor</h1>
  <p className="lead">This is an incredible editor and it will support three languages HTML,CSS,JS </p>
  <hr className="my-4"/>
  <p>Click the log in button</p>

    <Link className="btn btn-primary btn-lg" to="/login" role="button">LogIn</Link>
</div>
</div>
  );
}

export default Home