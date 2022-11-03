import React, {useState} from "react";
import './Landing.css';
import data from '../data';
import { Button } from "react-bootstrap";



const Landing = (props)=>{
    const [show, setShow] = useState(false);
    
    return(
        <div className="landing">
            <div className="landing-oriental">
                <div className="landing-oriental-meals">
                        <div className="landing-oriental-meals-type">
                            <h1 onClick={() => setShow(!show)}>Sandewitch</h1>
                            {show && <div className="landing-oriental-meals-contain-item ">
                                {data.productData4.map((item,index)=>{
                                    return(
                                    <div className="landing-oriental-meals-contain ">
                                        <img src={item.img }/>
                                        <h2>{item.title}</h2>
                                        <p>{item.price}$</p>
                                        <h3>contants</h3>
                                        <p>{item.contant}</p>
                                        <Button variant="success">Add to Cart</Button>
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