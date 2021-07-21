import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import MyInfo from "./components/MyInfo";
import {connect, useDispatch} from "react-redux";
import {scrollView} from './store/actions/scrollAction';

const App = (props) => {

    const dispatch = useDispatch();

  // const scrollIntoAnchor = (id) => {
  //   if (id) {
  //     let anchorEl = document.getElementById(id);
  //     if (anchorEl) {
  //       anchorEl.scrollIntoView({block: 'start', behavior: 'smooth'});
  //     }
  //   }
  // }


  return (
    <div className="App">
      <div className="myNavbar">
          <Navbar className="fixed-top" expand="sm" collapseOnSelect="true">
              <div className="container">
                  {/*<Navbar.Brand className="navbg navbg-brand" href="#home">J.Wang</Navbar.Brand>*/}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                      <Nav className="navlist">
                          <Link className="navlink" to="/" onClick={()=>dispatch(scrollView('home'))}>Home</Link>
                          <Link className="navlink" to={{ pathname: '/about'}} onClick={()=>dispatch(scrollView('about'))}>About</Link>
                          <Link className="navlink" to={{ pathname: '/portfolio'}} onClick={()=>dispatch(scrollView('portfolios'))}>Portfolio</Link>
                          <Link className="navlink" to={{ pathname: '/contact'}} onClick={()=>dispatch(scrollView('contact'))}>Contact</Link>
                          {/*<Link className="navlink" to={{ pathname: '/contact'}} onClick={()=>dispatch(scrollView('contact'))}>Test</Link>*/}
                      </Nav>
                  </Navbar.Collapse>
              </div>
          </Navbar>
      </div>


      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolios">
        <Portfolio />
      </section>
      <section id="contact">
        <h1 style={{fontFamily: "Segoe Script", textAlign: "center", padding: "20px 0px"}}>Contact</h1>
        <MyInfo />
        <Contact />
      </section>
      {/*<div><img src={require("./img/upArrow.png")} id="upArrow" alt="upArrow"/></div>*/}
      <div id="timTribute">◢◤</div>
    </div>
  );
}

export default connect()(App);
