import  React from 'react';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  withRouter
} from 'react-router-dom';
import Home from './components/main_pages/home/Home';
import Buy from './components/main_pages/buy/Buy';
import Trade from './components/main_pages/trade/Trade';
import Sell from './components/main_pages/sell/Sell';
import Xbox from './components/consoles/xbox/Xbox';
import Xbox360 from './components/consoles/xbox_360/Xbox360';
import XboxOne from './components/consoles/xbox_one/XboxOne';
import Ps3 from './components/consoles/ps3/Ps3';
import Ps4 from './components/consoles/ps4/Ps4';
import Ps5 from './components/consoles/ps5/Ps5';
import Pc from './components/consoles/pc/Pc';
import Switchc from './components/consoles/switch/Switch';
import NavHome from './components/navbars/nav_home/NavHome';
import NavUser from './components/navbars/nav_user/NavUser';
import NavLogin from './components/navbars/nav_login/NavLogin';
import Register from './components/access_pages/register/Register';
import UserLogin from './components/access_pages/user_login/UserLogin';
import ForgotPassword from './components/access_pages/forgot_password/ForgotPassword';
import FootHome from "./components/footer/FootHome";
import Games from './components/main_pages/ListGames/ListGames';
import Cookies from 'universal-cookie';
import Profile from "./components/UserPages/Profile/Profile";
import HelpCenter from "./components/UserPages/HelpCenter/HelpCenter";
import TransactionHistory from "./components/UserPages/TransactionHistory/TransactionHistory";
class App extends React.Component {

  changeNav = (path) => {

    switch(path.toLowerCase()){
      case '/login':
      case '/register':
        return <NavLogin/>
      default:
        const cookies = new Cookies();
        if (cookies.get('token')){
          return <NavUser/>
        }else{
          return <NavHome/>
        }
    }
    
  }

  render() {
    return (
      <Router>
        {this.changeNav(this.props.location.pathname)}
        <Container fluid>
          <Row className="justify-content-center">
            <Switch>
              <Route exact path="/Buy" component={Buy} />
              <Route exact path="/Buy/:id" component={Games} />
              <Route exact path="/Sell" component={Sell} />
              <Route exact path="/Sell/:id" component={Games} />
              <Route exact path="/Trade" component={Trade} />
              <Route exact path="/Trade/:id" component={Games} />
              <Route path="/xbox" component={Xbox} />
              <Route path="/xbox360" component={Xbox360} />
              <Route path="/xboxone" component={XboxOne} />
              <Route path="/ps3" component={Ps3} />
              <Route path="/ps4" component={Ps4} />
              <Route path="/ps5" component={Ps5} />
              <Route path="/pc" component={Pc} />
              <Route path="/switch" component={Switchc} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={UserLogin} />
              <Route path="/forgotpassword" component={ForgotPassword} />
              <Route path="/profile" component={Profile} />
              <Route path="/help" component={HelpCenter} />
              <Route path="/howitworks" component={HelpCenter} />
              <Route path="/about" component={HelpCenter} />
              <Route path="/contact" component={HelpCenter} />
              <Route path="/transaction" component={TransactionHistory} />
              <Route exact from="/" to="/home" component={Home} />
            </Switch>
          </Row>
        </Container>
        <FootHome/>
      </Router>
    );
  }
}

export default withRouter(App);
