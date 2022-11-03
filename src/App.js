import React from 'react';
import './App.css';
import Features from './components/Features'
import Header from './components/Header';
import {CartProvider} from 'react-use-cart'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Pricing from './components/pages/Pricing'
import {BrowserRouter as Router,  Routes as Switch, Route} from 'react-router-dom'
import { useThemeHook} from './components/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './components/Data'
import { BiSearch } from "react-icons/bi";
import {SeachFilter} from 'react-filter-search'


function App() {
  const [theme] = useThemeHook();
  return (
    <div className={theme? 'bg-black': 'bg-light-2'}>
      <CartProvider>
      <Router>
      <Header />
      <Features />
      <Switch>
          <Route exact path='/E-commerce-React' element={<Home />}/>
          <Route path='/E-commerce-React/pricing' element={<Pricing />}/>
      </Switch>
      <Footer />
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
