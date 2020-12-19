import './App.css';

//-----Components------//
import Home from './containers/Home/index'
import Itemdetails from './containers/Itemdetails/itemdetails'
import Sellitem from './containers/SelItem/Sellitem';
//-----Components------//

//----React Router Dom----//
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
//----React Router Dom----//




function App() {
  return (

    <Router>
    
      <div className="app">
        <Switch>
          <Route exact path={`/Item/:Category/:title/:id`} component={Itemdetails}>
            <Itemdetails />
          </Route> 
          <Route exact path="/Sellitem" component={Sellitem}>
            <Sellitem />
          </Route> 
         <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router> 
  );
}




export default App;
