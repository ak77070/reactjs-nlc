import React, { Component } from 'react'
import './App.css';
import Routes from './Components/Navbar/navbar';
// import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// Hello world
class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App

