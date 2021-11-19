import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import AddServices from './Pages/AddServices/AddServices';
import Explores from './Pages/Services/Explores/Explores';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/Dashboard/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import UpdateForm from './Pages/Dashboard/UpdateForm/UpdateForm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/addservices">
              <AddServices></AddServices>
            </Route>
            <Route path="/details">
              <Explores></Explores>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/updateForm/:id">
              <UpdateForm></UpdateForm>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
