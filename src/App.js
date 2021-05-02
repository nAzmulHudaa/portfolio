import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import About from './Components/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/portfolio'>
          <Portfolio></Portfolio>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path ='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
