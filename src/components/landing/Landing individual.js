import React, {useState} from "react";
import './Landing.css';
import data from '../Data';
import { useThemeHook} from '../ThemeProvider'
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

const Landing = (props) =>{
    const {addItem} = useCart();
    return(
        <div className="landing">
            <div className="landing-oriental">
                <div className="landing-oriental-meals">
                            <div className="landing-oriental-meals-contain-item ">
                                
                                    <div className="landing-oriental-meals-contain ">
                                        <img src={props.img }/>
                                        <h2>{props.title}</h2>
                                        <p>{props.price}$</p>
                                        <h3>contants</h3>
                                        <p>{props.contant}</p>
                                        <Button variant="success" onClick={()=>addItem(props.item)}>
                                        Add to Cart</Button>
                                    </div>
                                </div>
                </div>
            </div>
            
        </div>   
    )
};





export default Landing;