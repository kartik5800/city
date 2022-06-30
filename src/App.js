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
import Auth from './Containers/Auth/Auth';
// import Counter from './Containers/Counter/Counter';
import Medicine from './Containers/Medicine/Medicine';
import PublicRoute from './Containers/Route/PublicRoute';
import PrivetRoute from './Containers/Route/PrivetRoute';
import ListAppointment from './Containers/Make_Appointment/ListAppointment';
import Appointment from './Containers/Make_Appointment/Appointment';
import { ConfigureStore } from "./redux/Store";
import { Provider } from "react-redux";
import Counter from "./Containers/Counter/Counter";

function App() {
  const store= ConfigureStore ()
  return (
    <>
<Provider store={store}>
      <Header />
      <Switch>
         <PublicRoute exact path={"/"} component={Home} />
         <PublicRoute exact path={"/Departments"} component={Departments} />
         <PublicRoute exact path={"/Doctors"} component={Doctors} />
         <PublicRoute exact path={"/About"} component={About} />
         <PublicRoute exact path={"/Contact"} component={Contact} />
         <PrivetRoute exact path={"/Medicine"} component={Medicine} />
         <PublicRoute restricted={true} exact path={"/Auth"} component={Auth} />
         {/* <PublicRoute exact path={"/Appointment"} component={Appointment} /> */}
         < PrivetRoute  path={"/Appointment"} component={Appointment} />
         < PrivetRoute exact path={"/ListAppointment"} component={ListAppointment} />
         <Route exact path={"/Counter"} component={Counter} />
         </Switch>
      <Footer />
      </Provider>
    
    </>
  );
}

export default App;
