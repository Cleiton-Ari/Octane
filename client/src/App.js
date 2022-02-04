import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={HomePage}/>
     </Switch>
    </div>
  );
}

export default App;
