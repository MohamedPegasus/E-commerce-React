import React,{useState} from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {ThemeContext} from './ThemeProvider'
import './styles.css'
const Footer = () => {
    const {theme, setThemeMode} = useContext(ThemeContext);
    const [darkMode, setDatkMode] = useState(theme);
   useEffect(()=>{
    setThemeMode(darkMode);
  },[darkMode]);
return (
    <div className={darkMode? 'bg-black ':'bg-light' }>
        <div className='flanding'>
        <div className='flanding-head' >
        <h1 className={darkMode? 'text-dark-primary': 'text-light-primary'} >CRAZY Food</h1>
        </div>
        <div className='landing-body'>
            <div className='landing-body-column'>
                <h1 className={darkMode? 'text-dark-primary': 'text-light-primary'}>branches</h1>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'} >egypt</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'} >daubi</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>amirca</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>germany</p>
            </div>
            <div className='landing-body-column'>
                <h1 className={darkMode? 'text-dark-primary': 'text-light-primary'}>contacts</h1>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'} >youtube</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'} >facebook</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>twiter</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>instagram</p>
            </div>
            <div className='landing-body-column'>
                <h1 className={darkMode? 'text-dark-primary': 'text-light-primary'} >branches</h1>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>egypt</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>daubi</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>amirca</p>
                <p className={darkMode? 'text-dark-primary': 'text-light-primary'}>germany</p>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Footer;
