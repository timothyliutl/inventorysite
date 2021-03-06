import React, { Component } from 'react';
import './App.css';
import SiteNavbar from './Components/Navbar';
import HomePageContent from './Pages/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useLocation
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Tableview from './Pages/Tableview';
import ItemPage from './Pages/ItemPage';
import CategorySearch from './Pages/CategorySearch';
import "./index.css"
import Footer from './Components/Footer';
import TutorialVideoPage from './Pages/TutorialVideoPage';
import VideoSelectionPage from './Pages/VideoSelectionPage';
import AdminPage from './Pages/AdminPage';
import Navbarsm from './Components/Navbarsm';
import MobileItemPage from './Pages/MobileItemPage';


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
      minHeight: '100vh',
      transition: "background-color 1s",

    }
    const divStyleLight = {
      backgroundColor: "white",
      height: "100%",
      minHeight: '100vh',
      transition: "background-color 1s",

    }
    //darkmodeOn: state of darkmode for all functional components
    //darkModeToggle: function for changing the state of darkmode for whole web app

    return (
      <div style={this.state.darkMode ? divStyleDark : divStyleLight}>
        <Router>
          <Switch>
            <Route path="/" exact>
            <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <CategorySearch darkmodeOn={this.state.darkMode}></CategorySearch>
              <Footer darkmodeOn={this.state.darkMode}></Footer>
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
              <Footer darkmodeOn={this.state.darkMode}></Footer>
            </Route>
            <Route path={'/video'} exact>
              <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <TutorialVideoPage darkmodeOn={this.state.darkMode}></TutorialVideoPage>
              <Footer darkmodeOn={this.state.darkMode}></Footer>
            </Route>
            <Route path={'/videoselection'} exact>
              <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <VideoSelectionPage darkmodeOn={this.state.darkMode}></VideoSelectionPage>
              <Footer darkmodeOn={this.state.darkMode}></Footer>
            </Route>
            <Route path={'/admin'} exact>
            <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
              <AdminPage darkmodeOn={this.state.darkMode}></AdminPage>
              <Footer darkmodeOn={this.state.darkMode}></Footer>
            </Route>
            <Route path={'/test'}>
            <SiteNavbar darkmodeOn={this.state.darkMode} darkmode={darkModeToggle}></SiteNavbar>
            <MobileItemPage darkmodeOn={this.state.darkMode}></MobileItemPage>
            </Route>
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;
