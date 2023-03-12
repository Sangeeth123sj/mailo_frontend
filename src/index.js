import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import Templates from './Pages/Templates';
import InvalidPage  from './Pages/InvalidPage';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <center>
  <br/>
  <React.StrictMode>
    <BrowserRouter>
    
    <Navbar className="nav dark" bg="dark" variant="dark"  style={{ position: "fixed", top: 0, width: "100%" }}>
          <Navbar.Brand className="Navbar-brand" href="/">Mailo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/templates">Templates</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
    </Navbar>
    
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/templates" element={<Templates/>}/>
    <Route path="*" element={<InvalidPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </center>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
