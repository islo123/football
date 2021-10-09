import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Navbar/Home"
import AboutUs from "../Navbar/AboutUs"
import Services from "../Navbar/Services"
import Players from "../Navbar/Players"
import Error from "../Navbar/Error";
import Footer from "../Footer/Footer"
const Index = function (){
    return (
        <Router>
            <Navbar/>
            <Switch>
                 <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about-us'>
                    <AboutUs />
                </Route>
                <Route path='/players'>
                    <Players/>
                </Route>
                <Route path='/services'>
                    <Services/>
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Index;