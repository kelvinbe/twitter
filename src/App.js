import './App.css';
import Home from './components/Home'
import {Route,Switch} from 'react-router-dom'
import Login from './components/Login'
import TweetPage from './components/TweetPage'
import {withRouter} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Switch>
     <Route path="/tweetpage" component={TweetPage} /> 
     <Route path="/login" component={Login} /> 
     <Route path="/" exact component={Home} />
     </Switch>
     
    </div>
  );
}

export default withRouter(App);
