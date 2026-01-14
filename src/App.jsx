import { useState } from 'react'; 
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';
import './App.css';

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/pizza">
          <Order setOrderData={setOrderData} />
        </Route>

        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;