import { Page } from './views/Page';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // new imports
import Login from './views/auth/Login';
import Signup from './views/auth/SignUp';
import Logout from './views/auth/Logout';

function App() {
  <Router>
     <Page/>
    <Switch>
    <Route path='/login' component={Login} exact/>
    <Route path='/signup' component={Signup} exact />
    <Route path='/logout' component={Logout} exact />
    </Switch>
  </Router>
  
}

export default App;
