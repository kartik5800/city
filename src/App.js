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
import { ThemeProvider } from './Contex/ThemeContex';

function App() {
  const store = ConfigureStore()
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/Departments"} component={Departments} />
            <Route exact path={"/Doctors"} component={Doctors} />
            <Route exact path={"/About"} component={About} />
            <Route exact path={"/Contact"} component={Contact} />
            <Route exact path={"/Medicine"} component={Medicine} />
            <Route restricted={true} exact path={"/Auth"} component={Auth} />
            {/* <PublicRoute exact path={"/Appointment"} component={Appointment} /> */}
            < Route path={"/Appointment"} component={Appointment} />
            < Route exact path={"/ListAppointment"} component={ListAppointment} />
            <Route exact path={"/Counter"} component={Counter} />
          </Switch>
          <Footer />
        </Provider>
      </ThemeProvider>

    </>
  );
}

export default App;
