
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import {Switch, Route} from 'react-router-dom'







function App() {
  return (
    <div className="App">

     <Switch>
       <Route  path="/" exact component={HomePage} />
       <Route  path="signup" exact component={Signup} />
       <Route  path="login" exact component={Login} />
       
     </Switch>

    </div>
  );
}

export default App;
