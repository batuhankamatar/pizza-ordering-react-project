import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/pizza">
          <Order />
        </Route>

        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  )
}

export default App