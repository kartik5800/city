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

import Make_Appointment from './Containers/Make_Appointment/Make_Appointment';
import Auth from './Containers/Auth/Auth';
import Counter from './Containers/Counter/Counter';
import Medicine from './Containers/Medicine/Medicine';

function App() {
  return (
    <div>
       <Header />
       {/* <Counter /> */}
       <Switch>
         <Route exact path={"/"} component={Home} />
         <Route exact path={"/Departments"} component={Departments} />
         <Route exact path={"/Doctors"} component={Doctors} />
         <Route exact path={"/About"} component={About} />
         <Route exact path={"/Contact"} component={Contact} />
         <Route exact path={"/Medicine"} component={Medicine} />
         <Route exact path={"/Auth"} component={Auth} />
         <Route exact path={"/Make_Appointment"} component={Make_Appointment} />

       
       </Switch>
       <Footer />
         
    </div>
  );
}

export default App;
