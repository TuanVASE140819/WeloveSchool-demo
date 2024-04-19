import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../login/Login";
import Register from "../register/Register";
import DetailSchool from "../detailSchool/DetailSchool";
import AllSchool from "../allSchool/AllSchool";
import comsoon from "../comsoon/comsoon";
import AllGroup from "../AllGroup/AllGroup";
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/allSchool" component={AllSchool} />
          <Route exact path="/detailSchool/:id" component={DetailSchool} />
          <Route exact path="/allGroup" component={AllGroup} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/coming-soon" component={comsoon} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages
