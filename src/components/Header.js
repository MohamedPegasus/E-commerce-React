import React,{useState} from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./styles.css";
import {ThemeContext} from './ThemeProvider'
import {BiSun, BiMoon, BiCart} from 'react-icons/bi'
import {useCart} from 'react-use-cart'

function Header() {
  const {theme, setThemeMode} = useContext(ThemeContext);
  const [darkMode, setDatkMode] = useState(theme);
  useEffect(()=>{
    setThemeMode(darkMode);
  },[darkMode]);
  const {
    isEmpty,
    totalItems
  } = useCart();
  return (
    <Navbar collapseOnSelect expand="md"
    className={darkMode? 'bg-light-black border-buttom':'bg-light border-buttom' }
    variant={darkMode?'dark': 'light'}
    style={{width:'100%', position:'fixed',zIndex:100}}>
        <Container>
          <Navbar.Collapse>
          <Navbar.Brand className={darkMode? 'text-dark-primary': 'text-light-primary'} >
            <p>CRAZY Food</p>
          </Navbar.Brand>
          <Nav className="ms-auto links">
            <Link className={darkMode? 'text-dark-primary': 'text-light-primary'} to="/">Home</Link>
            <Link className={darkMode? 'text-dark-primary': 'text-light-primary'}
            to="/pricing">  <BiCart size='2rem' />
            {!isEmpty && <span style={{position:'relative', left:'-21px',top:'-18px'}}>{totalItems}</span>}My Cart </Link>
            <Nav.Link className={darkMode? 'text-dark-primary': 'text-light-primary'}
            onClick={()=>setDatkMode(!darkMode)}>
              {darkMode? <BiSun size="1.7rem"/>: <BiMoon size="1.7rem"/>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;