import React, { Component } from 'react';
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
import Tableview from './Tableview';
import ItemPage from './Pages/ItemPage';
import CategorySearch from './Pages/CategorySearch';

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
      height: "100%",
      
      transition: "background-color 1s",

    }
    const divStyleLight = {
      backgroundColor: "white",
      height: "100%",
      
      transition: "background-color 1s",

    }

    return (
      <div style={this.state.darkMode ? divStyleDark : divStyleLight}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <SiteNavbar darkmode={darkModeToggle} darkmodeOn={this.state.darkMode}></SiteNavbar>
              <HomePageContent darkmodeOn={this.state.darkMode}></HomePageContent>
            </Route>
            <Route path="/table" exact>
              <SiteNavbar darkmode={darkModeToggle} darkmodeOn={this.state.darkMode}></SiteNavbar>
              <Tableview darkmodeOn={this.state.darkMode}></Tableview>
            </Route>
            <Route path={"/itempage"} exact>
              <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <ItemPage darkmodeOn={this.state.darkMode}></ItemPage>
            </Route>
            <Route path={'/categorysearch'} exact>
              <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <CategorySearch darkmodeOn={this.state.darkMode}></CategorySearch>
            </Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
