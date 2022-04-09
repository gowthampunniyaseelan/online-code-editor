import { Page } from './views/Page';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Activate from './views/Activate';
import ResetPassword from './views/ResetPassword';
import ResetPasswordConfirm from './views/ResetPasswordConfirm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // new imports
import store from './store';
import {Provider} from 'react-redux';
import Layout from './hocs/Layout';

function App() {
  return(
  <Provider store={store}>
    <Router>
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
      <Route path="/activate/:uid/:token" element={<Activate/>} />
    </Routes>
    </Layout>
    </Router>
  </Provider>
  );
}

export default App;
