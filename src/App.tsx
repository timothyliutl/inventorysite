import React2, { Component } from 'react';
import './App.css';
import SiteNavbar from './Navbar';
import HomePageContent from './homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

class App extends Component<any, any>{
  state = {
    darkMode: false
  }
  render() {

    const darkModeToggle = () => {
      this.setState({ darkMode: !this.state.darkMode });
    }
    const divStyleDark = {
      backgroundColor: "#15202B",
      height: "100vh",
      transition: "background-color 1s",

    }
    const divStyleLight = {
      backgroundColor: "white",
      height: "100vh",
      transition: "background-color 1s",

    }
    //TODO: work on routing for the pages
    //TODO: use material ui to implement styles

    return (
      <div style={this.state.darkMode ? divStyleDark : divStyleLight}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <SiteNavbar darkmode={darkModeToggle} darkmodeOn={this.state.darkMode}></SiteNavbar>
              <HomePageContent darkmodeOn={this.state.darkMode}></HomePageContent>
            </Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
