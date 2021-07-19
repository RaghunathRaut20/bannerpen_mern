import React from 'react';
import Navbar from './component/Navbar'
import Home from './component/Home';
import Footer from './component/Footer';
import Signup from './component/Signup'; 
import Signin from './component/Signin'; 
import About from './component/About'; 
import Bannerpen from './component/Bannerpen';
import Pendetails from './component/Pendetails';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/banner_pen" component={Bannerpen}></Route>
          <Route exact path="/bannerpen" component={Pendetails}></Route>          
          
      </Switch>     
      <Footer/>
    </>
  );
}

export default App;
