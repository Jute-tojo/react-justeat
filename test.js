import './App.css';
import { Header } from './components/head-foot/Header';
import { Type } from './components/livraison/Type';
import { FilterNavigation } from './components/livraison/Filter-navigation';
import { Filtre } from './components/livraison/Filtre';
import { Search } from './components/livraison/Search';
import { Liste } from './components/livraison/Liste';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {  
  return (
    <Router>
      <Header />
      <Link to="/">ACCUEIL</Link>
      <Switch>        
        <Route path="/test">
            <h1>fdqf</h1>
        </Route>
        <Route path="/">
            <Type />
            <div className="container-md">
              <FilterNavigation />
              <br/>
              <div className="row">
                <section className="col-3 d-none d-lg-block">
                  <Filtre />
                </section>
                <section className="col-8 ms-4">
                  <Search />
                  <div className="row mt-3">
                      <div className="col-12 mb-2">
                          <b>117 restaurants disponibles en livraison</b>
                      </div>   
                        <Liste />                                 
                      <Liste />
                      <Liste />
                      <Liste />
                  </div>            
                </section>
              </div>
            </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
