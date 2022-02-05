
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import {Switch, Route} from 'react-router-dom'




>>>>>>> c595123f083bbef2bf62c174da49cac764fce874

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
