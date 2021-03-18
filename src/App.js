import './App.css';
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
     <Home />

     {/* <Route path="/" component={Home} /> */}
     {/* <Route path="/login" component={Login} />  */}
    {/* <Login /> */}
     
    </div>
  );
}

export default App;
