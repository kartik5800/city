import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Footer from './Components/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Departments from "./Containers/Departments/Departments";
import Doctors from './Containers/Doctors/Doctors';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';

function App() {
  return (
    <div>
       <Header />
       <Switch>
         <Route exact path={"/"} component={Home} />
         <Route exact path={"/Departments"} component={Departments} />
         <Route exact path={"/Doctors"} component={Doctors} />
         <Route exact path={"/About"} component={About} />
         <Route exact path={"/Contact"} component={Contact} />
       </Switch>
       <Footer />
    </div>
  );
}

export default App;
