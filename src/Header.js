import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Userslist from "./Userslist";
import Login from "./Login";
import Single from "./Single";
class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg='light' variant='dark'>
            <Navbar.Brand href='#home'>
              <Link to='/'>Navbar</Link>
            </Navbar.Brand>
            <Nav className='ml-auto'>
              <Nav.Link>
                <Link to='/userlist'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/login'>Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path='/userlist'>
              <Userslist />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/'>
              <Userslist />
            </Route>
             <Route path='/user/:id'>
              <Single />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Header;
