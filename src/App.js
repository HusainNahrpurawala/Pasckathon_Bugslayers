import React,{Component} from 'react';
import Navbar from './components/layout/Navbar';
import Home from './Home';
import { BrowserRouter , Route,Switch } from 'react-router-dom';
import './App.css';


class App extends Component{
  render(){
    return(

<BrowserRouter>
   <div>
   <Navbar/>
   <Switch>
  <Route exact path="/" component={Home} />
  </Switch>
 </div>
 </BrowserRouter>

    );
  }
}

export default App;