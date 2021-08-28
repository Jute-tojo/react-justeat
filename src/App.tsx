import './App.css';
import { Home } from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Client } from './components/Service/Client';
import { Takeaway } from './components/takeaway/Takeaway';
import { Point } from './components/point/Point';
import { Livraison } from './components/livraison/Livraison';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/livraison">
          <Livraison />
        </Route>   
        <Route path="/point">
          <Point />
        </Route>      
        <Route path="/takeaway">
          <Takeaway />
        </Route>
        <Route path="/service-clientele">
          <Client/>
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
