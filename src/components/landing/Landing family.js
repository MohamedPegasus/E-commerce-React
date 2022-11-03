import React, {useState, useEffect} from "react";
import './Landing.css';
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import data from "../data";

const Landing = (props)=>{
    const [show, setShow] = useState(false);
    const [cart, setCart] =useState([]);
    const handleClick=(item)=>{
        cart.push(item);
        console.log(cart);
    };
    
    return(
        <div className="landing">
            <div className="landing-oriental">
                <div className="landing-oriental-meals">
                        <div className="landing-oriental-meals-type">
                                        <h1 onClick={() => setShow(!show)}>Family Meal</h1>
                                        {show && <div className="landing-oriental-meals-contain-item ">
                                {data.productData.map((item,index)=>{
                                    return(
                                    <div className="landing-oriental-meals-contain ">
                                        <img src={item.img }/>
                                        <h2>{item.title}</h2>
                                        <p>{item.price}$</p>
                                        <h3>contants</h3>
                                        <p>{item.contant}</p>
                                        <Button variant="success" onClick={()=>handleClick(item)}>Add to Cart</Button>
                                    </div>
                                    )
                                })}
                                </div>}
                        </div>
                </div>
            </div>
        </div>
    )
};



export default Landing;