import './App.css';
import Home from './components/Home'
import {Route,Switch} from 'react-router-dom'
import Login from './components/auth/Login'
import TweetPage from './components/tweetpage/TweetPage'
import {withRouter} from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <AuthProvider>
    <div className="App">
     <Switch>
     <PrivateRoute path="/tweetpage" component={TweetPage} /> 
     <Route path="/login" component={Login} /> 
     <Route path="/" exact component={Home} />
     </Switch>
     
    </div>
    </AuthProvider>
  );
}

export default withRouter(App);
