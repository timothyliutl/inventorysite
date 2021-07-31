import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SiteNavbar from './Navbar';
class App extends Component <any, any>{
  state = {
    darkMode: false
  }
  render(){
   
    const darkModeToggle = () =>{
      this.setState({darkMode:!this.state.darkMode});
    }
    
    return(
      <div>
        <SiteNavbar darkmode={darkModeToggle} darkmodeOn={this.state.darkMode}></SiteNavbar>
      </div>
    )
  }
}

export default App;
